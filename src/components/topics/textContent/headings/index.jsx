// src/components/textContent/headings/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiType,
    FiHash,
    FiEye,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const Headings = () => {
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
                    <FiType />
                </span>

                <span className="title">Headings</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiHash />
                        </span>
                        h1 to h6
                    </h3>

                    <p className="p">
                        HTML headings are used to label sections of content. You
                        have six levels: h1 (most important) to h6 (least
                        important). Headings should describe what the section is
                        about, not just make text bigger. Styling is CSS,
                        meaning is HTML.
                    </p>

                    <div className="callout good">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="calloutTitle">Practical rule</div>
                        </div>
                        <div className="calloutText">
                            Use one clear h1 for the main page title, then use
                            h2 for major sections, h3 for sub-sections, and so
                            on. Do not skip levels just for looks.
                        </div>
                    </div>

                    <div className="chips">
                        <span className="chip">h1: page title</span>
                        <span className="chip">h2: section</span>
                        <span className="chip">h3: sub-section</span>
                        <span className="chip">h4 to h6: deeper nesting</span>
                    </div>

                    <div className="example">
                        <div className="exampleTitle">Example structure</div>
                        <pre className="code">
                            {`h1: HTML Core Notes
  h2: Text Content
    h3: Headings
    h3: Paragraphs
  h2: Forms
    h3: Inputs
    h3: Validation`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiLayers />
                        </span>
                        Document outline theory
                    </h3>

                    <p className="p">
                        People often say "headings create the page outline." The
                        idea is: headings communicate a hierarchy of sections.
                        This helps readers scan the page, and helps assistive
                        technologies understand structure.
                    </p>

                    <p className="p">
                        In practice, different browsers and tools have handled
                        outlining differently over time. The safe approach is to
                        treat headings as a clear, human-friendly hierarchy: h1
                        for the page, then h2, then h3, and so on. If the
                        hierarchy feels logical to a human, it usually works
                        well for accessibility too.
                    </p>

                    <div className="callout warn">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiAlertTriangle />
                            </span>
                            <div className="calloutTitle">Common mistake</div>
                        </div>
                        <div className="calloutText">
                            Using headings only for styling. For styling, use a
                            class and CSS. For structure, use the correct
                            heading level.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiEye />
                        </span>
                        Accessibility considerations
                    </h3>

                    <p className="p">
                        Many screen reader users navigate by headings. They can
                        jump from one heading to the next like a table of
                        contents. Clean heading structure improves navigation,
                        understanding, and speed.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Keep heading text meaningful, not vague like
                            "Section"
                        </li>
                        <li>
                            <span className="dot" />
                            Do not skip levels (h2 straight to h4) unless the
                            structure truly demands it
                        </li>
                        <li>
                            <span className="dot" />
                            Do not use headings for non-heading UI like buttons
                            or labels
                        </li>
                        <li>
                            <span className="dot" />
                            Use headings to break long pages into scannable
                            parts
                        </li>
                    </ul>

                    <div className="quickGrid">
                        <div className="quickCard">
                            <div className="quickTitle">Good</div>
                            <div className="quickText">
                                h1 Profile, h2 About, h2 Projects, h3 Featured
                            </div>
                        </div>
                        <div className="quickCard">
                            <div className="quickTitle">Bad</div>
                            <div className="quickText">
                                Multiple h1 everywhere, random jumps for styling
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiLayers />
                        </span>
                        Transparent content model
                    </h3>

                    <p className="p">
                        Some HTML elements are "transparent." That means the
                        element itself does not define a strict content type.
                        Instead, it allows whatever content would be allowed if
                        the element was not there.
                    </p>

                    <p className="p">
                        Think of it like a wrapper. For example, the anchor tag
                        a often behaves like this. If you wrap text, it behaves
                        like text. If you wrap a block of content, it behaves
                        like that block, as long as it is valid to do so.
                    </p>

                    <div className="callout good">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="calloutTitle">Why it matters</div>
                        </div>
                        <div className="calloutText">
                            It helps you build clean clickable regions (like
                            cards) without breaking HTML rules. Still, keep it
                            accessible and avoid wrapping interactive elements
                            inside other interactive elements.
                        </div>
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Transparent elements behave like their children
                        </li>
                        <li>
                            <span className="dot" />
                            Always keep nesting valid (no button inside a)
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer clear semantics over tricky wrappers
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Headings;
