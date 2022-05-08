import React, { Dispatch, SetStateAction } from "react";

import { InitialQueryType } from "../App";

interface ModalProps {
  data: InitialQueryType;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ data, modalOpen, setModalOpen }) => {
  const {
    title,
    description,
    original_title,
    original_title_romanised,
    release_date,
  } = data;

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={
          modalOpen
            ? "modal opacity-100 hover:pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
            : "opacity-0"
        }
      >
        <div
          className="modal-overlay absolute w-full h-full bg-gray-500 opacity-50"
          onClick={() => setModalOpen(false)}
        ></div>

        <div className="modal-container bg-gradient-to-r bg-white dark:bg-gray-800 max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-end items-center pb-3">
              <div
                className="modal-close cursor-pointer z-50 p-2"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-center font-bold text-2xl mt-1 text-gray-600 dark:text-gray-100">
              {title}
            </h2>
            <p className=" text-gray-500 font-normal text-center my-6 mx-6 dark:text-gray-200">
              {original_title} ({original_title_romanised})
            </p>
            <div className="px-4 flex flex-row py-4 min-w-min bg-red-100 dark:bg-gray-700 rounded mx-auto">
              <p className="my-2 text-red-500 dark:text-gray-200 font-medium">
                {description}
              </p>
            </div>
            <p className=" text-gray-500 font-normal text-center my-6 mx-6 dark:text-gray-200">
              Release date: {release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
