import './index.css'
import { useEffect, useState} from "react";

function Clock() {
        const [time, setTime] = useState()

        useEffect(() => {

            setInterval(() => {

                const dateObject = new Date()

                const day = dateObject.getDate()
                const month = dateObject.getMonth()


                const hour = dateObject.getHours().toString().padStart(2,'0')
                const minute = dateObject.getMinutes().toString().padStart(2,'0')


                const currentTime =day + '/' + (month + 1) + "-" +  hour + ' : ' + minute

                setTime(currentTime)
            }, 1000)

        }, [])

    return (
        <div>



        <span className="jersey-10-regular gradient text-4xl">
            {time}
        </span>

        </div>
    )
}

export default Clock
