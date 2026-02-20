// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAlertTriangle,
    FiXCircle,
    FiCheckCircle,
} from "react-icons/fi";

const DeprecatedElements = () => {
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
                    <FiAlertTriangle />
                </span>

                <span className="title">Deprecated Elements</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <p className="p">
                        Deprecated elements are old HTML tags that you should
                        avoid using in modern projects. Some are fully removed
                        from the HTML standard, and some still work in browsers
                        only for backward compatibility. The problem is that
                        they reduce accessibility, make code harder to maintain,
                        and mix presentation with structure.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiXCircle />
                        </span>
                        <div className="noteText">
                            <div className="noteTitle">Rule</div>
                            <div className="noteSub">
                                Use HTML for structure and meaning, use CSS for
                                styling, and use JavaScript for behavior.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">1) font</h3>
                    <p className="p">
                        The <span className="mono">font</span> tag was used to
                        set text color, size, and face directly in HTML. This is
                        deprecated because styling belongs in CSS.
                    </p>

                    <div className="twoCol">
                        <div className="card bad">
                            <div className="cardHead">
                                <span className="badge bad">
                                    <FiXCircle /> Avoid
                                </span>
                            </div>
                            <pre className="code">{`<font color="red" size="4" face="Arial">
    Hello
</font>`}</pre>
                        </div>

                        <div className="card good">
                            <div className="cardHead">
                                <span className="badge good">
                                    <FiCheckCircle /> Do this
                                </span>
                            </div>
                            <pre className="code">{`<p class="highlight">Hello</p>

/* CSS */
.highlight {
    color: red;
    font-size: 18px;
    font-family: Arial, sans-serif;
}`}</pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">2) center</h3>
                    <p className="p">
                        The <span className="mono">center</span> tag was used to
                        center text or elements. This is deprecated because
                        layout and alignment belong in CSS.
                    </p>

                    <div className="twoCol">
                        <div className="card bad">
                            <div className="cardHead">
                                <span className="badge bad">
                                    <FiXCircle /> Avoid
                                </span>
                            </div>
                            <pre className="code">{`<center>
    <h2>Welcome</h2>
</center>`}</pre>
                        </div>

                        <div className="card good">
                            <div className="cardHead">
                                <span className="badge good">
                                    <FiCheckCircle /> Do this
                                </span>
                            </div>
                            <pre className="code">{`<h2 class="centerText">Welcome</h2>

/* CSS */
.centerText {
    text-align: center;
}`}</pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">3) marquee</h3>
                    <p className="p">
                        The <span className="mono">marquee</span> tag created
                        scrolling text. It is not part of modern HTML standards,
                        and it is bad for readability and accessibility.
                    </p>

                    <div className="twoCol">
                        <div className="card bad">
                            <div className="cardHead">
                                <span className="badge bad">
                                    <FiXCircle /> Avoid
                                </span>
                            </div>
                            <pre className="code">{`<marquee behavior="scroll" direction="left">
    Breaking News
</marquee>`}</pre>
                        </div>

                        <div className="card good">
                            <div className="cardHead">
                                <span className="badge good">
                                    <FiCheckCircle /> Do this
                                </span>
                            </div>
                            <pre className="code">{`<div class="ticker" aria-label="Announcements">
    <span class="tickerText">Breaking News</span>
</div>

/* CSS (simple, controlled animation) */
.ticker {
    overflow: hidden;
    white-space: nowrap;
}
.tickerText {
    display: inline-block;
    padding-left: 100%;
    animation: scrollText 10s linear infinite;
}
@keyframes scrollText {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}`}</pre>
                        </div>
                    </div>

                    <p className="p hint">
                        Better alternative for important messages is a normal
                        banner or alert instead of moving text.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">4) frameset</h3>
                    <p className="p">
                        <span className="mono">frameset</span> and
                        <span className="mono">frame</span> were used to split a
                        page into multiple frames. This is obsolete and causes
                        major issues with navigation, bookmarking, security, and
                        accessibility.
                    </p>

                    <div className="twoCol">
                        <div className="card bad">
                            <div className="cardHead">
                                <span className="badge bad">
                                    <FiXCircle /> Avoid
                                </span>
                            </div>
                            <pre className="code">{`<frameset cols="25%,75%">
    <frame src="menu.html" />
    <frame src="content.html" />
</frameset>`}</pre>
                        </div>

                        <div className="card good">
                            <div className="cardHead">
                                <span className="badge good">
                                    <FiCheckCircle /> Do this
                                </span>
                            </div>
                            <pre className="code">{`<!-- Use normal layout + CSS -->
<header>...</header>
<main class="layout">
    <aside>Menu</aside>
    <section>Content</section>
</main>

/* CSS */
.layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 16px;
}`}</pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">5) applet</h3>
                    <p className="p">
                        The <span className="mono">applet</span> tag was used to
                        run Java applets in the browser. It is obsolete because
                        modern browsers do not support it, and it is unsafe.
                    </p>

                    <div className="twoCol">
                        <div className="card bad">
                            <div className="cardHead">
                                <span className="badge bad">
                                    <FiXCircle /> Avoid
                                </span>
                            </div>
                            <pre className="code">{`<applet code="MyApplet.class" width="300" height="200">
</applet>`}</pre>
                        </div>

                        <div className="card good">
                            <div className="cardHead">
                                <span className="badge good">
                                    <FiCheckCircle /> Do this
                                </span>
                            </div>
                            <pre className="code">{`<!-- Use modern web tech -->
<canvas id="demoCanvas"></canvas>

<!-- Or embed a safe, trusted source -->
<iframe
    title="Embedded content"
    src="https://example.com"
    sandbox
></iframe>`}</pre>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="summary">
                        <div className="summaryTitle">Quick summary</div>
                        <ul className="summaryList">
                            <li>
                                <span className="dot" />
                                Deprecated tags mix styling or old tech into
                                HTML.
                            </li>
                            <li>
                                <span className="dot" />
                                Use semantic HTML plus CSS for layout and
                                styling.
                            </li>
                            <li>
                                <span className="dot" />
                                Avoid moving text and frame based layouts.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DeprecatedElements;
