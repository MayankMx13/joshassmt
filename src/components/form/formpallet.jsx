
import './formpallet.scss'

function Formpallet() {
    return (
        <div className='formpallet'>
            <div className="wrapper">

                <div className="left">

                    <h2>Leave Me Your Info</h2>
                    <form action="">
                        <label htmlFor="name">Your Full Name(Required)</label>
                        <input type="text" name="name" placeholder="" value="" />
                        <label htmlFor="email">Your EmailI(Required)</label>
                        <input type="text" name="email" placeholder="" value="" />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" placeholder="" value="" />
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id=""></textarea>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className="right">

                    <h4>Contact Information</h4>
                    <div className="cardContainer">
                        <div className="card">
                            <div className="imgContainer">
                                <img src="/location.png" alt="" />
                            </div>
                            <div className="detailContainer">
                                <div className="detail">
                                    <span className="det1">Country:</span>
                                    <span className="det2">Bangladesh</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">City:</span>
                                    <span className="det2">Dhaka</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">Streat:</span>
                                    <span className="det2">35 vhatara, Badda</span>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="imgContainer">
                                <img src="/mail.png" alt="" />
                            </div>
                            <div className="detailContainer">
                                <div className="detail">
                                    <span className="det1">Email:</span>
                                    <span className="det2">youremail@gmail.com</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">Skype:</span>
                                    <span className="det2">@yourusername</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">Telegram:</span>
                                    <span className="det2">@yourusername</span>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="imgContainer">
                                <img src="/Mobile.png" alt="" />
                            </div>
                            <div className="detailContainer">
                                <div className="detail">
                                    <span className="det1">Support services:</span>
                                    <span className="det2">15369</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">Office:</span>
                                    <span className="det2">+58 (021)356 587 235</span>
                                </div>
                                <div className="detail">
                                    <span className="det1">Personal:</span>
                                    <span className="det2">+58 (021)356 587 235</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Formpallet