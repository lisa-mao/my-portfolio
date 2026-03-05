import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function Chart () {
    const data = {
        labels: ['HTML','Tailwind CSS', 'JS', 'React', 'Express', ],
        datasets: [
            {
                label: 'My skills',
                data: [ 7, 7, 5, 5, 4],
                backgroundColor: 'rgb(197,169,191)',
                borderColor: 'rgb(55,45,54)',
                borderWidth: 1,
            },
        ],
    }

    return(
    <div>
     <Radar data={data} />
     </div>
    )
}
export default Chart