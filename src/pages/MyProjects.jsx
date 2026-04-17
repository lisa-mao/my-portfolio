import {Link} from "react-router-dom";
import homepage from '../images/loongcakes/homepage_400x191.png';
import {useState} from "react";
import ImageModal from "../components/ImageModalComponent.jsx";
import {ZoomIn} from 'lucide-react'
export default function MyProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section className="p-2">
            <div>
                <div>
                    <button className=" p-2 border-2 border-black border-solid bg-white rounded-sm">
                        <Link to="/figma-showcase"
                              className=" p-3 cursor-pointer noto-sans-jp select-none text-[#372d36] ">UI/UX
                            ontwerpen</Link>
                    </button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col">
                    <h1 className="noto-sans-jp-">Loong Cakes</h1>
                    <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                    <img alt="homepage" className="w-100 h-50 " src={homepage}/>
                    </button>
                </div>

                <div>
                    <p className="noto-sans-jp-">descriptie van mijn project inclusief alle stappen van concept tot product</p>
                </div>
            </div>

            <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
                imageSrc ={homepage}
            altText="homepagina "
            />

        </section>
    );
}
