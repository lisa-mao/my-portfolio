import {HashRouter} from 'react-router-dom';
import Pig from './images/pig.gif'
import Flower from './images/flowericon.png'
import './index.css'
import Clock from "./Clock.jsx";
import FileIcon from './images/file-icon.png'

function App() {

    return (
        <HashRouter>
            <main className="h-screen w-screen background flex justify-center items-center">

                <div className=" flexjustify-center items-center flex-col">
                    <div className="bg-[#c5a9bf] h-180 w-280 rounded-2xl border-[#372d36] border-solid border-3">


                        <div className="flex justify-between flex-row m-2">
                            <div className="flex flex-row items-center gap-2">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <img className="pb-1" src={FileIcon} alt="fileicon"/>
                                </div>
                                <p className="jersey text-sm tracking-wide">portfolio.exe</p>
                            </div>
                            <button className="cursor-pointer">
                                <p className="jersey text-sm tracking-wide">X</p>
                            </button>
                        </div>
                        <div
                            className="bg-[#372d36] h-20 border-[#372d36] border-solid border-t-2 border-b-2 p-3 flex items-center ">

                            <div className="flex flex-row w-full items-center">
                                <img className="size-10" src={Flower} alt="flowerLogo"/>

                                <div className="flex justify-between flex-1 items-center ml-4">
                                    <h1 className="jersey-10-regular gradient text-4xl">Welcome to my portfolio</h1>
                                    <Clock/>
                                </div>
                            </div>
                        </div>



                        <div className="flex gap-2 flex-row items-start z-0 m-2">

                            <div className="bg-amber-100 h-10 w-32 rounded-2xl shadow-sm border border-amber-200">
                                <h1 className="pl-2">About me</h1>
                            </div>
                            <div className="bg-amber-100 h-10 w-32 rounded-2xl shadow-sm border border-amber-200">
                                <h1>My projects</h1>
                            </div>
                            <div className="bg-amber-100 h-10 w-32 rounded-2xl shadow-sm border border-amber-200">
                                <h1>Interests</h1>
                            </div>
                        </div>


                        <div className="relative z-10 -mt-5 ml-2 mr-2">

                            <div className="bg-amber-100  rounded-b-md rounded-tr-md h-125   p-6 flex items-start justify-center">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-amber-900 jersey">WINDOW</h2>
                                    <p className="text-amber-800/60 text-sm mt-2">

                                    </p>
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
