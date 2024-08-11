import Card from '../../components/card/card'
import { useEffect, useState } from "react";

import './projects.scss'

function Projects() {

    const PORT = import.meta.env.VITE_PORT;


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${PORT}/projects`);
                if (!res.ok) throw new Error('network was not ok');

                const data = await res.json();
                console.log(data);
                setData(data);

            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchProducts();
    }, []);
    return (


        <div className='projects'>
            <div className="wrapper">
                <div className="description">
                    <h1>Projects</h1>
                    <h2>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</h2>
                </div>

                <div className="cardContainer">
                    {
                        data.map(product => (
                            <Card key={product.id} item={product} />
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default Projects