// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLink,
    FiAlertCircle,
} from "react-icons/fi";

const BaseElement = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
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
                    <FiLink />
                </span>

                <span className="title">Base Element</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is the base element</h3>
                    <p className="p">
                        The base element defines a base URL or default target
                        for all relative URLs inside a document. It must be
                        placed inside the head section. It affects links,
                        images, scripts, stylesheets, and forms that use
                        relative paths.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Base href</h3>
                    <p className="p">
                        The href attribute sets the base URL for all relative
                        URLs in the page. After defining it, every relative link
                        will resolve from that base path.
                    </p>

                    <div className="codeBlock">
                        {`<head>
  <base href="https://example.com/docs/" />
</head>

<a href="page.html">Open Page</a>`}
                    </div>

                    <p className="p note">
                        In this example, clicking the link will open:
                        https://example.com/docs/page.html
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Base target</h3>
                    <p className="p">
                        The target attribute sets a default target for all
                        anchor tags. It behaves like adding target to every
                        link.
                    </p>

                    <div className="codeBlock">
                        {`<head>
  <base target="_blank" />
</head>

<a href="https://example.com">Visit</a>`}
                    </div>

                    <p className="p note">
                        Now all links will open in a new tab unless explicitly
                        overridden.
                    </p>
                </div>

                <div className="section warning">
                    <h3 className="h3">
                        <FiAlertCircle /> Important Rules
                    </h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Only one base element is allowed per document.
                        </li>
                        <li>
                            <span className="dot" />
                            It must be placed inside the head.
                        </li>
                        <li>
                            <span className="dot" />
                            It affects all relative URLs, including CSS and JS.
                        </li>
                        <li>
                            <span className="dot" />
                            Absolute URLs are not affected.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">When to use it</h3>
                    <p className="p">
                        It is commonly used in documentation sites, static site
                        deployments inside subfolders, or when hosting on GitHub
                        Pages where a base path is required.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BaseElement;
