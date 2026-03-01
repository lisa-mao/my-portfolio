import { HashRouter} from 'react-router-dom';
import Pig from './images/pig.gif'
import Flower from './images/flowericon.png'
import './index.css'
import Clock from "./Clock.jsx";

function App() {
    // const [activeModal, setActiveModal] = useState(null)
    // const closeModal = () => setActiveModal(null)


    return (
        <HashRouter>
            <main className="h-screen w-screen background flex justify-center items-center">


                <div className="bg-[#c5a9bf] h-180 w-280 rounded-2xl border-[#372d36] border-solid border-3">
                    <div className="bg-[#372d36] h-20 border-[#372d36] border-solid border-t-2 border-b-2 p-3 flex items-center ">

                        <div className="flex flex-row w-full items-center">
                            <img className="size-10" src={Flower} alt="flowerLogo"/>

                            <div className="flex justify-between flex-1 items-center ml-4">
                                <h1 className="jersey-10-regular gradient text-4xl">Welcome to my portfolio</h1>
                                <Clock/>
                            </div>
                        </div>
                    </div>
                </div>


                    {/*<div className="relative">*/}
                    {/*    <Intro onOpen={setActiveModal}/>*/}
                    {/*    {activeModal === 'aboutMe' && (*/}
                    {/*        <AboutMe onClose={(closeModal)}/>*/}
                    {/*    )}*/}

                    {/*    {activeModal === 'myProjects' && (*/}
                    {/*        <MyProjects onClose={(closeModal)}/>*/}
                    {/*    )}*/}

                    {/*    {activeModal === 'contact' && (*/}
                    {/*        <Contact onClose={(closeModal)}/>*/}
                    {/*    )}*/}


                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <img alt="pig" className="size-30" src={Pig}/>*/}
                    {/*</div>*/}


                {/*<Footer/>*/}
            </main>
        </HashRouter>
    )
}

export default App
