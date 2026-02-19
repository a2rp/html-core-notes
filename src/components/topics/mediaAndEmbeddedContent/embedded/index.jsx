// src/components/mediaAndEmbeddedContent/embedded/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiLink,
    FiShield,
    FiLock,
    FiExternalLink,
    FiCode,
    FiInfo,
} from "react-icons/fi";

const Embedded = () => {
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
                    <FiExternalLink />
                </span>

                <span className="title">Embedded</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiInfo />
                        </span>
                        What does "embedded content" mean
                    </h3>

                    <p className="p">
                        Embedded content means showing something inside your
                        page that comes from somewhere else or that is rendered
                        by the browser as a separate embedded document. The most
                        common example is an{" "}
                        <span className="mono">iframe</span>, which can show
                        another webpage inside your webpage.
                    </p>

                    <p className="p">
                        Use embedded elements when you truly need to display
                        external content like maps, videos, payment widgets, or
                        third party tools. If you control the content, it is
                        often better to build a native UI instead of embedding a
                        full page.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiLink />
                        </span>
                        iframe
                    </h3>

                    <p className="p">
                        <span className="mono">iframe</span> embeds another HTML
                        page inside your current page. Think of it like a mini
                        browser window inside your layout.
                    </p>

                    <div className="tips">
                        <div className="tip">
                            <span className="tipIcon">
                                <FiShield />
                            </span>
                            <div className="tipText">
                                <div className="tipTitle">Security note</div>
                                <div className="tipSub">
                                    If you embed a page you do not fully trust,
                                    use <span className="mono">sandbox</span> to
                                    restrict it.
                                </div>
                            </div>
                        </div>

                        <div className="tip">
                            <span className="tipIcon">
                                <FiLock />
                            </span>
                            <div className="tipText">
                                <div className="tipTitle">Privacy note</div>
                                <div className="tipSub">
                                    Many embeds track users. Only embed trusted
                                    sources and prefer minimal permissions in{" "}
                                    <span className="mono">allow</span>.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">Basic iframe</div>
                        </div>

                        <pre className="pre">
                            {`<iframe
  src="https://example.com"
  title="Example embed"
  width="600"
  height="400"
  loading="lazy"
></iframe>`}
                        </pre>

                        <p className="pNote">
                            Always add a meaningful{" "}
                            <span className="mono">title</span> so screen
                            readers can describe what the embedded content is.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiShield />
                        </span>
                        sandbox
                    </h3>

                    <p className="p">
                        <span className="mono">sandbox</span> is an iframe
                        attribute that blocks powerful capabilities by default.
                        It turns the embed into a safer, restricted environment.
                        You can selectively allow specific capabilities.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">iframe with sandbox</div>
                        </div>

                        <pre className="pre">
                            {`<iframe
  src="https://example.com"
  title="Sandboxed embed"
  sandbox
></iframe>`}
                        </pre>

                        <p className="pNote">
                            Just writing <span className="mono">sandbox</span>{" "}
                            without values applies strict restrictions.
                        </p>
                    </div>

                    <div className="miniList">
                        <div className="miniTitle">Common sandbox tokens</div>

                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                <span className="mono">allow-scripts</span>:
                                allow running JavaScript inside the iframe
                            </li>
                            <li>
                                <span className="dot" />
                                <span className="mono">allow-forms</span>: allow
                                form submissions
                            </li>
                            <li>
                                <span className="dot" />
                                <span className="mono">allow-same-origin</span>:
                                treat the iframe as same origin (be careful)
                            </li>
                            <li>
                                <span className="dot" />
                                <span className="mono">allow-popups</span>:
                                allow opening new windows or tabs
                            </li>
                        </ul>

                        <p className="pNote">
                            Beginner rule: start strict, then add only what you
                            absolutely need.
                        </p>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">
                                selective sandbox permissions
                            </div>
                        </div>

                        <pre className="pre">
                            {`<iframe
  src="https://example.com"
  title="Restricted embed"
  sandbox="allow-scripts allow-forms"
  loading="lazy"
></iframe>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiLock />
                        </span>
                        allow attribute
                    </h3>

                    <p className="p">
                        <span className="mono">allow</span> controls which
                        browser features the iframe is allowed to use. This is
                        often used for permissions like camera, microphone,
                        fullscreen, autoplay, and more.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">
                                iframe allow example
                            </div>
                        </div>

                        <pre className="pre">
                            {`<iframe
  src="https://example.com"
  title="Feature controlled embed"
  allow="fullscreen; clipboard-write"
  sandbox="allow-scripts"
></iframe>`}
                        </pre>

                        <p className="pNote">
                            Keep it minimal. If you do not need a feature, do
                            not allow it.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiExternalLink />
                        </span>
                        embed
                    </h3>

                    <p className="p">
                        <span className="mono">embed</span> is used to embed
                        non-HTML external resources like PDFs or media that the
                        browser can render using built-in support or plugins. In
                        modern web apps, it is less common than{" "}
                        <span className="mono">iframe</span>.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">embed PDF example</div>
                        </div>

                        <pre className="pre">
                            {`<embed
  src="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
/>`}
                        </pre>
                    </div>

                    <p className="pNote">
                        If you need more control and accessibility, consider
                        linking the file and letting the user open it, or use an
                        iframe with a safe viewer.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiExternalLink />
                        </span>
                        object and param
                    </h3>

                    <p className="p">
                        <span className="mono">object</span> is a generic
                        container to embed resources like PDFs, images, or other
                        content types. It can also include fallback content if
                        the browser cannot render the resource.
                    </p>

                    <p className="p">
                        <span className="mono">param</span> is used inside{" "}
                        <span className="mono">object</span> to pass extra
                        configuration to the embedded resource. In modern HTML,
                        <span className="mono">param</span> is rarely needed,
                        but you should recognize it when you see it.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">
                                object with fallback
                            </div>
                        </div>

                        <pre className="pre">
                            {`<object
  data="/docs/guide.pdf"
  type="application/pdf"
  width="100%"
  height="500"
>
  <p>
    Your browser cannot display this PDF.
    <a href="/docs/guide.pdf">Download the file</a>.
  </p>
</object>`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <div className="codeTitle">param example</div>
                        </div>

                        <pre className="pre">
                            {`<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="quality" value="high" />
  <p>Fallback content goes here</p>
</object>`}
                        </pre>

                        <p className="pNote">
                            The example above is mostly historical. Today you
                            will rarely embed Flash, but you might still see{" "}
                            <span className="mono">object</span> and{" "}
                            <span className="mono">param</span> in old projects.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="h3Icon">
                            <FiInfo />
                        </span>
                        Quick beginner rules
                    </h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Prefer <span className="mono">iframe</span> for
                            embedding webpages or widget-like content
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">sandbox</span> for safety
                            when embedding third party pages
                        </li>
                        <li>
                            <span className="dot" />
                            Keep <span className="mono">allow</span> minimal
                        </li>
                        <li>
                            <span className="dot" />
                            Add a meaningful <span className="mono">
                                title
                            </span>{" "}
                            to iframes
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">object</span> when you
                            want fallback content support
                        </li>
                    </ul>

                    <div className="noteBox">
                        <span className="noteIcon">
                            <FiExternalLink />
                        </span>
                        <div className="noteText">
                            <div className="noteTitle">Real world example</div>
                            <div className="noteSub">
                                Embedding a Google Map or a YouTube video
                                usually uses{" "}
                                <span className="mono">iframe</span> with a few
                                controlled permissions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Embedded;
