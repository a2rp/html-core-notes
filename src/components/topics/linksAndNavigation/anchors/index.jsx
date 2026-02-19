// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLink2,
    FiExternalLink,
    FiShield,
} from "react-icons/fi";

const Anchors = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
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
                    <FiLink2 />
                </span>

                <span className="title">Anchors and Links</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* a tag */}
                <div className="section">
                    <h3 className="h3">a tag</h3>
                    <p className="p">
                        The anchor tag is used to create hyperlinks. It allows
                        users to navigate from one page to another, to a section
                        within the same page, or even to another website.
                    </p>

                    <pre className="code">
                        {`<a href="https://example.com">Visit Website</a>`}
                    </pre>
                </div>

                {/* href */}
                <div className="section">
                    <h3 className="h3">href attribute</h3>
                    <p className="p">
                        The href attribute defines the destination of the link.
                        It can be:
                    </p>

                    <ul className="bullets">
                        <li>Absolute URL: https://google.com</li>
                        <li>Relative URL: /about</li>
                        <li>Same page section: #contact</li>
                        <li>Email: mailto:example@email.com</li>
                    </ul>
                </div>

                {/* target */}
                <div className="section">
                    <h3 className="h3">target attribute</h3>
                    <p className="p">
                        The target attribute specifies where to open the linked
                        document.
                    </p>

                    <pre className="code">
                        {`<a href="https://google.com" target="_blank">
  Open in new tab
</a>`}
                    </pre>

                    <p className="p">_blank opens the link in a new tab.</p>
                </div>

                {/* rel */}
                <div className="section">
                    <h3 className="h3">rel attribute</h3>
                    <p className="p">
                        When using target="_blank", you should add rel="noopener
                        noreferrer" for security reasons.
                    </p>

                    <pre className="code">
                        {`<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Safe external link
</a>`}
                    </pre>
                </div>

                {/* download */}
                <div className="section">
                    <h3 className="h3">Download attribute</h3>
                    <p className="p">
                        The download attribute tells the browser to download the
                        file instead of opening it.
                    </p>

                    <pre className="code">
                        {`<a href="/files/report.pdf" download>
  Download Report
</a>`}
                    </pre>
                </div>

                {/* mailto */}
                <div className="section">
                    <h3 className="h3">Mailto</h3>
                    <p className="p">
                        Used to open the user's email client with a predefined
                        email address.
                    </p>

                    <pre className="code">
                        {`<a href="mailto:hello@example.com">
  Send Email
</a>`}
                    </pre>
                </div>

                {/* tel */}
                <div className="section">
                    <h3 className="h3">Tel links</h3>
                    <p className="p">
                        Tel links are mainly used on mobile devices to start a
                        phone call.
                    </p>

                    <pre className="code">
                        {`<a href="tel:+919876543210">
  Call Now
</a>`}
                    </pre>
                </div>

                {/* hash navigation */}
                <div className="section">
                    <h3 className="h3">Hash navigation</h3>
                    <p className="p">
                        Hash navigation is used to scroll to a specific section
                        of the same page.
                    </p>

                    <pre className="code">
                        {`<a href="#contact">Go to Contact</a>

<section id="contact">
  Contact Section
</section>`}
                    </pre>
                </div>

                {/* security */}
                <div className="section">
                    <h3 className="h3">External link security</h3>
                    <p className="p">
                        When opening external links in a new tab using
                        target="_blank", always use:
                    </p>

                    <ul className="bullets">
                        <li>rel="noopener"</li>
                        <li>rel="noreferrer"</li>
                    </ul>

                    <div className="securityBox">
                        <FiShield />
                        <span>
                            This prevents the new page from accessing your
                            window object and protects against reverse
                            tabnabbing.
                        </span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Anchors;
