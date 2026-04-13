import IdentificationCard from '../images/identificationcard.png'
import SpiderChart from "../components/Chart.jsx";


export default function AboutMe() {
    return (

        <main className="grid grid-cols-1 md:grid-cols-[auto_minmax(300px,350px)] gap-6 p-6 h-fit w-full max-w-6xl mx-auto items-start justify-center">

            <section className="flex flex-row gap-4 h-full items-start">
                <div className="bg-white flex justify-center items-center h-full w-fit border-[#372d36] rounded-xl border-solid border-2 overflow-hidden shrink-0 shadow-sm">
                    <SpiderChart />
                </div>

                <div className="bg-white flex flex-col border-[#372d36] rounded-xl border-solid border-2 flex-grow h-full max-h-full min-w-[150px]">
                    <h1 className="noto-sans-jp tracking-[0.15rem] bg-black p-2 text-white text-lg">Wat zit er in mijn tas</h1>
                    <div className="p-3 text-sm overflow-y-auto">
                        Voorwerpen
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 h-full w-full">
                <div className="w-full flex justify-start">
                    <img
                        className="rounded-2xl border-black border-2 border-solid w-full max-w-[320px] h-auto object-contain"
                        src={IdentificationCard}
                        alt="id card"
                    />
                </div>

                <div className="bg-white border-[#372d36] rounded-xl border-solid border-2 w-full max-w-[320px] flex-grow overflow-hidden">
                    <h1 className="p-2 select-none noto-sans-jp font-thin tracking-[0.15rem]  text-xl border-b bg-black text-white border-gray-200 mb-1">Biografie</h1>
                    <p className="p-1 select-none noto-sans-jp text-sm leading-relaxed">
                        Hoii!! Ik ben een Fullstack Developer met een scherp oog voor wat een applicatie écht succesvol maakt. Ik geloof dat de kracht van elk project schuilt in de details: die subtiele maar cruciale functies waar de gebruiker misschien niet direct over nadenkt, maar die de ervaring wel vlekkeloos maken!
                    </p>
                </div>
            </section>
        </main>
    );
}

