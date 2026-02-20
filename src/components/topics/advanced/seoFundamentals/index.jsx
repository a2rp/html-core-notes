// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiTrendingUp,
    FiHash,
    FiFileText,
    FiShare2,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const SeoFundamentals = () => {
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
                    <FiTrendingUp />
                </span>

                <span className="title">SEO fundamentals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What SEO means in HTML</h3>
                    <p className="p">
                        SEO means making your pages easy to understand for both
                        humans and search engines. In HTML, the biggest SEO wins
                        come from clean structure, correct headings, and useful
                        metadata. Search engines read your HTML, try to
                        understand what the page is about, and then decide how
                        to show it in results.
                    </p>

                    <div className="tips">
                        <div className="tip">
                            <span className="tipIcon ok">
                                <FiCheckCircle />
                            </span>
                            <div className="tipText">
                                Use semantic tags and a clear page structure
                            </div>
                        </div>

                        <div className="tip">
                            <span className="tipIcon ok">
                                <FiCheckCircle />
                            </span>
                            <div className="tipText">
                                Write a helpful title and meta description
                            </div>
                        </div>

                        <div className="tip">
                            <span className="tipIcon warn">
                                <FiAlertTriangle />
                            </span>
                            <div className="tipText">
                                Avoid multiple h1 and random heading jumps
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="h3Row">
                        <span className="h3Icon">
                            <FiHash />
                        </span>
                        <h3 className="h3">Semantic headings</h3>
                    </div>

                    <p className="p">
                        Headings are one of the strongest signals about content
                        structure. Use them like an outline. h1 is the main page
                        topic. h2 are major sections. h3 are subsections, and so
                        on. Headings help users scan the page and help search
                        engines understand what is important.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use one clear h1 per page (recommended)
                        </li>
                        <li>
                            <span className="dot" />
                            Do not skip levels without a reason (h2 to h4)
                        </li>
                        <li>
                            <span className="dot" />
                            Do not use headings only for styling
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTitle">Example structure</div>
                        <pre className="code">
                            {`<h1>HTML Core Notes</h1>

<section>
  <h2>Forms</h2>
  <h3>Input types</h3>
  <h3>Validation</h3>
</section>

<section>
  <h2>Tables</h2>
  <h3>thead, tbody, tfoot</h3>
</section>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <div className="h3Row">
                        <span className="h3Icon">
                            <FiFileText />
                        </span>
                        <h3 className="h3">Meta description</h3>
                    </div>

                    <p className="p">
                        The meta description is a short summary of the page. It
                        often appears in Google results under the title. It does
                        not directly guarantee better ranking, but it strongly
                        affects clicks. A good description makes the page look
                        relevant and trustworthy.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Keep it clear and specific
                        </li>
                        <li>
                            <span className="dot" />
                            Usually around 140 to 160 characters is a good
                            target
                        </li>
                        <li>
                            <span className="dot" />
                            Make it unique per page
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTitle">Example</div>
                        <pre className="code">
                            {`<head>
  <title>HTML Core Notes</title>
  <meta
    name="description"
    content="At-a-glance HTML revision notes with clean examples for beginners and interviews."
  />
</head>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <div className="h3Row">
                        <span className="h3Icon">
                            <FiShare2 />
                        </span>
                        <h3 className="h3">Open Graph basics</h3>
                    </div>

                    <p className="p">
                        Open Graph meta tags control how your page looks when
                        someone shares it on platforms like WhatsApp, Facebook,
                        LinkedIn, and other apps. Without Open Graph, the
                        platform guesses. With Open Graph, you define the title,
                        description, image, and the URL.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            og:title is the share title
                        </li>
                        <li>
                            <span className="dot" />
                            og:description is the share summary
                        </li>
                        <li>
                            <span className="dot" />
                            og:image is the preview image
                        </li>
                        <li>
                            <span className="dot" />
                            og:url is the canonical link for sharing
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTitle">Minimal Open Graph set</div>
                        <pre className="code">
                            {`<head>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="HTML Core Notes" />
  <meta property="og:description" content="At-a-glance HTML revision notes." />
  <meta property="og:image" content="https://your-site.com/og-image.png" />
  <meta property="og:url" content="https://your-site.com/html-core-notes/" />
</head>`}
                        </pre>
                    </div>

                    <div className="note">
                        <span className="noteIcon">
                            <FiAlertTriangle />
                        </span>
                        <div className="noteText">
                            Tip: Use a proper image size for sharing previews.
                            Many platforms work best with 1200x630 images.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick checklist</h3>

                    <div className="checkGrid">
                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            One clear h1
                        </div>
                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Logical heading order
                        </div>
                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Unique meta description
                        </div>
                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Open Graph tags set
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SeoFundamentals;
