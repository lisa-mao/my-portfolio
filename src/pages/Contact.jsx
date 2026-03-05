import closeButton from '../images/closebutton.png'
function Contact({onClose}) {
    return (
        <section className="fixed inset-y-70 inset-x-350 flex  justify-end z-30a text-black bg-[#FFFFFF] border-[#A2C579] border-solid border-6 max-w-120 max-h-150 w-60 h-40 ">
            <div
                className="p-2 ">

                <div className="flex flex-row justify-between  ">
                    <h1 id="contact" >
                        Contact
                    </h1>
                    <button onClick={onClose} className="hover:cursor-pointer ">
                        <img alt="close button" src={closeButton}/>
                    </button>
                </div>
                <div>
                    <p>Email: email.lisamao@gmail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact