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
                        Hello
                    </div>)
                })}
            </div>
            <Footer />
        </>
    )
}

export default Events