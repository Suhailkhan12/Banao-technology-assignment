import "./modal.scss";
import { cloneElement, useContext } from "react";
import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
// import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  function close(e) {
    e.preventDefault();
    setOpenName("");
  }
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  // const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      {/* <div className="styledmodal" ref={ref}> */}
      <div className="styledmodal">
        <button className="buttonmodel" onClick={close}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,

    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
