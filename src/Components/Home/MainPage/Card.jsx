import React from "react"
import profit from "../../../assets/img/profit.png"
import warranty from "../../../assets/img/warranty.png"
import ligal from "../../../assets/img/ligal.png"
function Card() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card-container flex justify-center items-center sm:justify-around flex-col sm:flex-row">
                    <div className="card w-full my-2 sm:my-0 sm:w-1/2 mx-2 text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={"https://cloud.tala24.co/kareston-images/ligal.png"} alt=""/></div>
                        <h2>بلا عوض</h2>
                    </div>
                    <div className="card w-full my-2 sm:my-0 sm:w-1/2 mx-2 text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={"https://cloud.tala24.co/kareston-images/warranty.png"} alt=""/></div>
                        <h2>قرض الحسنه</h2>
                    </div>

                    <div className="card w-full my-2 sm:my-0 sm:w-1/2 mx-2 text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={"https://cloud.tala24.co/kareston-images/profit.png"} alt=""/></div>
                        <h2>سود آور</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card