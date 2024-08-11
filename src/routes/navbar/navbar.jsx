import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="left">
                <img src="/logo.png" alt="" />
            </div>
            <div className="right">
                <ul className="links">
                    <li className="home">Home</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Projects</li>
                    <li>Reccomendation</li>
                    <li>Contacts</li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar