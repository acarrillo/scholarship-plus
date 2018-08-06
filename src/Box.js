import React from 'react';
import './Box.css';

// All images are originally 800x600
const images = [
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4269382.jpg",
    "https://thumbs.dreamstime.com/b/call-center-headset-woman-sign-18884686.jpg",
    "https://thumbs.dreamstime.com/b/desperate-teacher-16488779.jpg",
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1906956.jpg",
    "https://thumbs.dreamstime.com/b/banner-sign-woman-peeking-over-edge-20853049.jpg",
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1709865.jpg",
    "https://www.photocase.com/photos/242322-woman-human-being-youth-young-adults-joy-yellow-feminine-photocase-stock-photo-large.jpeg",
    "https://blog.depositphotos.com/wp-content/uploads/2017/11/How-to-Create-Stock-Worthy-Images-That-Brands-Will-Love-1.jpg",
    "https://www.photocase.com/photos/128750-man-sky-sun-winter-work-and-employment-lighting-photocase-stock-photo-large.jpeg",
    "http://www.youloveit.com/uploads/posts/2017-03/1489320913_youloveit_com_hosico_cat01.jpg",
    "https://i.amz.mshcdn.com/niKEQtUKLRjVeprnNwCfQGnBc78=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F511986%2F56fe7642-b053-4667-89dc-e2d3abea5333.jpg",
    "https://thumbs.dreamstime.com/z/online-robber-17098197.jpg",
    "http://www2.pictures.zimbio.com/mp/yLDsty1F6N2x.jpg",
    "https://static3.depositphotos.com/1001951/142/i/950/depositphotos_1421004-stock-photo-cyber-woman-with-a-corn.jpg",
    "https://adobe99u.files.wordpress.com/2018/01/antonio-guillem-girl-winning-good-news-stock-photography.jpg?quality=100&w=1640&h=1200",
    "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
    "https://previews.123rf.com/images/creatista/creatista1001/creatista100100158/6288795-crazy-new-age-woman-with-old-guitar.jpg",
    "http://www.indscoop.com/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg",
    "https://c8.alamy.com/comp/E02BCW/young-redheaded-businessman-angry-eating-his-phone-headset-E02BCW.jpg",
    "http://cdn.ebaumsworld.com/mediaFiles/picture/718392/84890873.jpg",
    "https://g.foolcdn.com/editorial/images/489977/pandora-stock.jpg",
    "https://previews.123rf.com/images/kk5hy/kk5hy0707/kk5hy070700359/1267937-man-furious-with-his-bad-stock-trades-taking-it-out-on-his-computer-by-shooting-at-it-.jpg"
]

class Box extends React.Component {
    render() {
        return (
            <span className="Box">
            <img src={images[this.props.id]} width="325px" height="250px" alt=""/>
            </span>
        );
    }
}

export {Box, images};
