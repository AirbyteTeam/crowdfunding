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

        setProjects(resultList)
        window.scrollTo(0,0)
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projects.map((project) =>(
                                <div className="mx-4 my-4">
                                    <div className="bg-white shadow-2xl flex flex-col rounded-2xl">
                                        <div className="w-full">
                                            <img className="rounded-tl-2xl rounded-tr-2xl object-cover w-full h-72"
                                                 src={`https://halalfund.ir${project.thumb_picture}`}
                                                 alt="project"/>
                                        </div>
                                        <div className="p-4">
                                            <div className="font-bold text-[1.3rem]">
                                                <a href={`https://halalfund.ir/projectDetail/${project.code}`}>{project.title}</a>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-around mt-4">
                                                <div className="flex flex-col items-center my-1 sm:my-0">
                                                    <i className="far fa-calendar-alt text-[1.9rem] text-[#4eb801]" ></i>
                                                    <span className="mt-1 text-neutral-700"> باقی مانده</span>
                                                    <span className="mt-1 text-black font-bold">{EnglishToPersian(project.remainingTime)}</span>
                                                </div>
                                                <div className="flex flex-col items-center my-1 sm:my-0">
                                                    <BsCash fontSize="1.9rem" color="#4eb801"/>
                                                    <span className="mt-1 text-neutral-700"> مبلغ مورد نياز</span>
                                                    <span className="mt-1 text-black font-bold">{EnglishToPersian(project.totalPrice)}<span className="mx-1">ریال</span></span>
                                                </div>
                                                <div className="flex flex-col items-center my-1 sm:my-0">
                                                    <GiCash fontSize="1.9rem" color="#4eb801"/>
                                                    <span className="mt-1 text-neutral-700"> مبلغ حمايت شده</span>
                                                    <span className="mt-1 text-black font-bold">{EnglishToPersian(SeparateNumber(project.peopleDonate.toString()))}<span className="mx-1">ریال</span></span>
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
                        ))}
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