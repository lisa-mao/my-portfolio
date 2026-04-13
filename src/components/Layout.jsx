import FileIcon from "../images/file-icon.png";
import Flower from "../images/flowericon.png";
import Clock from "./Clock.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import {Link, Outlet} from "react-router-dom";

import Navigation from "./navigation.jsx";

export default function Layout() {
    return (
        <>
            <main className="h-screen w-screen background flex justify-center items-center">

                <div className=" flexjustify-center items-center flex-col">
                    <div className="bg-[#c5a9bf] h-180 w-280 rounded-2xl border-[#372d36] border-solid border-3">


                        <div className="flex justify-between flex-row m-2">
                            <div className="flex flex-row items-center gap-2">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <img className=" select-none pb-1" src={FileIcon} alt="fileicon"/>
                                </div>
                                <p className="jersey select-none text-sm tracking-wide">portfolio.exe</p>
                            </div>
                            <button className="cursor-pointer">
                                <p className="select-none jersey text-sm tracking-wide">X</p>
                            </button>
                        </div>
                        <div
                            className="bg-[#372d36] h-20 border-[#372d36] border-solid border-t border-b p-3 flex items-center ">

                            <div className="flex flex-row w-full items-center">
                                <img className="size-10 select-none" src={Flower} alt="flowerLogo"/>

                                <div className="flex justify-between flex-1 items-center ml-4">
                                    <h1 className="jersey-10-regular gradient select-none text-4xl">Welkom bij mijn
                                        portfolio</h1>
                                    <Clock/>
                                </div>
                            </div>
                        </div>

                        <Navigation/>

                        <div className="bg-amber-100 flex h-fit w-fit -mt-3 rounded-b-md rounded-tr-md ml-2 mr-2">
                            <div className="relative z-0 border-[#372d36] border-solid border-2 rounded-b-md rounded-tr-md h-125 w-274 overflow-hidden">
                                <Outlet />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

