import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { events } from '../../utils/events'
import "../../styles/events.css"
const Events = () => {
    return (
        <>
            <Navbar />
            <div className="nav-background"></div>
            <div className='events-container'>
                {events.map((event) => {
                    return (<div className='card-container'>
                        <img src={event.imageURL} alt="" style={{ width: "19rem", height: "24rem" }} />
                    </div>)
                })}
            </div>
            <Footer />
        </>
    )
}

export default Events