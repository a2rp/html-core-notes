// scriptsAndPerformance/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiImage,
    FiInfo,
    FiCheckCircle,
} from "react-icons/fi";

const PerformanceAttributes = () => {
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
                    <FiZap />
                </span>

                <span className="title">Performance Attributes</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <p className="p">
                        Performance attributes help the browser load and render
                        content faster. You usually apply them to images,
                        iframes, and sometimes scripts. The goal is simple: load
                        what the user needs now, and delay what the user does
                        not need yet.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiImage />
                        </span>
                        loading="lazy"
                    </h3>

                    <p className="p">
                        The <span className="mono">loading</span> attribute
                        tells the browser whether it should load an image or an
                        iframe immediately or only when it is close to the
                        viewport. <span className="mono">lazy</span> means "load
                        later". This saves bandwidth and speeds up initial page
                        load.
                    </p>

                    <div className="note">
                        <div className="noteTitle">
                            <FiInfo /> When to use
                        </div>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                Use it for images below the fold
                            </li>
                            <li>
                                <span className="dot" />
                                Use it for long pages with many images
                            </li>
                            <li>
                                <span className="dot" />
                                Do not use it for the hero image above the fold
                            </li>
                        </ul>
                    </div>

                    <div className="code">
                        <div className="codeTitle">Example</div>
                        <pre className="pre">
                            {`<img
  src="photo.jpg"
  alt="A mountain view"
  loading="lazy"
/>

<iframe
  src="https://example.com/embed"
  title="Embedded content"
  loading="lazy"
></iframe>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiZap />
                        </span>
                        decoding="async"
                    </h3>

                    <p className="p">
                        Images must be decoded before they can be displayed. The{" "}
                        <span className="mono">decoding</span> attribute gives a
                        hint to the browser about when to decode.{" "}
                        <span className="mono">async</span> means the browser
                        can decode the image without blocking the page render.
                        This helps reduce jank and improves perceived loading.
                    </p>

                    <div className="note">
                        <div className="noteTitle">
                            <FiInfo /> Good to know
                        </div>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                Use for non critical images
                            </li>
                            <li>
                                <span className="dot" />
                                For the top hero image, you can keep default or
                                use sync if needed
                            </li>
                        </ul>
                    </div>

                    <div className="code">
                        <div className="codeTitle">Example</div>
                        <pre className="pre">
                            {`<img
  src="gallery-1.jpg"
  alt="Gallery image"
  decoding="async"
/>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCheckCircle />
                        </span>
                        fetchpriority="high | low | auto"
                    </h3>

                    <p className="p">
                        The <span className="mono">fetchpriority</span>{" "}
                        attribute hints the browser about how important a
                        resource is. A hero image that appears immediately can
                        be marked as <span className="mono">high</span> so it
                        gets downloaded earlier. Less important images can be{" "}
                        <span className="mono">low</span>.
                    </p>

                    <div className="note">
                        <div className="noteTitle">
                            <FiInfo /> Practical usage
                        </div>
                        <ul className="bullets">
                            <li>
                                <span className="dot" />
                                Use high for hero image or above the fold image
                            </li>
                            <li>
                                <span className="dot" />
                                Use low for images far below
                            </li>
                            <li>
                                <span className="dot" />
                                Keep auto if you are not sure
                            </li>
                        </ul>
                    </div>

                    <div className="code">
                        <div className="codeTitle">Example</div>
                        <pre className="pre">
                            {`<img
  src="hero.jpg"
  alt="Main hero banner"
  fetchpriority="high"
/>

<img
  src="footer-gallery.jpg"
  alt="Footer gallery image"
  loading="lazy"
  fetchpriority="low"
  decoding="async"
/>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick combo pattern</h3>
                    <p className="p">
                        A common pattern is: hero image loads fast, everything
                        else loads lazily. This improves first paint and avoids
                        unnecessary downloads.
                    </p>

                    <div className="code">
                        <div className="codeTitle">Example</div>
                        <pre className="pre">
                            {`<!-- Above the fold -->
<img
  src="hero.jpg"
  alt="Hero"
  fetchpriority="high"
/>

<!-- Below the fold -->
<img
  src="gallery-1.jpg"
  alt="Gallery"
  loading="lazy"
  decoding="async"
  fetchpriority="low"
/>`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PerformanceAttributes;
