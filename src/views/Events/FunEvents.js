
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { funEvents } from "../../utils/events";
import "../../styles/events.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Sidebar from '../../components/Sidebar'

const TechEvents = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isSidebar, setIsSidebar] = useState(false);
  const onOpenEventModal = () => setOpenModal(true);
  const onCloseEventModal = () => setOpenModal(false);

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
      <div className="events-container">
        {funEvents.map((event) => {
          return (
            <div
              className="card-container"
              key={event.id}
              onClick={() => {
                onOpenEventModal(true);
                setModalData(event);
              }}
            >
              <img
                src={event.imageURL}
                alt=""
                style={{ width: "19rem", height: "24rem" }}
              />
            </div>
          );
        })}
      </div>
      {modalData ? (
        <Modal
          open={openModal}
          onClose={onCloseEventModal}
          center
          closeOnEsc
          closeOnOverlayClick
          classNames={{
            overlay: "eventOverlay",
            modal: "eventModal",
          }}
        >
          <div className="flex justify-center items-center container">
            <div className="image-container">
              <img
                src={modalData.imageURL}
                alt=""
                style={{ width: "19rem", height: "24rem" }}
              />
            </div>
            <div className="flex flex-col justify-center items-center text-container">
              <h1 className="font-bold text-2xl">{modalData.name}</h1>
              <h2 className="font-bold text-xl text-stone-600">
                {modalData.smallDescription}
              </h2>
              <p className="flex-wrap">{modalData.description}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default TechEvents;
