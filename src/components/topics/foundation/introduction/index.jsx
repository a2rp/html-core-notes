// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGlobe,
    FiServer,
    FiShuffle,
    FiActivity,
    FiCpu,
} from "react-icons/fi";

const Introduction = () => {
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
                    <FiGlobe />
                </span>

                <span className="title">Introduction</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is HTML</h3>
                    <p className="p">
                        HTML is the structure of a web page. It tells the
                        browser what the content is and what it means: headings,
                        paragraphs, lists, links, images, forms, and sections.
                        HTML does not handle the final look and feel. CSS
                        handles styling and JavaScript handles behavior.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">How the web works</h3>
                    <p className="p">
                        When you open a website, your browser sends a request to
                        a server. The server replies with files like HTML, CSS,
                        and JavaScript. The browser downloads them, parses them,
                        and renders the page.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiServer />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Client</div>
                                <div className="miniSub">Browser</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiShuffle />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Request</div>
                                <div className="miniSub">HTTP</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiServer />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Server</div>
                                <div className="miniSub">Response</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Client server model</h3>
                    <p className="p">
                        The browser is the client. It asks for resources. The
                        server stores and returns them. In real apps, servers
                        may also run logic, talk to databases, and generate
                        dynamic HTML.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">HTTP basics</h3>
                    <p className="p">
                        HTTP is the protocol used for web communication. Common
                        methods are GET (fetch data) and POST (send data).
                        Status codes like 200 mean success, 404 means not found,
                        and 500 means server error.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            GET is used to read
                        </li>
                        <li>
                            <span className="dot" />
                            POST is used to send
                        </li>
                        <li>
                            <span className="dot" />
                            Status codes tell what happened
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Browser parsing pipeline</h3>
                    <p className="p">
                        The browser reads HTML and builds the DOM (Document
                        Object Model). It reads CSS and builds the CSSOM. Then
                        it combines them to compute layout and paint pixels on
                        the screen.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Rendering flow overview</h3>
                    <p className="p">
                        The common flow is: parse HTML into DOM, parse CSS into
                        CSSOM, build render tree, layout, paint, then composite.
                        JavaScript can update the DOM and trigger re-layout or
                        repaint depending on what changed.
                    </p>

                    <div className="flow">
                        <div className="flowItem">
                            <span className="flowIcon">
                                <FiCpu />
                            </span>
                            DOM
                        </div>
                        <div className="arrow">→</div>
                        <div className="flowItem">
                            <span className="flowIcon">
                                <FiActivity />
                            </span>
                            Layout
                        </div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Paint</div>
                        <div className="arrow">→</div>
                        <div className="flowItem">Composite</div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Introduction;
