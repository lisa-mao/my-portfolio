import { HashRouter} from 'react-router-dom';
import Intro from "./Intro.jsx";
import AboutMe from "./AboutMe.jsx";
import MyProjects from "./MyProjects.jsx";
import Contact from "./Contact.jsx";
import {useEffect, useState} from "react";
import Sun from './images/sun.png'
import Moon from './images/moon.png'

function App() {
    const [activeModal, setActiveModal] = useState(null)
    const [daytime, setDaytime] = useState(true)


    const closeModal = () => setActiveModal(null)

    useEffect(() => {
        if (daytime) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [daytime]);
    return (
        <HashRouter>
            <main className={`${daytime ? `backgroundDay` : `backgroundNight`} bg-cover bg-no-repeat h-screen w-screen`}>
                <button onClick={() => setDaytime(!daytime)}>
                    <img src={daytime ? Sun : Moon} alt={daytime ? "Sun" : "Moon"} className="size-40 object-top-right hover:cursor-pointer
                 scale-50"/>
                </button>

                <section className="  flex justify-center items-center ">


                    <div className="relative">
                        <Intro onOpen={setActiveModal}/>
                        {activeModal === 'aboutMe' && (
                            <AboutMe onClose={(closeModal)}/>
                        )}

                        {activeModal === 'myProjects' && (
                            <MyProjects onClose={(closeModal)}/>
                        )}

                        {activeModal === 'contact' && (
                            <Contact onClose={(closeModal)}/>
                        )}


                    </div>


                </section>
                {/*<Footer/>*/}
            </main>
        </HashRouter>
    )
}

export default App
