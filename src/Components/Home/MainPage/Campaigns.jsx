import React, {useEffect} from 'react';
import Slider from "react-slick";
import {BsCash, BsHeart, BsHeartFill} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import {useState} from "react";
import img1 from "../../../assets/img/divarmehrabani.jpg"
import img2 from "../../../assets/img/project/project-list-03.jpg";
import {Link} from "react-router-dom";
import api from "../../../api/api";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {numberSlicer} from "../../../helper/numberSlicer";
import axios from "axios";
import {SeparateNumber} from "../../../helper/SeparateNumber";
import {EnglishToPersian} from "../../../helper/EnglishToPersian";

function Campaigns() {
    const [isLiked, setIsLiked] = useState(false);
    const [projects, setProjects] = useState([]);
    const [profileList, setProfileList] = useState([]);

    const [countOfProject, setCountOfProject] = useState(0)

    const getHalalProject = async () =>{
        const respond = await axios.post(`https://halalfund.ir/api/v1/fetchVerifiedProject?page=1&per_page=6`)
        setProfileList(respond.data.data.items)
    }

    const getProjects = async () => {
        const projectsResponse = await api.get("project")
        setProjects(projectsResponse.data)
        if (projectsResponse.data.length <= 4) {
            setCountOfProject(projectsResponse.data.length)
        } else {
            setCountOfProject(4)
        }
        let profileUrls = []
        for (let i = 0; i < projectsResponse.data.length; i++) {
            const getProfileResponse = await api.get(`file/${projectsResponse.data[i].profileId}`, {responseType: 'blob'}).then(response => response.data)
                .then((data) => {
                    profileUrls.push(URL.createObjectURL(data));
                })
        }
        setProfileList([...profileUrls])
    }

    useEffect(() => {
        getHalalProject()
        //getProjects()
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
            <section className="emergency-project-with-cta">
                <div className="emergency-project-slider">
                    <div className="container">
                        <div className="common-heading text-center mb-60">
					<span className="tagline">
						<i className="fas fa-plus"></i>پروژه های محبوب
						<span className="heading-shadow-text">پروژه های ما</span>
					</span>
                            <h2 className="title">پروژه های ما را کاوش کنید</h2>
                        </div>
                        <div className="row project-items project-style-three justify-content-center">
                            <Slider {...settings}>
                                {
                                    profileList.map((project, index) =>
                                        <div className="col-lg-6 col-sm-10 px-4">
                                            <div className="project-item">
                                                <div className={"thumb"}>
                                                    <img className={"thumb"} style={{borderRadius: "1rem"}} src={`https://halalfund.ir${project.thumb_picture}`} alt=""/>
                                                </div>
                                                <div className="content">
                                                    <div className="cats">
                                                        <a href="" style={{backgroundColor: "rgb(2 36 21 / 64%)",fontSize:"1.1rem",lineHeight:"2"}}>{project.title}</a>
                                                    </div>
                                                    <div className="project-stats">
                                                        <div className="stats-value">
                                                            <div className="d-flex align-items-center">
                                                                <i className="far fa-calendar-alt" style={{color:"#dcdcdc"}}></i>
                                                                <span className="value-title mx-2"> باقی مانده</span>
                                                            </div>
                                                            <span className="value mx-2">{EnglishToPersian(project.remainingTime)}</span>
                                                        </div>
                                                        <div className="stats-value">
                                                            <div className="d-flex align-items-center">
                                                                <BsCash color="#dcdcdc"/>
                                                                <span className="value-title mx-2"> مبلغ مورد نياز</span>
                                                            </div>
                                                            <span className="value">{EnglishToPersian(project.totalPrice)}<span className="text-white mx-1">ریال</span></span>
                                                        </div>
                                                        <div className="stats-value">
                                                            <div className="d-flex align-items-center">
                                                                <GiCash color="#dcdcdc"/>
                                                                <span className="value-title mx-2"> مبلغ حمايت شده</span>
                                                            </div>
                                                            <span className="value">{EnglishToPersian(SeparateNumber(project.peopleDonate.toString()))}<span className="text-white mx-1">ریال</span></span>
                                                        </div>

                                                        <div className="bar mt-4" data-value="">
                                                            <div className="d-flex justify-content-end">
                                                    <span style={{
                                                        fontSize: "1rem",
                                                        color: "#fff"}}>{EnglishToPersian(project.progress.toString())}%</span>
                                                            </div>
                                                            <ProgressBar style={{height: "0.7rem"}}  now={project.progress}/>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 d-flex justify-content-center">
                                                        <a target="_blank" href={`https://halalfund.ir/projectDetail/${project.code}`} className={"main-btn"}>حمايت ميكنم</a>
                                                    </div>
                                                    <div className="mt-4  d-flex justify-content-between">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Campaigns