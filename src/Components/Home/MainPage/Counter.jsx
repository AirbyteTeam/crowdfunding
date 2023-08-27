import React, {useEffect, useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import api from "../../../api/api";

function Counter() {
    const [activeUsersCount, setActiveUsersCount] = useState(0)
    const [usersCount, setUsersCount] = useState(0);
    const [completeProjectsCount, setCompleteProjectsCount] = useState(0)

    // const getData = async () => {
    //     const dataResponse = await api.get("project/report/footer")
    //     setUsersCount(dataResponse.data.users)
    //     setActiveUsersCount(dataResponse.data.activeUsers)
    //     setCompleteProjectsCount(dataResponse.data.completeProjects)
    // }

    useEffect(() => {

    }, []);

    return (
        <>
            <section className="counter-section-one mt-negative">
                <div className="container gradient-bg">
                    <div className="row counter-boxes justify-content-xl-around justify-content-center">
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-10 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding text-black"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap text-black">
                                        <CountUp end={20} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="count" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="suffix text-black">+</span>
                                    </div>
                                    <h6 className="title text-black">پروژه های تکمیل شده</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-10 icon-left ">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding text-black"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap text-black">
                                        <CountUp end={1} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="count" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="suffix text-black">+</span>
                                    </div>
                                    <h6 className="title text-black">حامیان</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-10 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding text-black"></i>
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap text-black">
                                        <CountUp end={100} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className="count" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <span className="suffix text-black">+</span>
                                    </div>
                                    <h6 className="title text-black">کمک کننده فعال</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter