// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiImage,
    FiCode,
    FiEye,
    FiCheckCircle,
} from "react-icons/fi";

const SvgIntegration = () => {
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
                    <FiImage />
                </span>

                <span className="title">SVG integration</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Inline SVG</h3>
                    <p className="p">
                        Inline SVG means you write the SVG markup directly in
                        your JSX. The big advantage is that the SVG becomes part
                        of the DOM. That means you can style it with CSS, change
                        colors on hover, animate parts, and even control it with
                        JavaScript.
                    </p>

                    <div className="note">
                        <div className="noteTop">
                            <span className="noteIcon">
                                <FiCode />
                            </span>
                            <div className="noteTitle">Beginner tip</div>
                        </div>
                        <div className="noteBody">
                            Inline SVG is perfect for icons, logos, small
                            illustrations, and anything you want to recolor or
                            animate with CSS.
                        </div>
                    </div>

                    <div className="example">
                        <div className="exampleHead">
                            <span className="exampleIcon">
                                <FiCode />
                            </span>
                            <div className="exampleTitle">
                                Inline SVG example
                            </div>
                        </div>

                        <div className="inlineDemo">
                            <div className="svgBox">
                                <svg
                                    width="120"
                                    height="120"
                                    viewBox="0 0 120 120"
                                    role="img"
                                    aria-label="Simple badge icon"
                                >
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="46"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="10"
                                    />
                                    <path
                                        d="M40 62 L54 76 L82 48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="inlineText">
                                <div className="inlineTitle">
                                    This SVG uses currentColor
                                </div>
                                <div className="inlineSub">
                                    The SVG automatically picks the text color
                                    of its parent. So you can theme icons with
                                    simple CSS.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">SVG vs img</h3>

                    <p className="p">
                        You can use SVG in two common ways: as inline markup or
                        as an image file with an img tag. Both are valid. The
                        best choice depends on whether you need control over the
                        SVG parts.
                    </p>

                    <div className="compareGrid">
                        <div className="compareCard">
                            <div className="compareTop">
                                <span className="compareIcon">
                                    <FiCheckCircle />
                                </span>
                                <div className="compareTitle">Inline SVG</div>
                            </div>

                            <ul className="bullets">
                                <li>
                                    <span className="dot" />
                                    You can style paths with CSS
                                </li>
                                <li>
                                    <span className="dot" />
                                    Easy hover states and animations
                                </li>
                                <li>
                                    <span className="dot" />
                                    Great for icons and UI graphics
                                </li>
                                <li>
                                    <span className="dot" />
                                    Supports accessibility labels directly
                                </li>
                            </ul>
                        </div>

                        <div className="compareCard">
                            <div className="compareTop">
                                <span className="compareIcon">
                                    <FiImage />
                                </span>
                                <div className="compareTitle">img src SVG</div>
                            </div>

                            <ul className="bullets">
                                <li>
                                    <span className="dot" />
                                    Simple to use and cacheable
                                </li>
                                <li>
                                    <span className="dot" />
                                    Best for large illustrations
                                </li>
                                <li>
                                    <span className="dot" />
                                    Limited styling of inside parts
                                </li>
                                <li>
                                    <span className="dot" />
                                    Accessible with alt text like images
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="note">
                        <div className="noteTop">
                            <span className="noteIcon">
                                <FiEye />
                            </span>
                            <div className="noteTitle">Rule of thumb</div>
                        </div>
                        <div className="noteBody">
                            Use inline SVG when you need to change colors,
                            animate, or control parts. Use img when the SVG is
                            basically a static picture.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Accessibility in SVG</h3>

                    <p className="p">
                        SVG can be accessible if you treat it like meaningful
                        content. If the SVG is decorative, hide it from screen
                        readers. If it communicates information, give it a
                        proper text alternative.
                    </p>

                    <div className="a11yGrid">
                        <div className="a11yCard">
                            <div className="a11yTitle">Decorative SVG</div>
                            <div className="a11ySub">
                                If the SVG is just for decoration, hide it.
                            </div>

                            <div className="codeLine">
                                <span className="mono">aria-hidden="true"</span>
                            </div>
                        </div>

                        <div className="a11yCard">
                            <div className="a11yTitle">Meaningful SVG</div>
                            <div className="a11ySub">
                                If it conveys meaning, label it.
                            </div>

                            <div className="codeLine">
                                <span className="mono">
                                    role="img" + aria-label="..."
                                </span>
                            </div>
                        </div>
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use aria-hidden for purely decorative icons
                        </li>
                        <li>
                            <span className="dot" />
                            Use role="img" and aria-label for meaningful SVG
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid putting important text only inside SVG unless
                            you provide an accessible label
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SvgIntegration;
