import './hero.scss'

function Hero() {
    return (
        <div className='hero'>
            <div className="left">
                <h1>I’m Rayan Adlrdard <br />
                    <span>Front-end</span> Developer </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>

                <button>
                    Hire Me <img src="/arrow.png" alt="" />
                </button>
            </div>
            <div className="right">
                <img src="hero.png" alt="" />

            </div>
        </div>
    )
}

export default Hero