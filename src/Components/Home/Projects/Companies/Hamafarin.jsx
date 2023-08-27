import React from "react"
import {EnglishToPersian} from "../../../../helper/EnglishToPersian";
import {BsCash} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import {SeparateNumber} from "../../../../helper/SeparateNumber";
import ProgressBar from "react-bootstrap/ProgressBar";
import {PaginationControl} from "react-bootstrap-pagination-control";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';

const Hamafarin =  () =>{

    const [profileList, setProfileList] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1)
    const [projects, setProjects] = useState([]);

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const halalProject = async (page) => {
        const respond = await axios.get(`https://api.hamafarin.ir/public/v2/Plans?Page=${page}&PageSize=12`)
        console.log(respond.data)
         setProjects(respond.data.items)
        window.scrollTo(0, 0)
        setPage(page)
    }

    const getProjects = async () => {
        const respond = await axios.get(`https://api.hamafarin.ir/public/v2/Plans?Page=1&PageSize=12`)
        setProjects(respond.data.items)
        setLastPage(respond.data.totalPages);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10">
                {
                projects?.map((project) => (
                        <div className="mx-4 my-4">
                            <div className="bg-white shadow-2xl flex flex-col rounded-2xl">
                                <div className="w-full">
                                    <img className="rounded-tl-2xl rounded-tr-2xl object-cover w-full h-72"
                                         src={`https://hamafarin.ir/Content/upload/admin/BusinessPlans/Thumb/${project.imageNameInListPlans}`}
                                         alt="project"/>
                                </div>
                                <div className="p-4">
                                    <div className="font-bold text-[1.3rem]">
                                        <a href={`https://hamafarin.ir/BusinessPlans/SingleBusinessPlan/${project.businessPlanID}`}>{project.title}</a>
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-around mt-4">
                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                            <i className="far fa-calendar-alt text-[1.9rem] text-[#4eb801]"></i>
                                            <span className="mt-1 text-neutral-700"> باقی مانده</span>
                                            <span
                                                className="mt-1 text-black font-bold">{EnglishToPersian(project.percentageReturnInvestment)}</span>
                                        </div>
                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                            <BsCash fontSize="1.9rem" color="#4eb801"/>
                                            <span className="mt-1 text-neutral-700"> مبلغ مورد نياز</span>
                                            <span
                                                className="mt-1 text-black font-bold">{EnglishToPersian(project.amountRequiredRoRaiseCapital.toString())}<span
                                                className="mx-1">تومان</span></span>
                                        </div>
                                        <div className="flex flex-col items-center my-1 sm:my-0">
                                            <GiCash fontSize="1.9rem" color="#4eb801"/>
                                            <span className="mt-1 text-neutral-700"> مبلغ حمايت شده</span>
                                            <span
                                                className="mt-1 text-black font-bold">{EnglishToPersian(SeparateNumber(project.priceCompleted.toString()))}<span
                                                className="mx-1">تومان</span></span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="d-flex justify-content-end">
                                            <span>{EnglishToPersian(project.percentageReturnInvestment.toString())}%</span>
                                        </div>
                                        <ProgressBar style={{height: "0.7rem"}} now={project.percentageReturnInvestment}/>
                                    </div>
                                    <div className="mt-4 d-flex justify-content-center">
                                        <a href={`https://hamafarin.ir/BusinessPlans/SingleBusinessPlan/${project.businessPlanID}`}
                                           target="_blank" className={"main-btn"}
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
        </>
    )
}

export default Hamafarin