import React from 'react';
import sbu from '../../../assets/img/sbu logo.jpg'
import halal from "../../../assets/img/HalaFund.png"
import Slider from "react-slick";
/*import salam from '../../../../public/images/logo-barekat.png'*/
function Partners() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="partners-section section-gap section-border-bottom">
                <div className="container">
                    <div className="common-heading mb-30">
				<span className="tagline">
					<i className="fas fa-plus"></i> حامیان ما
					<span className="heading-shadow-text">حامیان</span>
				</span>
                        <h2 className="title">مورد اعتماد برند های معروف</h2>
                    </div>
                    <div className="row partners-logos-one">
                        <Slider {...settings}>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="logo mt-30">
                                    <a href="#" style={{textAlign:"center"}}><img src={"https://cloud.tala24.co/kareston-images/sbu logo.jpg"} style={{width:"10rem"}} alt="Image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="logo mt-30">
                                    <a href="#"><img src='https://cloud.tala24.co/kareston-images/logo-barekat.png' style={{width:"15rem"}} alt="Image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="logo mt-30">
                                    <a href="#"><img src={"https://cloud.tala24.co/kareston-images/HalaFund.png"}  style={{width:"10rem"}} alt="Image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="logo mt-30">
                                    <a href="#"><img src={"https://cloud.tala24.co/kareston-images/dongi.jpg"}  style={{width:"10rem"}} alt="Image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="logo mt-30">
                                    <a href="#"><img src={"https://cloud.tala24.co/kareston-images/mehrabane.jpg"}  style={{width:"10rem"}} alt="Image"/></a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Partners