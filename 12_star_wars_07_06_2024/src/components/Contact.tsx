import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [planet, setPlanet] = useState('');
    const [comment, setComment] = useState('');
    const [gender, setGender] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [planets, setPlanets] = useState([]);
    // const [planets, setPlanets] = useState([{}]);

    interface IPlanets {
        id: number,
        edited: string,
        climate: string,
        surface_water: string,
        name: string,
        diameter: string,
        rotation_period: string,
        created: string,
        terrain: string,
        gravity: string,
        orbital_period: string,
        population: string
    }

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch('https://sw-info-api.herokuapp.com/v1/planets');
                const data = await response.json();
                setPlanets(data);
            } catch (error) {
                console.error("Error fetching planets: ", error);
            }
        };
        fetchPlanets();
    }, []);

    /*
    useEffect(() => { // Mit der Bibliothek AXIOS:
        const fetchPlanets = async () => {
            try {
                const data = (await axios.get<IPlanets[]>('https://sw-info-api.herokuapp.com/v1/planets')).data;
                console.log(data);
                setPlanets(data);
            } catch (error) {
                console.error("Error fetching planets: ", error);
            }
        };
        fetchPlanets();
    }, []);
    */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            surname,
            planet,
            comment,
            gender,
            agreement
        };

        try {
            const response = await fetch('URL_SERVER_ENDPOINT', { // hier soll die korrekte url-server-adresse eingefügt werden
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully');
                // daten in form löschen:
                setName('');
                setSurname('');
                setPlanet('');
                setComment('');
                setGender('');
                setAgreement(false);
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Error submitting form');
        }
    };

    return (
        <div className='contact-bg'>
            <form onSubmit={handleSubmit}>
                <div className='contact-div'>
                    <label> Name: <input className='contact-input-name'
                        type="text" placeholder='Name...' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div className='contact-div'>
                    <label> Surname: <input className='contact-input-surname'
                        type="text" placeholder='Surname...' value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </label>
                </div>
                <div className='contact-div'>
                    <label> Planet:
                        <select className='contact-input-name' required>
                            <option value="">Select a planet</option>
                            {planets.map((planet: IPlanets) => (
                                <option key={planet.id} value={planet.name}>
                                    {planet.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className='contact-div'>
                    <label> Comment: 
                    <textarea className='contact-input-comment' placeholder='Comment...' value={comment} onChange={(e) => setComment(e.target.value)} />
                    </label>
                </div>
                <div className='contact-div'>
                    <label> Gender:
                        <input className='contact-input-name' type="radio" name="gender" value="male" /> Male
                        <input className='contact-input-name' type="radio" name="gender" value="female" /> Female
                    </label>
                </div>
                <div className='contact-div'>
                    <label> Agreement:
                        <input className='contact-input-name' type="checkbox" name="agreement" /> I agree to the terms and conditions
                    </label>
                </div>
                <div className='contact-div'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
