import './footer.scss'

function Footer() {

    return (
        <div className='footer'>
            <div className="banner">
                <img src="/frame4.png" alt="" />
                <img src="/frame3.png" alt="" />
                <img src="/frame2.png" alt="" />
                <img src="/frame1.png" alt="" />
            </div>
            <div className='main'>
                <img className="yo" src="/logo.png" alt="" />

            </div>
            <div className='bottom'>
                <div className='logos'>

                    <div>
                        <img className="re" src="/Rectangle 97.png" alt="" />
                        <div className='certi'>4.5/5 rating on Lorem </div>
                    </div>

                    <div>
                        <img className="re" src="/Rectangle 99.png" alt="" />
                        <div className='certi'>9/10 rating on Ipsum</div>
                    </div>

                    <div>
                        <img className="re" src="/Rectangle 100.png" alt="" />
                        <div className='certi'>4.5/5 Rating on dorel</div>
                    </div>

                </div>

                <div className='right'>
                    <div className='links'>
                        <h2>Quick Links</h2>
                        <span>Home</span>
                        <span>Skills</span>
                        <span>Education</span>
                        <span>Projects</span>
                        <span>Recommendations</span>
                    </div>
                    <div className='port'>
                        <h2>Portfolio</h2>
                        <span>frontend Development</span>
                        <span>Backend Development</span>
                        <span>Website design</span>
                        <span>Machine Learning</span>
                        <span>Problem Solving & DSA</span>


                    </div>

                    <div className='social'>
                        <h2>Connect</h2>
                        <img src="/LinkedIn.png" alt="" />
                        <img src="/Instagram.png" alt="" />
                        <img src="/Facebook.png" alt="" />
                    </div>
                </div>

            </div>
            <div className='copy'>&copy; 2024 Copyright, All right reserved</div>

        </div>
    )
}

export default Footer