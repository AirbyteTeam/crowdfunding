import React, {useEffect, useState} from 'react';
import {BsCash} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import api from "../../../api/api";
import {Link} from "react-router-dom";
import axios from "axios";
import {PaginationControl} from 'react-bootstrap-pagination-control';
import {SeparateNumber} from "../../../helper/SeparateNumber";
import {EnglishToPersian} from "../../../helper/EnglishToPersian";

const currencies = [
    {
        value: 'new',
        label: 'جديد ترين',
    },
    {
        value: 'popular',
        label: 'مشهور ترين',
    },
    {
        value: 'old',
        label: 'قديمی ترين',
    },
];


function ListOfProject() {

    let lastPage = 10;
    const [isLiked, setIsLiked] = useState(false);
    const [projects, setProjects] = useState(
        [
            {
                "id": "eyJpdiI6Ik9zdmlhd1Iyb3J6WWVkdlRuUXpLa1E9PSIsInZhbHVlIjoiYUlBaUc4YUZNTzFxXC9rb0YyY2Z4TkE9PSIsIm1hYyI6ImNkNzMwOGQ2NWNlNGQ2ZmUwYzQxZTk5N2IyOWQzN2MwZWNlNWIwOTJlMDU2NGQ5YmY5YmVkMjBhMzFkYWZjM2MifQ==",
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
                "id": "eyJpdiI6Ilwvak1CeXRmWmhHNUUyZUpaMThDUUF3PT0iLCJ2YWx1ZSI6IjQyOWQzNDJuYUhiZ05rcHlvWGduUnc9PSIsIm1hYyI6ImEyNjBhMWJmZjVmNzRhZWIzNDE3MzYyZDIzZThiZDEwZGM3NjVhOTFmYmMzNjZkYWU5ZmExYTNkNDQzNTI2NTMifQ==",
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
                "id": "eyJpdiI6Ik1SYmQwVUdvTTBreVwvblNGYldOZGdBPT0iLCJ2YWx1ZSI6IkQxM2VQVXlFQWJBbEFBVWRuYkpOSUE9PSIsIm1hYyI6IjY4ZWNkMGRkODZlNGVkOWM3NDlkNThhMDgwODJiZTc3YWRmYWFjMzg5ZjRmM2YxYjQzYzcyZTYzNzYwNWIyMjAifQ==",
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
                "id": "eyJpdiI6Im9iWGljQTVlQXNMTTdST0R6V05mQUE9PSIsInZhbHVlIjoiMTdlRnluSkYrMXRaMkRKYllJcnR3Zz09IiwibWFjIjoiNTdiMTI0Yjk1MzMzZThkOWVjNmQ1ZTNjYzRkYmNmMWRlMDA0ZGM5ZTkwM2VkZjAwYzBjNTk5Y2VlNDliOTNmZCJ9",
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
                "id": "eyJpdiI6IkhtUUNLNlJBa1NRTDJiSGEyOFo2NlE9PSIsInZhbHVlIjoiNEdQblFJU0YzV3V0RFdCWHk3OXdRUT09IiwibWFjIjoiNWIwNGE3N2RhMjI1MTM1ZWE2MjNiOTJhNjIxOWMyMzVlNDQzMTI0ZmE2MDg1NTEyMThhMjczMmNhZDNmMTI0OSJ9",
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
                "id": "eyJpdiI6ImhXdmM0VXlCS1NQaUFIUWVEN1ljQlE9PSIsInZhbHVlIjoiZmMzbTh1YWNzdFVkNmptYVZ3YmJJQT09IiwibWFjIjoiZTRkNGIwYjhmNDRkMDhhNDE0M2JjYjllM2M2YjRlNWJhMGZmZDJmMTJlNzZmNzY1ODgyYTdmYzU3NjNhYjU4NiJ9",
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
            },
            {
                "id": "eyJpdiI6ImxxK3M5UitTeDJqbkh3eGxUWU4wbkE9PSIsInZhbHVlIjoiSlpvQ3pyV0lVa1luK0JoVTNmcklqUT09IiwibWFjIjoiOTI2NzVmYzY4NzdhYzdjN2VkNmIwMDQzMmQ3YTQzNmI5Mzc0NGVlODUwYmE2OTNjNzQ3OWZlYWQ5MjhkZWYzMSJ9",
                "code": "102100033",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "33,500,000,000",
                "thumb_picture": "/ProjectFiles/2023/5/6/537/cropped-cropped-cropped-hamrah mechanic.jpg",
                "peopleSupported": 82,
                "peopleDonate": 33500000000,
                "progress": 100,
                "remainingTime": "3 هفته ",
                "title": "تامین سرمایه ‌در گردش جهت تسویه نقدی فروش‌های لیزینگی"
            },
            {
                "id": "eyJpdiI6Ik14Z3ZzcmhNcXhVelpYbVdYdk4yMHc9PSIsInZhbHVlIjoiYm0yaEcydUQ0NnpySmZ2cU5ZdVI5dz09IiwibWFjIjoiNmFkY2JlOGM1ZDI2ZjgzY2M1NWU0NDdiYzRmODMyODdlOTAyNDUwMDk0N2ExNmIzMDRlYWUzYzE2NGFlZTk3YSJ9",
                "code": "102100034",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "138,000,000,000",
                "thumb_picture": "/ProjectFiles/2023/5/23//cropped-Airplaneproduct.jpg",
                "peopleSupported": 190,
                "peopleDonate": 122189000000,
                "progress": 89,
                "remainingTime": "8 ساعت ",
                "title": "تامین سرمایه جهت خرید 2 دستگاه موتور هواپیما برای شرکت هواپیمایی تابان مرحله دوم"
            },
            {
                "id": "eyJpdiI6IjRDMjlIVEhCT0h5emNFXC9lRnBMMTR3PT0iLCJ2YWx1ZSI6ImptZVR1UWVWaDRBT3p4XC80WTlnYVR3PT0iLCJtYWMiOiIzYzUzNGNhY2I5NjdmYjJjMDE1MjIwYTMxMDZlZTAxOWFlOWJjNjlkNmRiOWRkZDU4ODQ1MjVmMzhkNTBiYmM4In0=",
                "code": "102100035",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "54,000,000,000",
                "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_5fe2cf59-b3c6-47b1-85c3-5a507b07337e.jpg",
                "peopleSupported": 117,
                "peopleDonate": 52962000000,
                "progress": 98,
                "remainingTime": "8 ساعت ",
                "title": "تأمین سرمایه در گردش طرح آموزش در حوزه بین‌الملل صنعت اینترنت اشیا 3"
            },
            {
                "id": "eyJpdiI6ImMrYjl1K2p6XC9NbUJWMWkxQlRGVkNBPT0iLCJ2YWx1ZSI6IlwvS0gzTmFYNE1kMEFXOW1JMnRRSGpnPT0iLCJtYWMiOiI1MTY0MzNjMGJlYTA1NDA4ODU2NmE1NzkxYmE4MzliYzZkZmY5ZGNjZTIyYmI5YWM1NWJkZWMyMjFlYzBlOWQzIn0=",
                "code": "101100024",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "112,000,000,000",
                "thumb_picture": "/ProjectFiles/2023/2/7//cropped-مس، ویژگی ها و کاربردها3.jpg",
                "peopleSupported": 9,
                "peopleDonate": 112000000000,
                "progress": 100,
                "remainingTime": "3 روز پیش",
                "title": "تامین سرمایه در گردش برای خرید مس"
            },
            {
                "id": "eyJpdiI6InFVVFlFa21tVW9qbjU3M1prQ0RUWWc9PSIsInZhbHVlIjoiUGpIOWFoSGhsd29lUGswNmxCQ29TQT09IiwibWFjIjoiMjk1YzFiZjk5YjEyNmJjZDhmMDQ0ZjgxYWJjOWJkMmQwMDU5ODFkMTE5NGU3MzgwMzNiYTJlODg2ZjAwZjI0MSJ9",
                "code": "101100020",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "11,100,000,000",
                "thumb_picture": "/ProjectFiles/2023/2/7//cropped-Screenshot004.jpg",
                "peopleSupported": 59,
                "peopleDonate": 11100000000,
                "progress": 100,
                "remainingTime": "3 روز پیش",
                "title": "تامین سرمایه در گردش جهت توسعه بازار و انجام تبلیغات برای تولید بازی های موبایلی"
            },
            {
                "id": "eyJpdiI6InFZSCt3OHQwMzZ5TUNWa0lwSXVyZHc9PSIsInZhbHVlIjoiM3RMOEQ3WmV3ZmtaSlhCRVlNbzJcL2c9PSIsIm1hYyI6IjdhZTcwMDgxNzA2NGU2YTAxMWQ5MmRkODkyOWM0NTFmOTY2ODI0ODI1NTU1ZWJkMTgyYzU0YjkxMzJkYTJjMDEifQ==",
                "code": "101100021",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "22,200,000,000",
                "thumb_picture": "/ProjectFiles/2022/11/28/5020/cropped-p5.jpg",
                "peopleSupported": 67,
                "peopleDonate": 22200000000,
                "progress": 100,
                "remainingTime": "3 روز پیش",
                "title": "تامین سرمایه در گردش تولید 3.6 میلیون واحد چست الکترود"
            },
            {
                "id": "eyJpdiI6IjB6NGwwK0RNZlJ1YVJnS3VwU3NEb3c9PSIsInZhbHVlIjoiNmFzN3dsSWZ2TTF0UFJua1A1UnJwUT09IiwibWFjIjoiNDVhMTk1NTI5ZWE4M2NhMWUyYzBiMDU5MDAwMjNjYjE4YzliMzMzMTcyZTBiYjY4MzQwZWExNjZmZGI1NmUyMyJ9",
                "code": "101100022",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "22,200,000,000",
                "thumb_picture": "/ProjectFiles/2023/2/7//cropped-CLEAN-ROOM.jpg",
                "peopleSupported": 109,
                "peopleDonate": 22200000000,
                "progress": 100,
                "remainingTime": "3 روز پیش",
                "title": "تامین سرمایه به منظور تکمیل واحد اتاق تمیز شرکت رهپویان فناور صادق مرحله دوم"
            },
            {
                "id": "eyJpdiI6ImJRSCtUZ0ZVN2g1dUtVazI2RHVIZ3c9PSIsInZhbHVlIjoiWXlLZ3N5elpJYzR4eXNQWXhoK2pBdz09IiwibWFjIjoiYzdhNmJkMDIyODIyYTg2MDg0ZmQ4NzYwMzYxYzg5OWNjNzUyNWFkNmQ5ZjZkY2I2NGYxODkwMDE5NGEzZDk3NSJ9",
                "code": "101100026",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "36,000,000,000",
                "thumb_picture": "/ProjectFiles/2023/5/24//cropped-_995bed3d-99ff-46ab-a184-ffb45514d5fb.jpg",
                "peopleSupported": 174,
                "peopleDonate": 36000000000,
                "progress": 100,
                "remainingTime": "4 روز پیش",
                "title": "تامین سرمایه به منظور تکمیل واحد اتاق تمیز شرکت رهپویان فناور صادق مرحله سوم"
            },
            {
                "id": "eyJpdiI6IlU3eWFaQnBSd2dubThISmpkNEJ6OHc9PSIsInZhbHVlIjoiSHBKM0kwME5UTndGdGdUUlR6SnZWZz09IiwibWFjIjoiOTVjMGQzNzRkOWMyMzEyNzYwNmEyNGNkY2FhMDhhOWVmMTM4NWE1ZWMwMjMwOTYwZGE3N2MzMDA2OWRiMjA4ZCJ9",
                "code": "101100023",
                "categories": [
                    [
                        {
                            "name": "گواهی شراکت"
                        }
                    ]
                ],
                "totalPrice": "26,000,000,000",
                "thumb_picture": "/ProjectFiles/2023/2/7//cropped-electronic.parts.jpg",
                "peopleSupported": 123,
                "peopleDonate": 26000000000,
                "progress": 100,
                "remainingTime": "3 هفته پیش",
                "title": "تامین سرمایه در گردش به منظور خرید کالای الکترونیکی"
            }
        ]);


    const [profileList, setProfileList] = useState([]);
    const [page, setPage] = useState(1);


    const halalProject = async (page) => {
        const respond = await axios.post(`https://halalfund.ir/api/v1/fetchVerifiedProject?page=${page}&per_page=12`)
        setProjects(respond.data.items)
        setPage(page)
    }

    const getProjects = async () => {
        const projectsResponse = await api.get("project")
        setProjects(projectsResponse.data)
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
        halalProject(1)
        // getProjects()
    }, []);

    function toggleLikeBtn() {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <>
            <div className="container mt-5">
                <div className="row project-items project-style-three justify-content-center">
                    {
                        projects.map((project, index) =>
                            <div className="col-lg-4 col-sm-10">
                                <div className="project-item mb-30">
                                    <div className={"thumb"}>
                                        <img className={"thumb"} style={{borderRadius: "1rem"}}
                                             src={`https://halalfund.ir${project.thumb_picture}`}
                                             alt=""/>
                                    </div>
                                    <div className="content">
                                        <div className="cats">
                                            <a href="#" style={{
                                                backgroundColor: "rgb(2 36 21 / 64%)",
                                                fontSize: "1rem",
                                                lineHeight: "2"}}>{project.title}</a>
                                        </div>
                                        <div className="project-stats">
                                            <div className="stats-value">
                                                <div className="d-flex align-items-center">
                                                    <i className="far fa-calendar-alt" style={{color:"#dcdcdc"}}></i>
                                                    <span className="value-title mx-2"> باقی مانده</span>
                                                </div>
                                                <span className="value mx-2 ">{EnglishToPersian(project.remainingTime)}</span>
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
                                                <ProgressBar style={{height: "0.7rem"}}
                                                             now={project.progress}/>
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-center">
                                            <a href={`https://halalfund.ir/projectDetail/${project.code}`} target="_blank" className={"main-btn"}
                                                  style={{padding: "0.8rem 5rem"}}>حمايت ميكنم</a>
                                        </div>
                                        <div className="mt-4  d-flex justify-content-between">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <div className="d-flex justify-content-center mb-5" style={{direction: "ltr"}}>
                    <PaginationControl
                        page={page}
                        between={3}
                        total={lastPage}
                        limit={1}
                        changePage={(page) => {
                            halalProject(page)
                        }}
                        ellipsis={1}/>
                </div>
            </div>
        </>
    );
}

export default ListOfProject