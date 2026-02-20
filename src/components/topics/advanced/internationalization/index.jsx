// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGlobe,
    FiType,
    FiAlignRight,
    FiShield,
} from "react-icons/fi";

const Internationalization = () => {
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
                    <FiGlobe />
                </span>

                <span className="title">Internationalization</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What does Internationalization mean</h3>
                    <p className="p">
                        Internationalization (often written as i18n) means
                        building your pages in a way that supports multiple
                        languages and different writing directions. The web is
                        not only English. HTML has built-in features to declare
                        language and direction so browsers, screen readers, and
                        search engines can interpret text correctly.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">1. Language declaration with lang</h3>
                    <p className="p">
                        The <span className="mono">lang</span> attribute tells
                        the browser and accessibility tools what language the
                        content is in. This improves pronunciation in screen
                        readers, improves text processing, and also helps SEO.
                        You should set it at the top level on the{" "}
                        <span className="mono">html</span> element.
                    </p>

                    <div className="callout">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiType />
                            </span>
                            <div className="calloutTitle">Example</div>
                        </div>

                        <pre className="code">
                            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`}
                        </pre>

                        <p className="tip">
                            If part of the page switches language, add{" "}
                            <span className="mono">lang</span> on that specific
                            element.
                        </p>

                        <pre className="code">
                            {`<p>
  This sentence is English.
  <span lang="hi">यह हिस्सा हिंदी में है।</span>
</p>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">2. Text direction with dir</h3>
                    <p className="p">
                        Some languages are written left-to-right (LTR) like
                        English and Hindi. Some are right-to-left (RTL) like
                        Arabic and Hebrew. The <span className="mono">dir</span>{" "}
                        attribute tells the browser the direction of text flow.
                        You can set it on <span className="mono">html</span> for
                        the whole page or on a smaller element for a mixed page.
                    </p>

                    <div className="callout">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiAlignRight />
                            </span>
                            <div className="calloutTitle">Examples</div>
                        </div>

                        <pre className="code">
                            {`<!-- Entire page is RTL -->
<html lang="ar" dir="rtl">...</html>`}
                        </pre>

                        <pre className="code">
                            {`<!-- Only one block is RTL -->
<p>
  English paragraph.
  <span lang="ar" dir="rtl">مرحبا بالعالم</span>
</p>`}
                        </pre>

                        <p className="tip">
                            Use <span className="mono">dir="auto"</span> when
                            you do not know the direction in advance (for
                            example, user-generated content). The browser will
                            guess direction based on the first strong character.
                        </p>

                        <pre className="code">
                            {`<p dir="auto">User typed text here...</p>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        3. Bidi isolation (mixed direction safety)
                    </h3>
                    <p className="p">
                        Bidi means bidirectional text. Problems happen when LTR
                        and RTL text are mixed in the same line. For example, an
                        English sentence that includes an Arabic username or a
                        Hebrew word can cause punctuation and ordering to look
                        wrong. Bidi isolation helps keep the embedded text from
                        messing up the surrounding text flow.
                    </p>

                    <p className="p">
                        The simplest and most common tool is the{" "}
                        <span className="mono">bdi</span> element. It isolates a
                        piece of text and lets the browser render it safely.
                        This is very useful for usernames, tags, and short
                        user-generated strings.
                    </p>

                    <div className="callout">
                        <div className="calloutTop">
                            <span className="calloutIcon">
                                <FiShield />
                            </span>
                            <div className="calloutTitle">Example</div>
                        </div>

                        <pre className="code">
                            {`<p>
  User: <bdi>مرحبا</bdi> posted a comment.
</p>`}
                        </pre>

                        <p className="tip">
                            Use <span className="mono">bdo</span> only when you
                            intentionally want to force direction for a span of
                            text. It overrides the normal bidi algorithm, so it
                            is more dangerous if used incorrectly.
                        </p>

                        <pre className="code">
                            {`<p>
  Normal: ABC مرحبا 123
  <br />
  Forced RTL: <bdo dir="rtl">ABC مرحبا 123</bdo>
</p>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick checklist</h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Always set <span className="mono">
                                lang
                            </span> on <span className="mono">html</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">dir</span> for RTL pages
                            or RTL blocks
                        </li>
                        <li>
                            <span className="dot" />
                            For user content, consider{" "}
                            <span className="mono">dir="auto"</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">bdi</span> for mixed
                            direction values like usernames
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid overusing <span className="mono">
                                bdo
                            </span>{" "}
                            unless you truly need direction override
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Internationalization;
