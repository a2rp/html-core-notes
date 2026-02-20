// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiEye,
    FiLayout,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const SemanticHtmlVsDivSoup = () => {
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
                    <FiLayout />
                </span>

                <span className="title">Semantic HTML vs div soup</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is semantic HTML</h3>
                    <p className="p">
                        Semantic HTML means using elements that clearly describe
                        what the content is. For example, a navigation menu
                        should be inside a <span className="mono">nav</span>,
                        the main page content should be inside{" "}
                        <span className="mono">main</span>, and each article
                        should be inside <span className="mono">article</span>.
                        This is different from using only{" "}
                        <span className="mono">div</span> and{" "}
                        <span className="mono">span</span> everywhere.
                    </p>

                    <p className="p">
                        Think of semantic tags like labels on boxes. The label
                        helps everyone know what is inside, including browsers,
                        search engines, and assistive technologies.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">What is div soup</h3>
                    <p className="p">
                        "Div soup" is when a page is built mostly with{" "}
                        <span className="mono">div</span> tags, and the
                        structure is only defined by class names. It can work
                        visually, but the meaning is hidden. For example, a
                        sidebar might look correct, but a screen reader cannot
                        easily understand what it is supposed to represent.
                    </p>

                    <div className="cards">
                        <div className="card bad">
                            <div className="cardTop">
                                <span className="badge badBadge">
                                    <FiAlertTriangle /> div soup
                                </span>
                            </div>

                            <pre className="code">
                                {`<div class="header">
  <div class="nav">...</div>
</div>

<div class="content">
  <div class="post">...</div>
  <div class="sidebar">...</div>
</div>

<div class="footer">...</div>`}
                            </pre>

                            <p className="note">
                                This is not wrong, but it does not clearly tell
                                what the parts mean.
                            </p>
                        </div>

                        <div className="card good">
                            <div className="cardTop">
                                <span className="badge goodBadge">
                                    <FiCheckCircle /> semantic HTML
                                </span>
                            </div>

                            <pre className="code">
                                {`<header>
  <nav>...</nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>`}
                            </pre>

                            <p className="note">
                                This gives meaning to the structure, not just
                                styling hooks.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Why semantics matter</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Better accessibility for screen readers and keyboard
                            users
                        </li>
                        <li>
                            <span className="dot" />
                            Easier for developers to read and maintain
                        </li>
                        <li>
                            <span className="dot" />
                            Better structure for SEO and search engines
                        </li>
                        <li>
                            <span className="dot" />
                            Built-in browser behavior (like{" "}
                            <span className="mono">button</span> and{" "}
                            <span className="mono">form</span>) works properly
                        </li>
                    </ul>

                    <div className="tip">
                        <span className="tipIcon">
                            <FiEye />
                        </span>
                        <div className="tipText">
                            Semantic HTML is not about looking good. It is about
                            being understood.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Screen reader behavior</h3>
                    <p className="p">
                        Screen readers do not "see" the UI like we do. They read
                        the page as a structured document. Semantic elements
                        help them announce regions and landmarks like{" "}
                        <span className="mono">header</span>,{" "}
                        <span className="mono">nav</span>,{" "}
                        <span className="mono">main</span>,{" "}
                        <span className="mono">article</span>, and{" "}
                        <span className="mono">footer</span>.
                    </p>

                    <p className="p">
                        Users can jump quickly between landmarks, headings,
                        links, and form controls. If you use only{" "}
                        <span className="mono">div</span> elements, screen
                        readers lose many useful shortcuts and the page becomes
                        harder to navigate.
                    </p>

                    <div className="mini">
                        <div className="miniTitle">Good mental model</div>
                        <div className="miniSub">
                            Visual users scan with eyes. Screen reader users
                            scan with structure.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick checklist</h3>

                    <ul className="checklist">
                        <li>
                            <span className="check">
                                <FiCheckCircle />
                            </span>
                            Use <span className="mono">nav</span> for navigation
                        </li>
                        <li>
                            <span className="check">
                                <FiCheckCircle />
                            </span>
                            Use <span className="mono">main</span> once for main
                            content
                        </li>
                        <li>
                            <span className="check">
                                <FiCheckCircle />
                            </span>
                            Use <span className="mono">button</span> for actions
                            (not div click)
                        </li>
                        <li>
                            <span className="check">
                                <FiCheckCircle />
                            </span>
                            Use heading order properly (h1 then h2 then h3)
                        </li>
                        <li>
                            <span className="check">
                                <FiCheckCircle />
                            </span>
                            Use <span className="mono">label</span> with form
                            inputs
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SemanticHtmlVsDivSoup;
