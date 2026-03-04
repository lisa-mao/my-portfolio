import IdentificationCard from './images/identificationcard.png'

function AboutMe() {

    return (
        <section className=" flex flex-row text-black">

            <div className="flex bg-white h-110 w-101 flex-col">

                <div className="flex flex-row  gap-5">
                    <div>
                        <img className="rounded-2xl m-3 border-black border-2 border-solid " src={IdentificationCard} alt="id card"/>
                    </div>

                </div>
                <div className="">
                    <h1>Biography</h1>
                    <p>Hii, I am a fullstack developer and I strongly feel that everything must be done with thought that goes deeper than the surface.  </p>
                </div>

            </div>
            <div>
                c
            </div>
        </section>
    );
}

export default AboutMe