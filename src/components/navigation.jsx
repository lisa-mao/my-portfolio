import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Navigation() {

    return (
        <>

                <div className="flex gap-2 flex-row items-start m-2">

                    <div className="tab">
                        <div
                            className="bg-amber-100 relative z-10 rounded-tr-md folder border-[#372d36] border-solid border-2 border-b-0 ">
                            <button id="About me">
                                <Link to="/"
                                      className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]">Over
                                    mij</Link>
                            </button>
                        </div>
                    </div>

                    <div className="tab">
                        <div
                            className="bg-amber-100 h-10 w-33 rounded-tr-md folder border-[#372d36] border-solid border-2 ">
                            <button>
                                <Link to="/my-projects"
                                      className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]">Mijn
                                    projecten</Link>
                            </button>
                        </div>
                    </div>

                    <div className="tab">
                        <div
                            className="bg-amber-100 h-10 w-33 rounded-tr-md  folder  border-[#372d36] border-solid border-2 ">
                            <button>
                                <Link to="/skills"
                                      className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]">Skills</Link>
                            </button>
                        </div>
                    </div>

                    <div className="tab">
                        <div
                            className="bg-amber-100 h-10 w-33 rounded-tr-md  folder  border-[#372d36] border-solid border-2 ">
                            <button>
                                <Link to="/contact"
                                      className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]">Contact</Link>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Navigation