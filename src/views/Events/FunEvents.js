import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { funEvents } from "../../utils/events";
import "../../styles/events.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCookies } from 'react-cookie';
import { toast, ToastContainer } from "react-toastify";

const TechEvents = () => {
  const [cookies, setCookie] = useCookies();
  const [showRegister,setShowRegister] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const onOpenEventModal = () => setOpenModal(true);
  const onCloseEventModal = () => setOpenModal(false);

  useEffect(() => {
    if(!!cookies['userToken']){
      setShowRegister(true);
    }else{
      setShowRegister(false);
    }
  },[])
  return (
    <>
      <div className="events-container">
        <ToastContainer />
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
            <div className="flex flex-col justify-center  text-container">
              <h1 className="font-bold text-2xl text-center">
                {modalData.name}
              </h1>
              <h2 className="font-bold text-xl text-stone-600 text-center">
                {modalData.smallDescription}
              </h2>
              <p className="flex-wrap">{modalData.description}</p>
              {modalData.id != 29 && modalData.id != 30 && (
                <div className="flex justify-between items-center w-full mt-4">
                  <span className="font-bold text-xl">{modalData.name}</span>
                  <span>
                    <button
                      className="bg-buttonColor px-4 py-2 text-lg text-white rounded-md"
                      onClick={()=>{
                        if(showRegister){
                          window.open(modalData.googleFormURL)
                        }else{
                          toast.error("Sign In to Register for the Event");
                        }
                        }}
                    >
                      Register
                    </button>
                  </span>
                </div>
              )}
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
