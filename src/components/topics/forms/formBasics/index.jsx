// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiEdit3 } from "react-icons/fi";

const FormBasics = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiEdit3 />
                </span>

                <span className="title">Form Basics</span>

                <span className="meta">
                    form · action · method · GET vs POST · enctype
                </span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>1. form element</h3>
                    <p>
                        The <strong>form</strong> element is used to collect
                        user input and send it to a server. Everything related
                        to user input must be placed inside a form.
                    </p>

                    <div className="codeBlock">
                        {`<form>
    <!-- inputs go here -->
</form>`}
                    </div>
                </div>

                <div className="section">
                    <h3>2. action attribute</h3>
                    <p>
                        The <strong>action</strong> attribute defines where the
                        form data will be sent. It is usually a server endpoint
                        or URL.
                    </p>

                    <div className="codeBlock">
                        {`<form action="/submit-data">
    ...
</form>`}
                    </div>

                    <p className="note">
                        If action is not provided, the form submits to the same
                        page.
                    </p>
                </div>

                <div className="section">
                    <h3>3. method attribute</h3>
                    <p>
                        The <strong>method</strong> attribute defines how data
                        is sent. The two most common values are GET and POST.
                    </p>

                    <div className="codeBlock">
                        {`<form action="/submit" method="POST">
    ...
</form>`}
                    </div>
                </div>

                <div className="section">
                    <h3>4. GET vs POST</h3>

                    <div className="compare">
                        <div className="card">
                            <div className="cardTitle">GET</div>
                            <ul>
                                <li>Data is sent in URL</li>
                                <li>Visible in browser address bar</li>
                                <li>Used for fetching data</li>
                                <li>Length limit exists</li>
                            </ul>
                        </div>

                        <div className="card">
                            <div className="cardTitle">POST</div>
                            <ul>
                                <li>Data is sent in request body</li>
                                <li>Not visible in URL</li>
                                <li>Used for creating or updating data</li>
                                <li>No practical size limit</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3>5. enctype attribute</h3>
                    <p>
                        The <strong>enctype</strong> attribute defines how form
                        data should be encoded when sent to the server.
                    </p>

                    <div className="codeBlock">
                        {`<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" />
</form>`}
                    </div>

                    <ul className="bullets">
                        <li>application/x-www-form-urlencoded (default)</li>
                        <li>multipart/form-data (for file upload)</li>
                        <li>text/plain (rarely used)</li>
                    </ul>
                </div>

                <div className="section example">
                    <h3>Complete Example</h3>

                    <div className="codeBlock">
                        {`<form action="/register" method="POST">
    <label>
        Name:
        <input type="text" name="name" />
    </label>

    <label>
        Email:
        <input type="email" name="email" />
    </label>

    <button type="submit">Submit</button>
</form>`}
                    </div>

                    <p className="note">
                        When submitted, the browser collects input values and
                        sends them to the server using the defined method.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FormBasics;
