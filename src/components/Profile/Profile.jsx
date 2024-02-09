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

    // const homePageApiFn = () => {
    //     homePageFn()
    //         .then((res) => {
    //             if (res.success) {
    //                 setHomePageApi(res?.data[0])
    //                 let heading = document.createElement('span')
    //                 heading.innerHTML = (res?.data[0]?.heading) || refrenceHeading

    //                 document.querySelector('.heading')?.appendChild(heading)

    //             }
    //             else toast.error(res.message, toastErrorProp);
    //         })
    //         .catch(() => {
    //             toast.error("Can't load home page info.", toastErrorProp);
    //         });
    // }


    // useEffect(() => {
    //     homePageApiFn();
    // }, [])

    return (
        <>
            {
                // Object.keys(homePageApi).length==4 ?

                <div className="flex py-[20px]  flex-col sm:flex-row items-center justify-between">
                    <div className=" sm:w-[40%] ">
                        <p className="capitalize" >Hi, I'm Sandeep Kumar</p>
                        <h1 className="text-5xl font-bold heading "  >
                            I'm Full-Stack Expert Web-Developer.
                        </h1>
                        <p className="my-[5px]">
                            I'm passionated full-stack and MERN stack developer. I transform ideas into exception web experience.


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
                            src='https://res.cloudinary.com/diix8cjww/image/upload/v1703577112/aboutMeAvatar/sp78hdavik1hr5wtlbnr.jpg'
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


export function AboutMe() {
    const skillValue = ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'Node', 'Express', 'Mongodb', 'Mongoose', 'Git']

    return (
        <div className="flex  py-[20px] flex-col sm:flex-row  items-center justify-between">
            <div>
                <img
                    className={`rounded-full w-[200px] h-[200px]  sm:w-[300px] sm:h-[300px]  md:w-[400px] md:h-[400px] `}
                    src="https://res.cloudinary.com/diix8cjww/image/upload/v1703570402/aboutMeAvatar/twssoms7kbwhny7hekyo.jpg"
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
                    Hi, I'm Sandeep, A Dedicated MERN Stack Developer Passionate About Crafting Scalable, User-Friendly Applications. With Expertise In HTML, CSS, JS, MongoDB, Express.Js, React, And Node.Js, I Specialize In Building Robust, Efficient Web Solutions. I Thrive On Turning Challenges Into Innovative Solutions That Make A Positive Impact. Let's Create Something Extraordinary!
                </p>
                <div className="flex flex-wrap gap-[10px] select-none cursor-pointer ">

                    {

                        skillValue.map((val, idx) => (
                            < div className={`px-[20px] font-semibold rounded py-[10px] !bg-white !text-black`} key={idx}>
                                <p className="capitalize">{val}</p>
                            </div>
                        ))
                    }
                </div>
                <a href='https://docs.google.com/document/d/1FPxy_vgc66o70TDfBocVopxtva0Mq8F3lzf9RVa9CG4/edit?usp=sharing' target='_main'>
                    <button className={`${btn_style} flex my-[10px] items-center`}>
                        My Resume{" "}
                        <IoIosArrowRoundForward className="text-2xl font-bold " />{" "}
                    </button>
                </a>
            </div>
        </div >
    )
}
