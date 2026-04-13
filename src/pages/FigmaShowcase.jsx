
import { GiNewShoot } from "react-icons/gi";
import {LuEye} from "react-icons/lu";
import {FaPeopleGroup} from "react-icons/fa6";
import {Link} from "react-router-dom";

export default function FigmaShowcase() {
    return (
        <main>
            <div className="pl-4 m-3 pr-4 flex items-start gap-4 justify-between">
                <h1 className="jersey-10-regular">Mijn UI/UX ontwerpen</h1>
                <button>
                    <Link to="/tools"
                          className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]">Ga terug</Link>
                </button>
            </div>
            <section className=" grid grid-rows-5 items-center gap-1 h-full w-full text-black">
                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    1
                </div>

                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    2
                </div>

                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                   3
                </div>
            </section>
        </main>
    );
}

