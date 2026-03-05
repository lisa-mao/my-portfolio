import {HashRouter} from 'react-router-dom';
import Pig from './images/pig.gif'
import Flower from './images/flowericon.png'
import './index.css'
import Clock from "./components/Clock.jsx";
import FileIcon from './images/file-icon.png'
import AboutMe from "./pages/AboutMe.jsx";

function App() {

    return (
        <HashRouter>
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
                                    <h1 className="jersey-10-regular gradient select-none text-4xl">Welcome to my portfolio</h1>
                                    <Clock/>
                                </div>
                            </div>
                        </div>



                        <div className="flex gap-2 flex-row items-start z-0 m-2">

                        <div className="tab">
                            <div className="bg-amber-100 h-10 w-32 rounded-tr-md folder border-[#372d36] border-solid border-2 ">
                                <h1 className="pl-2 jerseyTab select-none text-[#372d36]">About me</h1>
                            </div>
                        </div>

                            <div className="tab">
                            <div className="bg-amber-100 h-10 w-32 rounded-tr-md folder border-[#372d36] border-solid border-2 ">
                                <h1 className="pl-2 jerseyTab select-none text-[#372d36]">My projects</h1>
                            </div>
                        </div>

                            <div className="tab">
                            <div className="bg-amber-100 h-10 w-32 rounded-tr-md  folder  border-[#372d36] border-solid border-2 ">
                                <h1 className="pl-2 jerseyTab select-none text-[#372d36]">Interests</h1>
                            </div>
                        </div>
                    </div>

                        <div className="relative z-10 -mt-7   ml-2 mr-2 ">

                            <div className="bg-amber-100 flex  border-[#372d36] border-solid border-2  rounded-b-md rounded-tr-md h-125 w-274   p-6 ">
                                <div className="text-center">
                                    <AboutMe/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </HashRouter>
    )
}

export default App
