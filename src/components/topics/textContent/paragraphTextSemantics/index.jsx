// src/components/textContent/paragraphTextSemantics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiType,
    FiChevronDown,
    FiChevronRight,
    FiCopy,
    FiCheck,
    FiInfo,
    FiBookOpen,
} from "react-icons/fi";

const ParagraphTextSemantics = () => {
    const [open, setOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState("");

    const examples = useMemo(() => {
        return [
            {
                key: "p",
                tag: "p",
                title: "Paragraph",
                why: "Use for normal paragraphs of text. A paragraph is a block of content.",
                example: `<p>This is a paragraph. It groups a chunk of related text.</p>`,
            },
            {
                key: "br",
                tag: "br",
                title: "Line break",
                why: "Use for a line break inside the same paragraph (poems, addresses). Do not use it to create spacing.",
                example: `<p>Line one<br />Line two<br />Line three</p>`,
            },
            {
                key: "hr",
                tag: "hr",
                title: "Thematic break",
                why: "Use to separate sections or topics. It represents a change in theme, not just a line.",
                example: `<p>Topic A content...</p>\n<hr />\n<p>Topic B content...</p>`,
            },
            {
                key: "pre",
                tag: "pre",
                title: "Preformatted text",
                why: "Preserves spaces and new lines. Useful for code blocks, ASCII diagrams, formatted text.",
                example: `<pre>\n  Name: Ash\n  Role: Developer\n  Notes: Keep spacing\n</pre>`,
            },
            {
                key: "blockquote",
                tag: "blockquote",
                title: "Block quote",
                why: "Use for a longer quotation taken from another source.",
                example: `<blockquote cite="https://example.com">\n  <p>Long quote goes here...</p>\n</blockquote>`,
            },
            {
                key: "q",
                tag: "q",
                title: "Inline quote",
                why: "Use for short inline quotations. Browsers usually add quotation marks automatically.",
                example: `<p>He said <q>HTML is structure</q> and moved on.</p>`,
            },
            {
                key: "cite",
                tag: "cite",
                title: "Citation",
                why: "Use to reference the title of a work (book, movie, article, paper). Not for the author name.",
                example: `<p>My favorite web doc is <cite>MDN Web Docs</cite>.</p>`,
            },
            {
                key: "abbr",
                tag: "abbr",
                title: "Abbreviation",
                why: "Use for abbreviations and acronyms. Add a title attribute for the full form.",
                example: `<p><abbr title="HyperText Markup Language">HTML</abbr> is the web's structure.</p>`,
            },
            {
                key: "dfn",
                tag: "dfn",
                title: "Defining instance",
                why: "Use when you define a term for the first time in a document or section.",
                example: `<p><dfn>DOM</dfn> is the Document Object Model.</p>`,
            },
            {
                key: "time",
                tag: "time",
                title: "Time / date",
                why: "Use for dates, times, and durations. Add datetime for machine readable value (SEO, parsing).",
                example: `<p>Last updated: <time datetime="2026-02-19">February 19, 2026</time></p>`,
            },
            {
                key: "mark",
                tag: "mark",
                title: "Highlight",
                why: "Use to highlight text that is relevant in the current context (search results, important part).",
                example: `<p>Remember: <mark>do not use tables for layout</mark>.</p>`,
            },
            {
                key: "small",
                tag: "small",
                title: "Small print",
                why: "Use for disclaimers, legal text, side notes. Not for styling. It has meaning.",
                example: `<p><small>Note: This is a demo project.</small></p>`,
            },
            {
                key: "sub",
                tag: "sub",
                title: "Subscript",
                why: "Use for chemical formulas, math subscripts.",
                example: `<p>Water is H<sub>2</sub>O.</p>`,
            },
            {
                key: "sup",
                tag: "sup",
                title: "Superscript",
                why: "Use for exponents, footnote markers.",
                example: `<p>2<sup>10</sup> equals 1024.</p>`,
            },
            {
                key: "strong",
                tag: "strong",
                title: "Strong importance",
                why: "Use to show strong importance, seriousness, or urgency. Not just bold styling.",
                example: `<p><strong>Warning:</strong> Do not share your password.</p>`,
            },
            {
                key: "em",
                tag: "em",
                title: "Emphasis",
                why: "Use to emphasize a word in a sentence (changes meaning). Screen readers also announce emphasis.",
                example: `<p>I said <em>today</em>, not tomorrow.</p>`,
            },
            {
                key: "b",
                tag: "b",
                title: "Stylistic bold",
                why: "Use when you want bold without extra importance. Example: keywords in a summary.",
                example: `<p>Keywords: <b>HTML</b>, <b>CSS</b>, <b>JS</b></p>`,
            },
            {
                key: "i",
                tag: "i",
                title: "Stylistic italic",
                why: "Use for alternate voice, technical terms, or idioms without emphasis meaning.",
                example: `<p>The term <i>viewport</i> matters on mobile.</p>`,
            },
            {
                key: "u",
                tag: "u",
                title: "Unarticulated annotation",
                why: "Rare. Traditionally used for misspellings or annotations. Avoid using for links style.",
                example: `<p>This word is <u>incorect</u> (misspelled).</p>`,
            },
            {
                key: "s",
                tag: "s",
                title: "No longer accurate",
                why: "Use for content that is no longer accurate or relevant (like old pricing).",
                example: `<p><s>₹999</s> ₹699</p>`,
            },
            {
                key: "code",
                tag: "code",
                title: "Inline code",
                why: "Use for short code fragments inline.",
                example: `<p>Use <code>&lt;main&gt;</code> for the main content.</p>`,
            },
            {
                key: "kbd",
                tag: "kbd",
                title: "Keyboard input",
                why: "Use to represent keyboard keys or user input.",
                example: `<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`,
            },
            {
                key: "samp",
                tag: "samp",
                title: "Sample output",
                why: "Use to represent output from a program or system.",
                example: `<p><samp>Build completed successfully.</samp></p>`,
            },
            {
                key: "var",
                tag: "var",
                title: "Variable",
                why: "Use for variables in math or programming context.",
                example: `<p>Let <var>x</var> be the number of users.</p>`,
            },
            {
                key: "span",
                tag: "span",
                title: "Generic inline",
                why: "Use when no semantic tag fits. It is just a hook for styling or JS.",
                example: `<p>Hello <span class="name">Ash</span></p>`,
            },
        ];
    }, []);

    const copy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(""), 900);
        } catch (e) {
            // do nothing
        }
    };

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
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
                    <FiType />
                </span>

                <span className="title">Paragraph and Text Semantics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="introTop">
                        <div className="introIcon">
                            <FiBookOpen />
                        </div>
                        <div className="introText">
                            <div className="introTitle">What this covers</div>
                            <div className="introSub">
                                These tags are used to write text properly in
                                HTML. Some tags add meaning (semantics) and help
                                screen readers, SEO, and maintainability.
                            </div>
                        </div>
                    </div>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Use semantic tags when possible. Use{" "}
                            <span className="mono">span</span> only when no
                            semantic tag fits.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {examples.map((x) => (
                        <div className="card" key={x.key}>
                            <div className="cardTop">
                                <div className="tagChip">
                                    <span className="mono">
                                        &lt;{x.tag}&gt;
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="copyBtn"
                                    onClick={() => copy(x.example, x.key)}
                                    title="Copy example"
                                    aria-label="Copy example"
                                >
                                    {copiedKey === x.key ? (
                                        <FiCheck />
                                    ) : (
                                        <FiCopy />
                                    )}
                                </button>
                            </div>

                            <div className="cardTitle">{x.title}</div>
                            <div className="cardWhy">{x.why}</div>

                            <pre className="code">
                                <code>{x.example}</code>
                            </pre>
                        </div>
                    ))}
                </div>

                <div className="footerTip">
                    Tip: Use <span className="mono">strong</span> and{" "}
                    <span className="mono">em</span> for meaning. Use{" "}
                    <span className="mono">b</span> and{" "}
                    <span className="mono">i</span> only for styling without
                    meaning.
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ParagraphTextSemantics;
