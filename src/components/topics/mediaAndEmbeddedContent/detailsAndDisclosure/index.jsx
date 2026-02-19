// src/components/structureAndSemantics/detailsAndDisclosure/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiInfo,
    FiCheckCircle,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

const DetailsAndDisclosure = () => {
    const [open, setOpen] = useState(false);

    const examples = useMemo(() => {
        return [
            {
                title: "Basic FAQ (native toggle)",
                desc: "The <details> element creates a built-in disclosure widget. The <summary> element is the visible title that users click to expand or collapse.",
                code: `<details>
  <summary>What is HTML?</summary>
  <p>HTML is the structure of a web page.</p>
</details>`,
            },
            {
                title: "Open by default",
                desc: "Add the boolean attribute open to keep it expanded on first load.",
                code: `<details open>
  <summary>Requirements</summary>
  <ul>
    <li>Valid HTML</li>
    <li>Semantic tags</li>
    <li>Accessible text</li>
  </ul>
</details>`,
            },
            {
                title: "Multiple sections (accordion-like)",
                desc: "Multiple <details> blocks can be used to build an FAQ list. By default, users can open multiple at the same time.",
                code: `<details>
  <summary>Shipping</summary>
  <p>Delivery usually takes 3 to 5 business days.</p>
</details>

<details>
  <summary>Returns</summary>
  <p>Returns are accepted within 7 days of delivery.</p>
</details>`,
            },
        ];
    }, []);

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
                    <FiInfo />
                </span>

                <span className="title">Details and Disclosure</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What are details and summary</h3>
                    <p className="p">
                        The <span className="mono">details</span> element
                        provides a built-in expandable container. The{" "}
                        <span className="mono">summary</span> element acts as
                        the clickable heading. When the user clicks the summary,
                        the browser expands or collapses the content inside
                        details.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use <span className="mono">summary</span> as the
                            visible title
                        </li>
                        <li>
                            <span className="dot" />
                            Content inside <span className="mono">
                                details
                            </span>{" "}
                            is hidden until expanded
                        </li>
                        <li>
                            <span className="dot" />
                            The browser handles the toggle behavior for you
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Why this is useful</h3>

                    <div className="callouts">
                        <div className="callout">
                            <span className="calloutIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="calloutText">
                                <div className="calloutTitle">Simple</div>
                                <div className="calloutSub">
                                    No JavaScript needed for expand collapse
                                </div>
                            </div>
                        </div>

                        <div className="callout">
                            <span className="calloutIcon">
                                <FiAlertTriangle />
                            </span>
                            <div className="calloutText">
                                <div className="calloutTitle">Be careful</div>
                                <div className="calloutSub">
                                    Do not put buttons or links inside summary
                                    unless you know what you are doing
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="p">
                        This is perfect for FAQs, extra explanations, or hidden
                        notes. It keeps the page clean and lets the user choose
                        what to expand.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Key rules</h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">summary</span> should be the
                            first child of <span className="mono">details</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">open</span> attribute to
                            keep it expanded initially
                        </li>
                        <li>
                            <span className="dot" />
                            Keep summary text short and clear
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Examples</h3>

                    <div className="examples">
                        {examples.map((ex, idx) => (
                            <div className="example" key={idx}>
                                <div className="exTop">
                                    <div className="exTitle">{ex.title}</div>
                                    <div className="exDesc">{ex.desc}</div>
                                </div>

                                <div
                                    className="codeWrap"
                                    aria-label="Example code"
                                >
                                    <div className="codeHead">
                                        <span className="codeIcon">
                                            <FiCode />
                                        </span>
                                        <span className="codeLabel">HTML</span>
                                    </div>

                                    <pre className="code">
                                        <code>{ex.code}</code>
                                    </pre>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick tip</h3>
                    <p className="p">
                        If you need a true accordion where only one item can be
                        open at a time, that usually requires JavaScript. But
                        for most cases, multiple open items are totally fine and
                        simpler.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DetailsAndDisclosure;
