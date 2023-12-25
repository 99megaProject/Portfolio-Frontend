import React, { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Skill } from "../export.comp";
import { btn_style } from "../utils.variable";
import { homePageFn } from "../Home/home.import";
import { Loader } from "../Home/home.import";


export function HomePage() {


    const refrenceHeading = `<div >I am  <span style='color:rgb(167 139 250)' > Full-Stack </span> web-developer.</div>`
    const [homePageApi, setHomePageApi] = useState({})


    // home page
    const homePageApiFn = () => {
        homePageFn()
            .then((res) => {
                if (res.success) {
                    setHomePageApi(res?.data[0])
                    let heading = document.createElement('span')
                    heading.innerHTML = (res?.data[0]?.heading) || refrenceHeading

                    document.querySelector('.heading')?.appendChild(heading)

                }
                else toast.error(res.message, toastErrorProp);
            })
            .catch(() => {
                toast.error("Can't load home page info.", toastErrorProp);
            });
    }


    useEffect(() => {
        homePageApiFn();
    }, [])

    return (
        <>
            {
                // Object.keys(homePageApi).length==4 ?

                <div className="flex py-[20px]  flex-col sm:flex-row items-center justify-between">
                    <div className=" sm:w-[40%] ">
                        <p className="capitalize" >{homePageApi?.title}</p>
                        <h1 className="text-5xl font-bold heading "  >
                           
                        </h1>
                        <p className="my-[5px]">
                            {homePageApi?.description}
                        </p>
                        <a href="#myproject"><button className={`${btn_style} flex  items-center`} >
                            My Project{" "}
                            <IoIosArrowRoundForward className="text-2xl font-bold " />{" "}
                        </button>
                        </a>
                    </div>
                    <div>
                        <img
                            className={`rounded-full my-[10px] sm:my-[0px]  w-[200px] h-[200px]  sm:w-[300px] sm:h-[300px]  md:w-[400px] md:h-[400px]`}
                            src={homePageApi?.avatar}
                            alt=""
                        />
                        <div></div>
                    </div>
                </div>
                // :
                // (<div className="w-[100vw] h-[80vh] flex justify-center items-center ">
                //     < Loader />
                // </div>)
            }
        </>
    )
}


export function AboutMe({ props }) {
    ///  console.log(props);
    return (
        <div className="flex  py-[20px] flex-col sm:flex-row  items-center justify-between">
            <div>
                <img
                    className={`rounded-full w-[200px] h-[200px]  sm:w-[300px] sm:h-[300px]  md:w-[400px] md:h-[400px] `}
                    src={props?.avatar}
                    alt=""
                />
            </div>
            <div className=" sm:w-[40%] ">
                <p className="font-semibold">About Me</p>
                <h2 className="text-2xl font-bold ">
                    {" "}
                    <span className="text-violet-400 ">Sandeep</span> Kumar
                </h2>
                <p className="my-[5px] capitalize ">
                    {
                        props?.description
                    }
                </p>
                <div className="flex flex-wrap gap-[10px] select-none cursor-pointer ">

                    {
                        props?.skills && props.skills.map((skill) => (
                            < Skill props={skill} key={Math.random()} />
                        ))
                    }
                </div>
                <a href={props?.resume} target='_main'>
                    <button className={`${btn_style} flex my-[10px] items-center`}>
                        My Resume{" "}
                        <IoIosArrowRoundForward className="text-2xl font-bold " />{" "}
                    </button>
                </a>
            </div>
        </div>
    )
}
