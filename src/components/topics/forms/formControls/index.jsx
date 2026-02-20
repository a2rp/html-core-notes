// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiEdit3 } from "react-icons/fi";

const FormControls = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiEdit3 />
                </span>

                <span className="title">Form Controls</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>label</h3>
                    <p>
                        The label element connects text to an input field.
                        Clicking the label focuses the input automatically. This
                        improves usability and accessibility.
                    </p>

                    <div className="example">
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" placeholder="Enter name" />
                    </div>
                </div>

                <div className="section">
                    <h3>fieldset and legend</h3>
                    <p>
                        Fieldset groups related form controls together. Legend
                        gives a title to that group. This is very useful for
                        accessibility.
                    </p>

                    <div className="example">
                        <fieldset>
                            <legend>Gender</legend>
                            <label>
                                <input type="radio" name="gender" /> Male
                            </label>
                            <label>
                                <input type="radio" name="gender" /> Female
                            </label>
                        </fieldset>
                    </div>
                </div>

                <div className="section">
                    <h3>textarea</h3>
                    <p>
                        Textarea is used for multi-line text input. Unlike input
                        type text, it supports multiple lines.
                    </p>

                    <div className="example">
                        <textarea placeholder="Write your message..." />
                    </div>
                </div>

                <div className="section">
                    <h3>select, option, optgroup</h3>
                    <p>
                        Select creates a dropdown. Option defines choices.
                        Optgroup groups related options together.
                    </p>

                    <div className="example">
                        <select>
                            <optgroup label="Frontend">
                                <option>HTML</option>
                                <option>CSS</option>
                            </optgroup>
                            <optgroup label="Backend">
                                <option>Node</option>
                                <option>PHP</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div className="section">
                    <h3>datalist</h3>
                    <p>
                        Datalist provides suggestion options for an input. It
                        allows users to either type freely or choose from
                        suggestions.
                    </p>

                    <div className="example">
                        <input list="browsers" placeholder="Choose browser" />
                        <datalist id="browsers">
                            <option value="Chrome" />
                            <option value="Firefox" />
                            <option value="Edge" />
                        </datalist>
                    </div>
                </div>

                <div className="section">
                    <h3>output</h3>
                    <p>
                        Output displays calculation results. Often used with
                        JavaScript to show dynamic values.
                    </p>

                    <div className="example">
                        <output>Result will appear here</output>
                    </div>
                </div>

                <div className="section">
                    <h3>progress</h3>
                    <p>
                        Progress shows task completion progress. Useful for file
                        uploads or loading states.
                    </p>

                    <div className="example">
                        <progress value="60" max="100" />
                    </div>
                </div>

                <div className="section">
                    <h3>meter</h3>
                    <p>
                        Meter represents a value within a known range. Example:
                        battery level, disk usage, score rating.
                    </p>

                    <div className="example">
                        <meter value="0.7">70%</meter>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FormControls;
