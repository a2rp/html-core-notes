// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiInfo, FiCode } from "react-icons/fi";

const MetaTags = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="header"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiInfo />
                </span>

                <span className="title">Meta Tags</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`body ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>What are Meta Tags</h3>
                    <p>
                        Meta tags are placed inside the head section of an HTML
                        document. They provide information about the page to the
                        browser and search engines. They do not display visible
                        content on the page.
                    </p>
                </div>

                <div className="section">
                    <h3>charset</h3>
                    <p>
                        The charset meta tag defines the character encoding used
                        in the document. UTF-8 is the standard and supports
                        almost all characters and symbols.
                    </p>

                    <pre>{`<meta charset="UTF-8">`}</pre>
                </div>

                <div className="section">
                    <h3>viewport</h3>
                    <p>
                        The viewport meta tag controls how a page is displayed
                        on mobile devices. It ensures proper scaling and
                        responsiveness.
                    </p>

                    <pre>
                        {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                    </pre>
                </div>

                <div className="section">
                    <h3>description</h3>
                    <p>
                        The description meta tag provides a short summary of the
                        page. Search engines often display this in search
                        results.
                    </p>

                    <pre>
                        {`<meta name="description" content="Learn HTML fundamentals with clear examples.">`}
                    </pre>
                </div>

                <div className="section">
                    <h3>keywords</h3>
                    <p>
                        The keywords meta tag lists relevant words for the page.
                        Modern search engines do not rely heavily on it, but it
                        was historically used for SEO.
                    </p>

                    <pre>
                        {`<meta name="keywords" content="HTML, Web, Markup, Tutorial">`}
                    </pre>
                </div>

                <div className="section">
                    <h3>author</h3>
                    <p>
                        The author meta tag defines who created the page. It is
                        useful for documentation and reference.
                    </p>

                    <pre>{`<meta name="author" content="Your Name">`}</pre>
                </div>

                <div className="section">
                    <h3>refresh</h3>
                    <p>
                        The refresh meta tag automatically reloads the page
                        after a specified number of seconds. It can also
                        redirect to another URL.
                    </p>

                    <pre>{`<meta http-equiv="refresh" content="5">`}</pre>

                    <pre>
                        {`<meta http-equiv="refresh" content="5; url=https://example.com">`}
                    </pre>
                </div>

                <div className="section">
                    <h3>http-equiv</h3>
                    <p>
                        The http-equiv attribute provides HTTP header
                        information. It can simulate response headers like
                        content-type or refresh.
                    </p>

                    <pre>
                        {`<meta http-equiv="X-UA-Compatible" content="IE=edge">`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MetaTags;
