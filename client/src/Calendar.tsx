import { useEffect, useState } from 'react';
import './App.css'


function Calendar() {
    let [times, setTimes] = useState([<th>loading</th>,<th>loading</th>]);

    async function loadData() {
        const request = await fetch('/info');
        const data = await request.json();

        const listOfData = data[2].schedule.map((slot) => {
            return (
            <tr className={slot.state}>
                <th>{slot.time}</th>
                <th>{slot.state}</th>
            </tr>
            )
        });

        setTimes(listOfData);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <table>
            <tr>
                <th>Time</th>
                <th>Availability</th>
            </tr>
            {times}
        </table>
    )
}

export default Calendar;