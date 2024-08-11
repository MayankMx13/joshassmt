import './card.scss'


function Card({ item }) {
    return (
        <div className='card'>
            <div className="imageContainer">
                <img src={item.image} alt="" />
            </div>
            <div className="text">
                <div className="head">{item.heading}</div>
                <div className="sub">{item.subHeading}</div>
            </div>
            <div className="skills">
                <ul>
                    <li>{item.skills.skill1}</li>
                    <li>{item.skills.skill2}</li>
                    <li>{item.skills.skill3}</li>
                    <li>{item.skills.skill4}</li>
                    <li>{item.skills.skill5}</li>
                    <li>{item.skills.skill6}</li>
                </ul>

            </div>
        </div>
    )
}

export default Card