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
            <section className="emergency-project-with-cta">
                <div className="emergency-project-slider">
                    <div className="container">
                        <div className="common-heading text-center mb-20">
					<span className="tagline">
						<i className="fas fa-plus"></i>پروژه های محبوب
						<span className="heading-shadow-text">پروژه های ما</span>
					</span>
                            <h2 className="title">پروژه های ما را کاوش کنید</h2>
                        </div>
                        <div className="row justify-content-center">
                            <Slider {...settings}>
                                {
                                    profileList.map((project, index) =>
                                        <div className="px-4" >
                                            <div className="bg-white flex flex-col sm:flex-row rounded-2xl">
                                                <div className="w-full sm:w-[65%]">
                                                    <img className=" rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-2xl sm:rounded-bl-2xl object-cover w-full h-72 sm:h-full"
                                                         src={`https://halalfund.ir${project.thumb_picture}`}
                                                         alt="project"/>
                                                </div>
                                                <div className="p-4" style={{direction:"rtl"}}>
                                                    <div className="font-bold text-[1.1rem]">
                                                        <a href={`https://halalfund.ir/projectDetail/${project.code}`}>{project.title}</a>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row justify-around mt-4">
                                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                                            <i className="far fa-calendar-alt text-[1.7rem] text-[#4eb801]" ></i>
                                                            <span className="mt-1 text-neutral-700 text-[0.9rem]"> باقی مانده</span>
                                                            <span className="mt-1 text-black font-bold text-[0.9rem]">{EnglishToPersian(project.remainingTime)}</span>
                                                        </div>
                                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                                            <BsCash fontSize="1.7rem" color="#4eb801"/>
                                                            <span className="mt-1 text-neutral-700 text-[0.9rem]"> مبلغ مورد نياز</span>
                                                            <span className="mt-1 text-black font-bold text-[0.9rem]">{EnglishToPersian(project.totalPrice)}<span className="mx-1">ریال</span></span>
                                                        </div>
                                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                                            <GiCash fontSize="1.7rem" color="#4eb801"/>
                                                            <span className="mt-1 text-neutral-700 text-[0.9rem]"> مبلغ حمايت شده</span>
                                                            <span className="mt-1 text-black font-bold text-[0.9rem]">{EnglishToPersian(SeparateNumber(project.peopleDonate.toString()))}<span className="mx-1">ریال</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="d-flex justify-content-end">
                                                            <span>{EnglishToPersian(project.progress.toString())}%</span>
                                                        </div>
                                                        <ProgressBar style={{height: "0.7rem"}} now={project.progress}/>
                                                    </div>
                                                    <div className="mt-4 d-flex justify-content-center">
                                                        <a href={`https://halalfund.ir/projectDetail/${project.code}`} target="_blank" className={"main-btn"}
                                                           style={{padding: "0.8rem 5rem"}}>حمايت ميكنم</a>
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