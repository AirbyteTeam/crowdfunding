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
    const [profileList, setProfileList] = useState([
        {
            "id": "eyJpdiI6Im1Qc3ZhN2g5OUxLVENrbkJWREZwdWc9PSIsInZhbHVlIjoiQUJSSjlFNVFQMzNZdUU3M3BXSGMydz09IiwibWFjIjoiZTdlYTZiNzRjYjNlYmFkZTRjOTUyNjAxYmU0YzU5ZjQ4MWUxMmI0YTA5YzZjMmVkZTk1N2RlNjhjODQ2NjQ4ZCJ9",
            "code": "101100025",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "27,800,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_24eddd3d-6745-4ed6-a20d-aa32e3549239.jpg",
            "peopleSupported": 151,
            "peopleDonate": 27800000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "مشارکت در پروژه ارتقا زیرساخت فناوری و بهینه‌سازی خدمات تشخیص و درمان طبی آزمایشگاه ها مرحله سوم"
        },
        {
            "id": "eyJpdiI6ImxFQ1BMMUtwbGtYcUxCTlQ4ZktcLzhBPT0iLCJ2YWx1ZSI6InZQd0VjSVhhWUVuZ1NwQlVZWGJhZkE9PSIsIm1hYyI6IjA4N2IyZjYyYTlkOGI0YTE2YTQ4ZDExYjIzYTQwZjFhNTIzY2QwOTllNjljNWE4OTRhNzg1MDhkMDJjYTQ2NDYifQ==",
            "code": "101100027",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "112,000,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/23//cropped-Airplaneproduct1.jpg",
            "peopleSupported": 72,
            "peopleDonate": 112000000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "تامین سرمایه جهت خرید 2 دستگاه موتور هواپیما برای شرکت هواپیمایی تابان"
        },
        {
            "id": "eyJpdiI6InUxRUlMNGhMcHpSdGc2S2R0NGdHOWc9PSIsInZhbHVlIjoibGtJZmM4YUV2STNpeVwvSVJLdjlaVlE9PSIsIm1hYyI6ImEwYjg0MjBkNjExZWY0YjgwMDdlODlhYThhYTE0OWNlYTI4ODM4N2E1N2FkMmY0YjRjN2Q4ZWQ1MTZmYTliOGQifQ==",
            "code": "101100029",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "112,000,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_65aca8d2-68ca-44d2-8ec9-fd3e20510f09.jpg",
            "peopleSupported": 10,
            "peopleDonate": 112000000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "تامین سرمایه در گردش به منظور خرید لوازم یدکی دستگاه‌های فلومتر آلتراسونیک"
        },
        {
            "id": "eyJpdiI6Im1MXC92bjBzclRjSWZKZDBuR1k0XC96QT09IiwidmFsdWUiOiI2SVZmdnB1VUI0eElNazdBUnRuQmlBPT0iLCJtYWMiOiIzNjI1YzFjNTI5NTgyNWEyNDcxNzhiMGU0YWIwZWNkZDYyMGY5ZjViOGY4Zjg4NWU3ODYwOWMyYjQ3ZTIxNzcwIn0=",
            "code": "101100028",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "37,000,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_6792f4c5-4e05-4159-996c-22678d5b18a6.jpg",
            "peopleSupported": 142,
            "peopleDonate": 37000000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "تامین سرمایه در گردش به منظور خرید قطعات ذخیره ساز"
        },
        {
            "id": "eyJpdiI6ImhkTWZvOHpETUxnN2ZWcml4R0luclE9PSIsInZhbHVlIjoiNGZNdDJTcGgySHZLZkQ1cW84bE1Rdz09IiwibWFjIjoiMWQwMjc0ZDM2MjkyY2M4NTAxN2FhZGFkNWNlNmRjODg0ODRhY2Q2YWVhMGM5ZjYzOWM3NzlhZGYxNWNmZGNhZCJ9",
            "code": "101100030",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "27,800,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_92858b7f-3df9-4444-87cd-9535717b5d24.jpg",
            "peopleSupported": 206,
            "peopleDonate": 27800000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "تامین سرمایه ‌در گردش جهت اجرای عملیات ابنیه پروژه مجتمع رفاهی مشهد"
        },
        {
            "id": "eyJpdiI6Im50akJUWDB3c1NhbzZZK1h5M2lkVmc9PSIsInZhbHVlIjoicGpSQ1ljSWpWblQrYXllOVwvQU1XaUE9PSIsIm1hYyI6ImZjNmQzMzdmOTJmNWI2MTYxMjJjNjNkYjc3OTM4YmRiN2FjYTFkNGQ1NWY3NWJmY2E1YTBkZDUxOTNjZDFlMDcifQ==",
            "code": "102100031",
            "categories": [
                [
                    {
                        "name": "گواهی شراکت"
                    }
                ]
            ],
            "totalPrice": "16,500,000,000",
            "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_c05481da-e854-40f7-955f-8795fa6b6184.jpg",
            "peopleSupported": 4,
            "peopleDonate": 16500000000,
            "progress": 100,
            "remainingTime": "3 هفته ",
            "title": "تامین سرمایه در گردش به منظور خرید مواد اولیه کامپاند سپری خودرو"
        }
    ]);

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
                                                        <a href="" className={"main-btn"}>حمايت ميكنم</a>
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