import React from 'react';
import Header from "./Header";
import heroLine2 from '../../../assets/img/hero/hero-line-3.png'
import heroTwoImg from '../../../assets/img/slider_1.jpg'
import crowd from "../../../assets/img/crodfinding.png"
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <>
            <section className="hero-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-11">
                            <div className="hero-text">
                                <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                                    کارستون ؛ مرجع راه اندازی و تامین مالی جمعی کسب و کارها
                                </h1>
                                <p className="text-right " style={{fontSize:"0.9rem"}}>
                                    در سال 1401 ایده اپلیکیشن و سایت کارستون با هدف کمک به مردم در مناطق محروم و دور افتاده  شکل گرفت. این سایت  تنها قصد کمک مالی  به افراد محروم جامعه نداشت و تیم کسب و کار کارستون تصمیم به ایجاد پلتفرمی جهت کمک به مردم جهت ایجاد کسب و کار  برای خود افراد و استقلال مالی آنها داشت. به همین جهت با بهره گیری از مشاوران افراد خبره در حوزه کسب و کار، شروع به طراحی اپلیکیشنی و سایتی جهت کمک به راه اندازی کسب و کارهای کوچک، تسهیل فرایند اجرایی و همراهی گام به گام تا رسیدن به محصول نهایی و فروش آن کرد.
                                </p>
                                <ul className="hero-btn">
                                    <li className="wow fadeInUp" data-wow-delay="0.4s">

                                        <Link to='/projects' className="main-btn">
                                            مشاهده طرح ها <i
                                            className="far fa-arrow-left"></i>
                                        </Link>
                                    </li>
                                    {/*<li className="wow fadeInUp" data-wow-delay="0.5s">
                                        <a href="#" className="video-btn"
                                           data-lity><i className="fas fa-play"></i></a>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="d-flex justify-content-center col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight">
                            <div className="" data-wow-delay="0.6s">
                                <img src={"https://cloud.tala24.co/kareston-images/crodfinding.png"} alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shapes">
                    <div className="hero-line-one">
                        <img src={"https://cloud.tala24.co/kareston-images/hero/hero-line.png"} alt="Line"/>
                    </div>
                    <div className="hero-line-two">
                        <img src={"https://cloud.tala24.co/kareston-images/hero/hero-line-2.png"} alt="Line"/>
                    </div>
                    <div className="dot-one"></div>
                    <div className="dot-two"></div>
                </div>
            </section>
        </>
    );
}

export default MainPage