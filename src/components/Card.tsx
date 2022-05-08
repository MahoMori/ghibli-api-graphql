import React, { useState } from "react";

import { InitialQueryType } from "../App";

import Modal from "./Modal";

const Card = (data: InitialQueryType) => {
  const { image, title } = data;

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative">
          <img
            src={image}
            alt={title}
            className="inset-0 h-full w-full object-cover object-center rounded-lg opacity-100 hover:opacity-75 cursor-pointer"
            onClick={handleModalOpen}
          />
        </div>
      </div>

      {modalOpen && (
        <Modal
          data={data}
          modalOpen={modalOpen}
          handleModalOpen={handleModalOpen}
        />
      )}
    </>
  );
};

export default Card;
