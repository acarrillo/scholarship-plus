import os
from flask import Flask, Response, send_from_directory
import json
import sys
import Queue
from tweepy import OAuthHandler, Stream, StreamListener


CONSUMER_KEY = os.getenv('CONSUMER_KEY')
CONSUMER_SECRET = os.getenv('CONSUMER_SECRET')
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
ACCESS_TOKEN_SECRET = os.getenv("ACCESS_TOKEN_SECRET")

#DEFAULT_FILTER = ['#supporttheplus']
DEFAULT_FILTER = ['Elon']


app = Flask(__name__)


@app.route('/index.html')
def main():
    base_path = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(base_path, '..', 'build')
    return send_from_directory(build_dir, 'index.html')

@app.route('/scholarship-plus/static/<content>/<file>')
def static_files(content, file):
    print content, file
    base_path = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(base_path, '..', 'build', 'static', content)
    return send_from_directory(build_dir, file)


@app.route('/api/fetch')
def fetch_tweets():
    tweets = Queue.Queue()
    class StreamCallback(StreamListener):
        def on_data(self, tweet):
            tweet = json.loads(tweet)
            tweets.put(tweet)

        def on_error(self, status_code):
            print status_code

    def event_stream():
        while True:
            tweet = tweets.get()
            yield "data: {}\n\n".format(json.dumps(tweet))

    auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    cb = StreamCallback()
    streamer = Stream(auth, cb)

    filter = DEFAULT_FILTER
    streamer.filter(track=filter, async=True)
    return Response(event_stream(), mimetype='text/event-stream')


if __name__ == '__main__':
    app.run(debug=True)
