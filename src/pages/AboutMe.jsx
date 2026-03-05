import IdentificationCard from '../images/identificationcard.png'
import SpiderChart from "../components/Chart.jsx";


function AboutMe() {

    return (
        <section className=" flex  flex-row text-black">

            <div className="flex  flex-col">

                <div className="flex  flex-row ">
                    <div>
                        <img className="rounded-2xl m-3 border-black border-2 border-solid " src={IdentificationCard} alt="id card"/>
                    </div>

                </div>
                <div className="bg-white justify-center items-center pb-2 pt-2 h-35 w-101 border-[#372d36] rounded-xl border-solid border-2 ">
                    <h1 className="select-none jersey text-3xl">Biography</h1>
                    <p className="select-none noto-sans-jp-">Hii, I am a fullstack developer and I strongly believe that everything must be done with thought that goes deeper than the surface alone.  </p>
                </div>

            </div>
            <div className="bg-white h-110 w-110 ml-50 flex justify-center items-center  border-[#372d36] rounded-xl border-solid border-2">
                <SpiderChart/>
            </div>
        </section>
    );
}

export default AboutMe