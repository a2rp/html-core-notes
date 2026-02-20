// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLink,
    FiFileText,
    FiImage,
    FiZap,
} from "react-icons/fi";

const LinkElement = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
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
                    <FiLink />
                </span>

                <span className="title">Link Element</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Stylesheets */}
                <div className="section">
                    <h3 className="h3">
                        <FiFileText /> Stylesheets
                    </h3>

                    <p className="p">
                        The most common use of the link element is to connect a
                        CSS file to your HTML document. This allows the browser
                        to apply styles to the page.
                    </p>

                    <div className="codeBlock">
                        {`<link rel="stylesheet" href="styles.css">`}
                    </div>

                    <p className="p">
                        rel="stylesheet" tells the browser that this file
                        contains CSS styles. The href attribute defines the
                        location of the file.
                    </p>
                </div>

                {/* Icons */}
                <div className="section">
                    <h3 className="h3">
                        <FiImage /> Icons
                    </h3>

                    <p className="p">
                        The link element is also used to define a favicon. A
                        favicon is the small icon shown in the browser tab.
                    </p>

                    <div className="codeBlock">
                        {`<link rel="icon" href="/favicon.ico" type="image/x-icon">`}
                    </div>

                    <p className="p">
                        rel="icon" tells the browser this is a tab icon.
                    </p>
                </div>

                {/* Preload */}
                <div className="section">
                    <h3 className="h3">
                        <FiZap /> Preload
                    </h3>

                    <p className="p">
                        Preload tells the browser to download a resource early,
                        before it is actually needed. This improves performance
                        for important files like fonts or scripts.
                    </p>

                    <div className="codeBlock">
                        {`<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>`}
                    </div>

                    <p className="p">
                        The as attribute tells the browser what type of resource
                        it is loading.
                    </p>
                </div>

                {/* Prefetch */}
                <div className="section">
                    <h3 className="h3">Prefetch</h3>

                    <p className="p">
                        Prefetch loads resources that may be needed in the
                        future. It has lower priority than preload and is used
                        for next-page navigation.
                    </p>

                    <div className="codeBlock">
                        {`<link rel="prefetch" href="/next-page.html">`}
                    </div>
                </div>

                {/* Preconnect */}
                <div className="section">
                    <h3 className="h3">Preconnect</h3>

                    <p className="p">
                        Preconnect establishes early connections to important
                        third-party domains. This reduces latency when fetching
                        external resources.
                    </p>

                    <div className="codeBlock">
                        {`<link rel="preconnect" href="https://fonts.googleapis.com">`}
                    </div>

                    <p className="p">
                        This is useful when using external fonts, APIs, or CDN
                        resources.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default LinkElement;
