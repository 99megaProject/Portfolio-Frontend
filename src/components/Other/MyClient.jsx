import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";



export default function MyCliet({ props }) {


    // console.log(props);
    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    const [readFlage, setReadFlage] = useState(false)
    
    return (
        <div className={`w-[100%] justify-center  flex gap-[30px] my-[20px]  `}>

            <div className={`flex px-[20px] py-[10px]  w-[100%] rounded  !text-black items-center ${!mode ? 'bg-zinc-200' : 'bg-white'}  `}>
                <div className="w-[70%]  ">
                    <h2 className="font-bold text-[20px] capitalize ">{props?.username}</h2>
                    <p className="text-[13px] capitalize"> {
                        !readFlage ? (window?.screen?.availWidth > 768 ?
                            props?.description?.slice(0, 80) : props?.description?.slice(0, 45)) : props?.description
                    }</p>

                    <button className="text-[13px] flex gap-[3px] " onClick={() => setReadFlage(!readFlage)} >Read More <IoIosArrowRoundForward className="text-2xl font-bold " />{" "} </button>

                </div>
                <div className="w-[50%] sm:w-[30%]">
                    <img className="w-[100px] h-[100px] rounded-full content-cover" src={props?.avatar} alt="" />
                </div>
            </div>


        </div>

    )
}