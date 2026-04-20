import {Link} from "react-router-dom";
import homepage from '../images/loongcakes/homepage_400x191.png';
import {useState} from "react";
import ImageModal from "../components/ImageModalComponent.jsx";
import {ZoomIn} from 'lucide-react'

export default function MyProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <section className="p-5 flex justify-center">
            <div className="md:hidden">
                <div>
                    <button className=" border-2 pr-2 border-black border-solid bg-white rounded-sm">
                        <Link to="/figma-showcase"
                              className=" p-3 cursor-pointer noto-sans-jp select-none text-[#372d36] ">UI/UX
                            ontwerpen</Link>
                    </button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4 ">
                <div className="bg-white flex md:flex-row pb-1 pt-1 md:gap-4 justify-center border-black border-2 border-solid">
                    <div className="flex flex-col">
                        <h1 className="font-stretch-50% jersey-10-projectLabels">Loong Cakes</h1>
                        <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                            <img alt="homepage" className="w-140 h-70 border-black border-2 border-solid "
                                 src={homepage}/>
                        </button>
                    </div>

                    <div className="md:w-1/3 flex flex-col">
                        <div
                            className="md:max-h-[450px] md:overflow-y-auto md-pr-6 md:scrollbar-thin h-auto overflow-visible">
                            <h2 className=" md:pt-10 noto-sans-jp-label2">Beschrijving</h2>
                            <p className="noto-sans-jp-">Voor dit schoolproject heb ik Loongcakes ontwikkeld,
                                een taartrecepten-applicatie gebouwd op het Laravel MVC-framework.
                                De focus lag op het implementeren van complexe user-roles en permissies.
                                Zo bevat de app een verificatie-flow voor content en een drempelsysteem
                                waarbij actieve deelname (5 comments) vereist is voor het verkrijgen van
                                upload-rechten. Het beheer van de publieke status van recepten verloopt
                                volledig via een op maat gemaakt admin-dashboard. </p>

                            <h2 className="noto-sans-jp-label2">Mijn rol</h2>
                            <p>
                                Als Full-stack Developer was ik verantwoordelijk voor de volledige transformatie
                                van concept naar een werkend platform. Dit project markeerde mijn eerste ervaring
                                met Laravel, waarbij ik mezelf heb uitgedaagd om de MVC-structuur en
                                database-relaties direct in de praktijk toe te passen. Van de front-end
                                interacties tot de back-end logica: ik heb elk onderdeel zelfstandig opgezet en
                                gestructureerd.
                            </p>
                            <h2 className="noto-sans-jp-label2">Proces</h2>
                            <p>
                                Mijn proces begon bij de architectuur van de data. In plaats van uitgebreide user
                                stories te schrijven, heb ik direct de vertaalslag gemaakt van het concept naar
                                een ERD (Entity Relationship Diagram). Hierdoor kreeg ik snel inzicht in hoe de
                                recepten, gebruikers en reacties met elkaar verbonden moesten worden binnen de
                                Laravel database-migraties.
                            </p>

                            <h2 className="noto-sans-jp-label2"> Wat heb ik geleerd?</h2>
                            <p>Tijdens dit project heb ik diepgaande kennis opgedaan van de MVC-architectuur
                                (Model-View-Controller). Ik heb geleerd om een duidelijke scheiding aan te
                                brengen tussen de logica (Controllers), de data-architectuur (Models) en de
                                presentatie (Blade views). Daarnaast heb ik expertise opgebouwd in het ontwerpen
                                van database-relaties, waardoor data op een schaalbare en logische manier aan
                                elkaar gekoppeld is.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button className=" border-2 pr-2 border-black border-solid bg-white rounded-sm">
                            <Link to="/figma-showcase"
                                  className=" p-3 cursor-pointer noto-sans-jp select-none text-[#372d36] ">UI/UX
                                ontwerpen</Link>
                        </button>
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={homepage}
                altText="homepagina "
            />

        </section>
    );
}
