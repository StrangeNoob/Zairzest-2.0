import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { funEvents } from '../../utils/events'
import "../../styles/events.css"
import Sidebar from '../../components/Sidebar'
const TechEvents = () => {
    const [isSidebar, setIsSidebar] = useState(false);
    return isSidebar ? (
        <Sidebar
          handleSidebar={() => {
            setIsSidebar(false);
          }}
          aboutUs={false}
        />
      ) : (
        <>
          <Navbar aboutUs={false} handleSidebar={() => setIsSidebar(true)} />
            <div className="nav-background"></div>
            <div className='events-container'>
                {funEvents.map((event) => {
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