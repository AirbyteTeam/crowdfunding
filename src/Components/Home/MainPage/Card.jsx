import React from "react"
import profit from "../../../assets/img/profit.png"
import warranty from "../../../assets/img/warranty.png"
import ligal from "../../../assets/img/ligal.png"
function Card() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card-container d-flex justify-content-around">
                    <div className="card text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={ligal} alt=""/></div>
                        <h2>بلا عوض</h2>
                    </div>

                    <div className="card text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={warranty} alt=""/></div>
                        <h2>قرض الحسنه</h2>
                    </div>

                    <div className="card text-center gradient-bg">
                        <div className="d-flex justify-content-center"><img src={profit} alt=""/></div>
                        <h2>سود آور</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card