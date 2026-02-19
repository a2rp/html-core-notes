// index.jsx
import React, { useRef, useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiMessageSquare } from "react-icons/fi";

const DialogTopic = () => {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef(null);

    const toggleSection = () => {
        setOpen((v) => !v);
    };

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            {/* Header */}
            <button
                type="button"
                className="topicHeader"
                onClick={toggleSection}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiMessageSquare />
                </span>

                <span className="title">Dialog</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            {/* Body */}
            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is the dialog element</h3>
                    <p className="p">
                        The dialog element is a built-in HTML element used to
                        create modal or non-modal dialog boxes. It allows you to
                        display popups without using external libraries. It is
                        part of modern HTML and provides native browser
                        behavior.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Modal behavior</h3>
                    <p className="p">
                        When a dialog is opened using showModal(), it becomes
                        modal. This means the rest of the page becomes inactive
                        until the dialog is closed. The browser also adds a
                        backdrop automatically.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            show() opens non modal dialog
                        </li>
                        <li>
                            <span className="dot" />
                            showModal() opens modal dialog
                        </li>
                        <li>
                            <span className="dot" />
                            close() closes the dialog
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Example</h3>

                    <div className="exampleBox">
                        <button
                            type="button"
                            className="openBtn"
                            onClick={openModal}
                        >
                            Open Dialog
                        </button>

                        <dialog ref={dialogRef} className="dialogBox">
                            <h4 className="dialogTitle">Native HTML Dialog</h4>

                            <p className="dialogText">
                                This is a native modal created using the dialog
                                element. No external library is used.
                            </p>

                            <button
                                type="button"
                                className="closeBtn"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </dialog>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Important Notes</h3>
                    <p className="p">
                        The dialog element is supported in modern browsers. For
                        older browsers, a polyfill may be required. You can
                        style the backdrop using the ::backdrop pseudo element
                        in CSS.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DialogTopic;
