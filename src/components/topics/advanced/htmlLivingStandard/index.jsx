// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBookOpen,
    FiGitMerge,
    FiHelpCircle,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

const HtmlLivingStandard = () => {
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
                    <FiBookOpen />
                </span>

                <span className="title">HTML Living Standard</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What "living standard" means</h3>
                    <p className="p">
                        A living standard means the specification is updated
                        continuously. Instead of publishing a new big numbered
                        version every few years, the spec changes in small
                        updates whenever the web platform evolves. This matches
                        how browsers actually ship features: incrementally, on
                        their own release cycles.
                    </p>

                    <div className="callout">
                        <span className="calloutIcon">
                            <FiHelpCircle />
                        </span>
                        <div className="calloutText">
                            <div className="calloutTitle">
                                Why this approach exists
                            </div>
                            <div className="calloutSub">
                                The web changes fast. A living standard tries to
                                keep the official rules aligned with real
                                browser behavior.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">WHATWG vs W3C (in simple terms)</h3>
                    <p className="p">
                        Both WHATWG and W3C are standards organizations, but
                        they historically had different approaches to HTML.
                        WHATWG maintains the HTML Living Standard as a single,
                        continuously updated document. W3C also publishes web
                        standards, and for a long time it produced its own HTML
                        specs as well.
                    </p>

                    <div className="twoCol">
                        <div className="col">
                            <div className="colTop">
                                <span className="colIcon">
                                    <FiGitMerge />
                                </span>
                                <div className="colTitle">WHATWG</div>
                            </div>
                            <ul className="list">
                                <li>
                                    <span className="dot" />
                                    Maintains HTML as a living standard
                                </li>
                                <li>
                                    <span className="dot" />
                                    Focuses on matching browser reality
                                </li>
                                <li>
                                    <span className="dot" />
                                    One main spec, updated continuously
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <div className="colTop">
                                <span className="colIcon">
                                    <FiGitMerge />
                                </span>
                                <div className="colTitle">W3C</div>
                            </div>
                            <ul className="list">
                                <li>
                                    <span className="dot" />
                                    Publishes many web standards (HTML, CSS, Web
                                    APIs, etc.)
                                </li>
                                <li>
                                    <span className="dot" />
                                    More formal processes and recommendations
                                </li>
                                <li>
                                    <span className="dot" />
                                    Works with the web community and vendors
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="note">
                        <span className="noteIcon">
                            <FiAlertTriangle />
                        </span>
                        <div className="noteText">
                            The exact relationship between WHATWG and W3C has
                            changed over time. For practical development, the
                            key idea is that browsers tend to follow the WHATWG
                            HTML Living Standard.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Why the spec matters</h3>
                    <p className="p">
                        Most of the time you do not need to read the spec to
                        build websites. But the spec becomes useful when you
                        want clarity, correctness, or confidence. It answers
                        questions like: what does this element mean, what are
                        the rules for parsing it, and what should browsers do in
                        edge cases.
                    </p>

                    <div className="reasonGrid">
                        <div className="reason">
                            <span className="reasonIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="reasonTitle">Clear rules</div>
                            <div className="reasonSub">
                                Removes guesswork about what is valid and how
                                browsers interpret markup.
                            </div>
                        </div>

                        <div className="reason">
                            <span className="reasonIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="reasonTitle">Better debugging</div>
                            <div className="reasonSub">
                                Helps you understand weird behaviors when the
                                DOM does not look like you expected.
                            </div>
                        </div>

                        <div className="reason">
                            <span className="reasonIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="reasonTitle">
                                Accessibility and semantics
                            </div>
                            <div className="reasonSub">
                                Helps you pick the right element and structure
                                for meaning, not just appearance.
                            </div>
                        </div>

                        <div className="reason">
                            <span className="reasonIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="reasonTitle">Future-proofing</div>
                            <div className="reasonSub">
                                You get a better sense of what is stable, what
                                is experimental, and what will be supported.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">When should a beginner care</h3>
                    <p className="p">
                        You should care about the spec when you hit confusion.
                        If a tutorial conflicts with another tutorial, the spec
                        is the most neutral source of truth. Also, if you want
                        to understand HTML beyond copy paste, the spec gives you
                        the mental model behind the platform.
                    </p>

                    <ul className="list">
                        <li>
                            <span className="dot" />
                            When something works differently in different
                            browsers
                        </li>
                        <li>
                            <span className="dot" />
                            When markup behaves strangely after rendering
                        </li>
                        <li>
                            <span className="dot" />
                            When you want the "why" behind the rule
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Practical takeaway</h3>
                    <p className="p">
                        Learn the core HTML elements and semantics first. Use
                        MDN for day-to-day reference. When you want deeper
                        clarity, the HTML Living Standard is the detailed rule
                        book that browser engineers use to keep behavior
                        consistent.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HtmlLivingStandard;
