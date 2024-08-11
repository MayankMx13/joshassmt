import './list.scss'

function List({ item }) {
    return (
        <div className='list'>
            <div className="wrapper">
                <img src="/Rating.png" alt="" />
                <div className="review">{item.heading}</div>
                <div className='description'>{item.text}</div>
                <div className="user">
                    <div className="avatar">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="name">
                        <div className='username'>{item.name}</div>
                        <div className="designation">{item.Designation}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default List