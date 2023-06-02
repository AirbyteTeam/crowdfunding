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

    const [lastPage,setLastPage] = useState(1)
    const [isLiked, setIsLiked] = useState(false);
    const [projects, setProjects] = useState([]);


    const [profileList, setProfileList] = useState([]);
    const [page, setPage] = useState(1);


    const halalProject = async (page) => {
        const respond = await axios.post(`https://halalfund.ir/api/v1/fetchVerifiedProject?page=${page}&per_page=12`)
        let listOfProject =  respond.data.data.items;
        let resultList = [];
        let start = ((page-1) * 12);
        for(let i = start; i < start + 12 ; i++ ){
            if(listOfProject[i] === undefined){
                break;
            }
            resultList[i-start] = listOfProject[i];
        }
        console.log(resultList)
        setProjects(resultList)
        setPage(page)
    }

    const getProjects = async () => {
        const respond = await axios.post(`https://halalfund.ir/api/v1/fetchVerifiedProject?page=1&per_page=12`)
        setProjects(respond.data.data.items)
        setLastPage(respond.data.data.last_page);
    }

    useEffect(() => {
        getProjects();
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
                        projects.map((project) =>
                            <div className="col-lg-4 col-sm-10">
                                <div className="project-item mb-30">
                                    <div className={"thumb"}>
                                        {
                                            <img className={"thumb"} style={{borderRadius: "1rem"}}
                                                 src={`https://halalfund.ir${project.thumb_picture}`}
                                                 alt=""/>
                                        }
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
                                                <ProgressBar style={{height: "0.7rem"}} now={project.progress}/>
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
                        changePage={(page) => {halalProject(page)}}
                        ellipsis={1}/>
                </div>
            </div>
        </>
    );
}

export default ListOfProject