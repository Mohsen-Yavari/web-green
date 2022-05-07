import React from 'react';
import Common from "./common/common";
import {creative} from "../dummydata";

const Creative = () => {
    return (
        <>
            <div className="creative">
                <div className="container">
                    <div className="creative-itemContent">
                        <Common title="خلاقیت" />

                        {
                            creative.map((val) =>{
                                return (
                                    <>
                                    <div className="content flex">
                                        <div className="content-left">
                                        <i class="ri-double-quotes-l"></i>
                                        <i class="ri-double-quotes-l"></i>
                                        <i class="ri-double-quotes-l"></i>
                                        <h1>{val.heading}</h1>
                                        <h3>{val.title}</h3>
                                        <p>{val.desc}</p>
                                        <button className="btn btn-success">
                                        <i class="ri-arrow-right-circle-fill"></i> دانلود رزومه
                                        </button>
                                        </div>
                                        <div className="content-right">
                                            <img src={val.cover} alt="" />
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Creative;