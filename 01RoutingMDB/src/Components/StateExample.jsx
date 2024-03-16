import React, { useState } from 'react';

let data = "kaipan"
const StateExample = () => {
    const [stateData,setSatetData] = useState("default value");
    const clickFunc = () => {
        console.log("Called");
        // let data = "kaipan"
        data = "Change"
        console.log(data);
        setSatetData("update")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">

                        <div className="card">
                            <div className="card-header">
                                State Example
                            </div>
                            <div className="card-body">
                                <p>state is mutable data in reactjs compo</p>
                                {/* <button onClick={clickFunc()}>Click</button> */}
                                <button onClick={clickFunc}>Click</button>
                        {data}
                        <p>State : {stateData}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StateExample;