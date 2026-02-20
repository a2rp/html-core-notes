// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShield,
    FiAlertTriangle,
    FiExternalLink,
    FiLock,
    FiCode,
} from "react-icons/fi";

const SecurityBasics = () => {
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
                    <FiShield />
                </span>

                <span className="title">Security basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="introLeft">
                        <div className="pill">
                            <span className="pillIcon">
                                <FiLock />
                            </span>
                            Safe HTML habits
                        </div>
                        <p className="p">
                            HTML is not just about structure. The way you use
                            links and embeds can create security problems. This
                            topic covers three practical basics that come up
                            often in real websites.
                        </p>
                    </div>

                    <div className="introRight">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiAlertTriangle />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">XSS</div>
                                <div className="miniSub">Injected scripts</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiExternalLink />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">noopener</div>
                                <div className="miniSub">Safer new tabs</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiLock />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">sandbox</div>
                                <div className="miniSub">Safer iframes</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">1) XSS concept</h3>
                    <p className="p">
                        XSS means Cross Site Scripting. It happens when an
                        attacker manages to inject JavaScript into a page that
                        other users visit. The browser runs that injected code
                        as if it came from your site, which can lead to stolen
                        cookies, account takeover, or fake UI prompts.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiAlertTriangle />
                            </span>
                            The core idea
                        </div>
                        <div className="calloutText">
                            If user input becomes part of HTML without proper
                            escaping or sanitization, the user input can turn
                            into executable script.
                        </div>
                    </div>

                    <div className="sectionSub">
                        <h4 className="h4">Common places XSS sneaks in</h4>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                Comments, reviews, usernames, profile fields
                            </li>
                            <li>
                                <span className="dot" />
                                Search results, query params, dynamic templates
                            </li>
                            <li>
                                <span className="dot" />
                                Using innerHTML with untrusted data
                            </li>
                        </ul>
                    </div>

                    <div className="sectionSub">
                        <h4 className="h4">How to reduce risk</h4>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                Escape output when inserting user text into HTML
                            </li>
                            <li>
                                <span className="dot" />
                                Avoid rendering raw HTML from users
                            </li>
                            <li>
                                <span className="dot" />
                                Use safe templating and frameworks that escape
                                by default
                            </li>
                            <li>
                                <span className="dot" />
                                Add Content Security Policy later when backend
                                exists
                            </li>
                        </ul>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Bad vs safer pattern
                        </div>
                        <pre className="code">
                            {`// Bad: untrusted string becomes HTML
element.innerHTML = userInput;

// Safer: treat it as text, not markup
element.textContent = userInput;`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        2) rel="noopener" (and why it matters)
                    </h3>
                    <p className="p">
                        When you open a link in a new tab using target="_blank",
                        the opened page can sometimes access window.opener. That
                        means the new page may be able to redirect the original
                        page to a phishing site or modify it in risky ways.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiExternalLink />
                            </span>
                            The fix
                        </div>
                        <div className="calloutText">
                            Add rel="noopener" to break the connection between
                            the new tab and your page.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Recommended external link
                        </div>
                        <pre className="code">
                            {`<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit example
</a>`}
                        </pre>
                    </div>

                    <p className="p muted">
                        Note: rel="noreferrer" also removes the referrer header
                        in many cases. In practice, people commonly use both:
                        noopener noreferrer.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">3) sandbox iframe</h3>
                    <p className="p">
                        iframes embed another page inside your page. That can be
                        risky because the embedded page might run scripts,
                        attempt navigation, open popups, or request permissions.
                        The sandbox attribute restricts what the iframe is
                        allowed to do.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLock />
                            </span>
                            Default behavior
                        </div>
                        <div className="calloutText">
                            sandbox without any values applies strong
                            restrictions. You then opt in only to the minimum
                            permissions needed.
                        </div>
                    </div>

                    <div className="sectionSub">
                        <h4 className="h4">Common sandbox tokens</h4>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                allow-scripts: lets scripts run in the iframe
                            </li>
                            <li>
                                <span className="dot" />
                                allow-forms: allows form submission
                            </li>
                            <li>
                                <span className="dot" />
                                allow-same-origin: treats content as same origin
                                (use carefully)
                            </li>
                            <li>
                                <span className="dot" />
                                allow-popups: allows opening new windows
                            </li>
                        </ul>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Safer embed example
                        </div>
                        <pre className="code">
                            {`<iframe
  src="https://example.com/embed"
  title="Embedded content"
  sandbox="allow-scripts allow-forms"
  referrerpolicy="no-referrer"
></iframe>`}
                        </pre>
                    </div>

                    <p className="p muted">
                        Tip: Keep iframe permissions tight. Add only what you
                        need. For untrusted content, start with sandbox and
                        gradually allow features.
                    </p>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Treat user input as text, not HTML
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use rel="noopener noreferrer" with target="_blank"
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use sandbox for embedded iframes
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SecurityBasics;
