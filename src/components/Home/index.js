import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://cdn.itviec.com/photos/41678/processed_headline_photo/bocasay-headline_photo.JPG?ST9XVBd8aohXHX6ZJgYGcEex" />
          <p className="legend">Hoạt động thường niên công ty</p>
        </div>
        <div>
          <img src="https://cdn.itviec.com/photos/380/processed_headline_photo/grab-vietnam-ltd-headline_photo.PNG?1oCxXM3NMbqAvHhZCEJ4JnbB" />
          <p className="legend">Top công ty hàng đầu Việt Nam</p>
        </div>
        <div>
          <img src="https://cdn.itviec.com/photos/33827/processed_headline_photo/haravan-headline_photo.PNG?9X24CbH2myLHeZt4XYkmzo4X" />
          <p className="legend">Có việc như ý tại đây</p>
        </div>
      </Carousel>
    );
  }
}
export default Home;
