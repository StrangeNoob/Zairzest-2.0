import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { techEvents } from '../../utils/events'
import "../../styles/events.css"
const TechEvents = () => {
    return (
        <>
            <Navbar />
            <div className="nav-background"></div>
            <div className='events-container'>
                {techEvents.map((event) => {
                    return (<div className='card-container'>
                        <img src={event.imageURL} alt="" style={{ width: "19rem", height: "24rem" }} />
                    </div>)
                })}
            </div>
            <Footer />
        </>
    )
}

export default TechEvents