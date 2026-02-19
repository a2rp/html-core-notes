// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiTag,
    FiHash,
    FiCheckSquare,
    FiGlobe,
    FiDatabase,
    FiMessageSquare,
    FiType,
    FiAlertTriangle,
    FiMinusCircle,
    FiCopy,
} from "react-icons/fi";

const HtmlSyntaxRules = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            // no-op
        }
    };

    const code1 = `<h1>Hello</h1>`;
    const code2 = `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>`;
    const code3 = `<input type="checkbox" checked />`;
    const code4 = `<div id="card" class="box" data-user-id="42" title="Profile"></div>`;
    const code5 = `<!-- This is a comment -->`;
    const code6 = `<img src="photo.jpg" alt="A photo" />`;
    const code7 = `<br />\n<hr />\n<meta charset="utf-8" />`;
    const code8 = `<input>\n<img>\n<br>\n<meta charset="utf-8">`;
    const code9 = `<div></div>\n<span></span>\n<p></p>\n<button></button>`;

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
                    <FiCode />
                </span>

                <span className="title">HTML Syntax Rules</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiTag />
                        </span>
                        Tags
                    </h3>
                    <p className="p">
                        A <span className="mono">tag</span> is the markup inside
                        angle brackets. Most elements use an opening tag and a
                        closing tag.
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code1)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code1}</code>
                        </pre>
                        <div className="note">
                            Opening tag:{" "}
                            <span className="mono">&lt;h1&gt;</span> and closing
                            tag: <span className="mono">&lt;/h1&gt;</span>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiHash />
                        </span>
                        Elements
                    </h3>
                    <p className="p">
                        An <span className="mono">element</span> is the complete
                        thing: the opening tag, the content, and the closing
                        tag. Some elements are empty (they have no content and
                        no closing tag). Those are called void elements (covered
                        below).
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <div className="miniTitle">Element</div>
                            <div className="miniSub">
                                Tag + content + closing tag
                            </div>
                        </div>
                        <div className="mini">
                            <div className="miniTitle">Tag</div>
                            <div className="miniSub">
                                Only the brackets part
                            </div>
                        </div>
                        <div className="mini">
                            <div className="miniTitle">Void element</div>
                            <div className="miniSub">No closing tag</div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiType />
                        </span>
                        Attributes
                    </h3>
                    <p className="p">
                        Attributes add extra information to an element. They
                        live inside the opening tag. Most attributes follow the
                        format <span className="mono">name="value"</span>.
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code2)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code2}</code>
                        </pre>
                        <div className="note">
                            <span className="mono">href</span>,{" "}
                            <span className="mono">target</span>,{" "}
                            <span className="mono">rel</span> are attributes.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiCheckSquare />
                        </span>
                        Boolean attributes
                    </h3>
                    <p className="p">
                        Boolean attributes are either "present" or "absent". If
                        present, they mean true. You usually do not write a
                        value.
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code3)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code3}</code>
                        </pre>
                        <div className="note">
                            <span className="mono">checked</span>,{" "}
                            <span className="mono">disabled</span>,{" "}
                            <span className="mono">required</span>,{" "}
                            <span className="mono">readonly</span> are common
                            boolean attributes.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiGlobe />
                        </span>
                        Global attributes
                    </h3>
                    <p className="p">
                        Global attributes are attributes that work on almost all
                        HTML elements. They are widely used for styling,
                        identification, accessibility, and custom behavior.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">id</span> - unique identifier
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">class</span> - reusable group
                            name
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">title</span> - tooltip text
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">style</span> - inline styles
                            (use rarely)
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">hidden</span> - hides the
                            element
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">tabindex</span> - keyboard
                            navigation
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">role</span> and{" "}
                            <span className="mono">aria-*</span> - accessibility
                        </li>
                    </ul>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code4)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code4}</code>
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiDatabase />
                        </span>
                        Data attributes
                    </h3>
                    <p className="p">
                        Data attributes store custom data on elements. They
                        start with <span className="mono">data-</span>. They are
                        useful when you want to attach extra information to a
                        DOM element without inventing new attributes.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Example:{" "}
                            <span className="mono">data-user-id="42"</span>
                        </li>
                        <li>
                            <span className="dot" />
                            In JavaScript you read them using{" "}
                            <span className="mono">element.dataset</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiMessageSquare />
                        </span>
                        Comments
                    </h3>
                    <p className="p">
                        Comments are ignored by the browser. They are useful for
                        notes, but avoid leaving sensitive information or large
                        blocks of commented code in production.
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code5)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code5}</code>
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiType />
                        </span>
                        Case sensitivity
                    </h3>
                    <p className="p">
                        HTML tags and attribute names are generally{" "}
                        <span className="mono">case-insensitive</span>, but the
                        common convention is to write them in lowercase. File
                        paths in URLs can be case-sensitive depending on your
                        server, so keep filenames consistent.
                    </p>

                    <div className="warn">
                        <span className="warnIcon">
                            <FiAlertTriangle />
                        </span>
                        <div className="warnText">
                            Use lowercase for tags and attributes. Keep file
                            paths consistent in case.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiMinusCircle />
                        </span>
                        Self closing tags myth
                    </h3>
                    <p className="p">
                        In HTML, many people write{" "}
                        <span className="mono">&lt;div /&gt;</span>. This is not
                        valid for normal elements. Only specific elements are
                        "void" (like <span className="mono">img</span>,{" "}
                        <span className="mono">input</span>,{" "}
                        <span className="mono">br</span>).
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Correct examples</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code9)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code9}</code>
                        </pre>
                        <div className="note">
                            Regular elements need both opening and closing tags.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiTag />
                        </span>
                        Void elements
                    </h3>
                    <p className="p">
                        Void elements do not have a closing tag in HTML. You can
                        write them as <span className="mono">&lt;img&gt;</span>{" "}
                        or <span className="mono">&lt;img /&gt;</span>. Both are
                        fine in HTML, but the important part is: you do not
                        write a closing tag like{" "}
                        <span className="mono">&lt;/img&gt;</span>.
                    </p>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">
                                Common void elements
                            </div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code8)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code8}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">Void example</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code6)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code6}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTop">
                            <div className="codeTitle">More void examples</div>
                            <button
                                type="button"
                                className="copyBtn"
                                onClick={() => copyText(code7)}
                                title="Copy"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="code">
                            <code>{code7}</code>
                        </pre>
                    </div>

                    <div className="note">
                        Common void elements:{" "}
                        <span className="mono">
                            area, base, br, col, embed, hr, img, input, link,
                            meta, param, source, track, wbr
                        </span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HtmlSyntaxRules;
