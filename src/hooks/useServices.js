import { useEffect, useState } from "react";


const useServices = () => {
    // declear state
    const [services, setServices] = useState([]);
    const [doctores, setDoctores] = useState([]);
    // services data load
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mariyapoly/fakedata/main/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // doctores data load
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mariyapoly/fakedata/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctores(data))
    }, [])


    return { services, doctores }

};

export default useServices;