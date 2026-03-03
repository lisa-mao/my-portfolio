import ProfileImage from './images/profileImage.png'

function AboutMe() {

    return (
        <section className=" flex  text-black">
            <div className="flex flex-col">

                <div className="flex flex-row gap-5">
                    <div>
                        <img className="size-60" src={ProfileImage} alt="Waving girl"/>
                    </div>
                    <div className="flex items-start flex-col">
                        <h1 className="jerseyStats">Name: Lisa</h1>
                        <h1 className="jerseyStats">Age: 18</h1>
                        <h1 className="jerseyStats">Gender: Female</h1>
                        <h1 className="jerseyStats">Birthday: 18/06</h1>
                    </div>

                    <div>
                        {}
                    </div>
                </div>
                <div>Biography</div>

            </div>
        </section>
    );
}

export default AboutMe