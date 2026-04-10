import {Link} from "react-router-dom";

export default function MyProjects() {
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
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h1>Project Name</h1>
                    <img className="border-2 border-solid border-black max-w-fit max-h-fit"
                         alt="foto's van het project"/>
                </div>

                <div>
                    <p>descriptie van mijn project inclusief alle stappen van concept tot product</p>
                </div>
            </div>

        </section>
    );
}
