import React from 'react';
import {EnglishToPersian} from "../../../helper/EnglishToPersian";

function Details() {

    return (
        <>
            <section className="contact-section section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {/*<div className="col-lx-4 col-lg-5 col-sm-10">
                            <div className="contact-info-text mb-md-70">
                                <div className="common-heading mb-30">
                            <span className="tagline">
                                <i className="fas fa-plus"></i> پروژه حمایتی
                                <span className="heading-shadow-text">حمایت</span>
                            </span>
                                    <h2 className="title">آماده دریافت اطلاعات بیشتر هستید؟</h2>
                                </div>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از .
                                </p>
                                <a href="events.html" className="main-btn mt-35">اطلاعات بیشتر <i
                                    className="far fa-arrow-left"></i></a>
                            </div>
                        </div>*/}

                        <div className="col-10 offset-xl-1">
                            <div className="contact-info-boxes">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6 col-sm-10">
                                        <div className="info-box text-center wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="icon">
                                                <i className="flaticon-place"></i>
                                            </div>
                                            <div className="info-content">
                                                <h5 style={{fontWeight: "600"}}>آدرس ما</h5>
                                                <p style={{fontSize: "0.9rem"}}>
                                                    تهران، ولنجک، میدان شهید شهریاری، دانشگاه شهید بهشتی، ساختمان پارک علم و فناوری
                                                </p>
                                            </div>
                                        </div>
                                        <div className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                                             data-wow-delay="0.3s">
                                            <div className="icon">
                                                <i className="flaticon-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <h5>ایمیل</h5>
                                                <p>
                                                    <a style={{color: "#000"}} href="#">kaareston.1402@gmail.com</a> <br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-10">
                                        <div className="info-box text-center wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="icon">
                                                <i className="flaticon-phone-call-1"></i>
                                            </div>
                                            <div className="info-content">
                                                <h5>پشتیبانی</h5>
                                                <p>
                                                    {EnglishToPersian("021-29902931")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Details