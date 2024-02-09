import "./home.style.css";
import {
    React, useEffect, useState, useSelector, Loader, IoIosArrowRoundBack, IoIosArrowRoundForward, Project, ServiceOn, Follow, MyCliet, Contact, Skill, SliderBtn, HomePage, AboutMe,
    // style 
    next_btn_style, prev_btn_style, outer_btn_style,
    //  function 
    projectFn, homePageFn, AboutMeFn, followMeFn, serviceFn, myClientFn
} from "./home.import";

export default function Home() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const mode_style = useSelector((state) => state.mode_style);
    const mode = useSelector((state) => state.mode);

    // array store data from api's

    const [projectApi, setProjectApi] = useState([])
    const [homePageApi, setHomePageApi] = useState({})
    const [aboutMeApi, setAboutMeApi] = useState({})
    const [followMeApi, setFollowMeApi] = useState([])
    const [serviceApi, setServiceApi] = useState([])
    const [myClientApi, setMyClientApi] = useState([])


    // api's data utils 
    const [projectApiIdx, setProjectApiIdx] = useState(0);
    const [myClientApiIdx, setMyClientApiIdx] = useState(0);

    const leftBtnHandle = (idx, setIdx) => {
        if (idx > 0) setIdx(idx - 1);
    };
    const rightBtnHandle = (idx, setIdx, idxArr) => {
        if (idx < idxArr?.length - 1) setIdx(idx + 1);
    };


    // home page

    // const homePageApiFn = () => {
    //     homePageFn()
    //         .then((res) => {
    //             if (res.success) {
    //                 setHomePageApi(res?.data[0])
    //                 //console.log(res?.data);
    //             }
    //             else toast.error(res.message, toastErrorProp);
    //         })
    //         .catch(() => {
    //             toast.error("Can't load home page info.", toastErrorProp);
    //         });
    // }

    // about me

    // const aboutMeApiFn = () => {
    //     AboutMeFn()
    //         .then((res) => {
    //             if (res.success) {
    //                 setAboutMeApi(res?.data)
    //             }
    //             else toast.error(res.message, toastErrorProp);
    //         })
    //         .catch(() => {
    //             toast.error("Can't load about me", toastErrorProp);
    //         });

    // }

    // projects
    const projectApiFn = () => {
        projectFn()
            .then((res) => {
                if (res.success) {
                    setProjectApi(res?.data)
                }
                else toast.error(res.message, toastErrorProp);
            })
            .catch(() => {
                toast.error("Can't load projects", toastErrorProp);
            });
    }

    // service

    // const serviceApiFn = () => {
    //     serviceFn()
    //         .then((res) => {
    //             if (res.success) {
    //                 setServiceApi(res?.data)
    //             }
    //             else toast.error(res.message, toastErrorProp);
    //         })
    //         .catch(() => {
    //             toast.error("Can't load follow me", toastErrorProp);
    //         });
    // }

    // follow me

    const followMeApiFn = () => {
        followMeFn()
            .then((res) => {
                if (res.success) {
                    setFollowMeApi(res?.data)
                }
                else toast.error(res.message, toastErrorProp);
            })
            .catch(() => {
                toast.error("Can't load follow me", toastErrorProp);
            });
    }


    // my client says
    // const myClientApiFn = () => {
    //     myClientFn()
    //         .then((res) => {
    //             if (res.success) {
    //                 setMyClientApi(res?.data)
    //             }
    //             else toast.error(res.message, toastErrorProp);
    //         })
    //         .catch(() => {
    //             toast.error("Can't get my clients", toastErrorProp);
    //         });
    // }

    let components = document.getElementsByClassName('components')



    useEffect(() => {
        projectApiFn();
        //     // homePageApiFn();
        //     aboutMeApiFn();
        followMeApiFn();
        //     serviceApiFn();
        //     myClientApiFn();

    }, []);


    // const animation_flage_fn = () => {

    //     const show_animation_flage = [false, false, false, false, false, false, false]

    //     window.onscroll = () => {
    //         for (let i = 0; i < components.length; i++) {
    //             let compScreen = components[i]
    //             let top = window.scrollY + 200;
    //             let offset = compScreen.offsetTop + 200;
    //             let height = compScreen.offsetHeight;


    //             if (top >= offset && top < offset + height && show_animation_flage[i] == false) {

    //                 // console.log(top, offset, height, compScreen.classList);
    //                 compScreen.classList.add('show_animation')
    //                 show_animation_flage[i] = true
    //             }

    //         }
    //     }
    // }

    // useEffect(() => {
    //     animation_flage_fn();
    // }, [])


    return (
        <>
            {/* {
                (projectApi.length && followMeApi.length && serviceApi.length && myClientApi.length && Object.keys(aboutMeApi).length) ? */}


            <main className={`${mode_style} relative  px-[4vw]`}>

                {/* home */}
                <div className="components ">
                    {/* < HomePage props={homePageApi} /> */}
                    < HomePage />
                </div>

                {/* about me  */}
                <div className="components ">

                    <AboutMe />
                </div>



                {/* my project  */}
                <div className="relative components_container">

                    <div >
                        {
                            projectApi && projectApi.length > 1 ?


                                <div id="myproject" className="w-[100%] flex flex-col relative items-center justify-center components  "  >
                                    <div>
                                        <h1 className="text-2xl sm:text-4xl font-bold pb-[10px] border-b-violet-300 border-b-[5px] border-rounded ">
                                            My Projects
                                        </h1>
                                    </div>
                                    <div
                                        className=" w-[100%] sm:w-[50%]  relative overflow-none "
                                        onTouchStart={(e) => {
                                            //console.log(e.changedTouches)
                                            setFrom(e.changedTouches);
                                        }}
                                        onTouchEnd={(e) => {
                                            // console.log(e.changedTouches)
                                            setTo(e.changedTouches);
                                        }}
                                    >
                                        <Project props={projectApi[projectApiIdx]} />
                                    </div>

                                    {/* prev & next btn  */}

                                    <div>
                                        <button className={`${outer_btn_style}`}>
                                            <IoIosArrowRoundBack
                                                className={`${prev_btn_style}`}
                                                onClick={() => leftBtnHandle(projectApiIdx, setProjectApiIdx)}
                                            />
                                        </button>
                                        <button className={`${outer_btn_style}`}>
                                            <IoIosArrowRoundForward
                                                className={`${next_btn_style}`}
                                                onClick={() => rightBtnHandle(projectApiIdx, setProjectApiIdx, projectApi)}
                                            />{" "}
                                        </button>
                                    </div>

                                </div>

                                :
                                (<div className="w-[100vw] h-[80vh] flex justify-center items-center ">
                                    < Loader />
                                </div>)
                        }

                    </div>

                    <div className="flex justify-around flex-col md:flex-row components  gap-[20%] ">
                        {/* I provide service on */}

                        {/* <div className="w-[100%]   flex flex-col items-center my-[20px] bg-violet-300  rounded-2xl   py-[20px]  ">
                                    <div>
                                        <h1 className="text-2xl sm:text-4xl font-bold pb-[10px] border-b-violet-300 border-b-[5px] border-rounded ">
                                            Service on{" "}
                                        </h1>
                                    </div>
                                    <div className="my-[20px]">
                                        <div className="flex flex-wrap justify-center   gap-[20px]  ">
                                            {
                                                serviceApi && serviceApi?.map((service) => (
                                                    <ServiceOn props={service} key={service?._id} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div> */}

                        {/* Follow me on  */}

                        <div className="w-[100%]  flex flex-col items-center components  my-[20px] bg-violet-300 rounded-2xl  py-[20px] ">
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-bold pb-[10px] border-b-violet-300 border-b-[5px] border-rounded ">
                                    Follow Me{" "}
                                </h1>
                            </div>
                            <div className="my-[20px] ">
                                <div className="flex flex-wrap justify-center  gap-[20px]  ">
                                    {followMeApi && followMeApi?.map((followMe) => (
                                        <Follow key={followMe._id} props={followMe} />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around flex-col md:flex-row  gap-[10%] ">
                        {/* My client says  */}

                        {/* <div className="w-[100%] flex  flex-col items-center my-[20px] bg-violet-300 components component06  rounded-2xl   py-[20px] px-[10px] ">
                                    <div>
                                        <h1 className="text-2xl sm:text-4xl font-bold pb-[10px] border-b-violet-300 border-b-[5px] border-rounded ">
                                            My Client Says{" "}
                                        </h1>
                                    </div>

                                    <div className="flex flex-col items-center ">
                                        {
                                            myClientApi &&
                                            <MyCliet props={myClientApi[myClientApiIdx]} />
                                        }
                                        <div>
                                            <button className={`${outer_btn_style} bg-white`}>
                                                <IoIosArrowRoundBack
                                                    className={` text-black  ${prev_btn_style}`}
                                                    onClick={() => leftBtnHandle(myClientApiIdx, setMyClientApiIdx)}
                                                />
                                            </button>
                                            <button className={`text-black ${outer_btn_style} bg-white`}>
                                                <IoIosArrowRoundForward
                                                    className={`${next_btn_style}`}
                                                    onClick={() => rightBtnHandle(myClientApiIdx, setMyClientApiIdx, myClientApi)}
                                                />{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div> */}

                        {/* contact me  */}

                        <div className="w-[100%] flex  flex-col bg-violet-300  rounded-2xl components    py-[20px] items-center my-[20px] ">
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-bold pb-[10px] border-b-violet-300 border-b-[5px] border-rounded ">
                                    Contact Me
                                </h1>
                            </div>

                            <div className="w-[100%] flex flex-col items-center my-[20px] ">
                                <Contact />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            {/* :
                    (<div className="w-[100vw] h-[80vh] flex justify-center items-center ">
                        < Loader />
                    </div>)
            } */}
        </>
    );
}




