// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiFileText } from "react-icons/fi";

const BasicDocumentStructure = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiFileText />
                </span>

                <span className="title">Basic Document Structure</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Doctype</h3>
                    <p className="p">
                        The doctype tells the browser which version of HTML is
                        being used. In modern HTML, we use a simple declaration:
                    </p>

                    <pre className="code">{`<!DOCTYPE html>`}</pre>

                    <p className="p">
                        This ensures the browser renders the page in standards
                        mode instead of compatibility mode.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">html element</h3>
                    <p className="p">
                        The <strong>html</strong> element is the root element of
                        every HTML document. All other elements must be inside
                        it.
                    </p>

                    <pre className="code">
                        {`<html lang="en">
</html>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">head and body</h3>
                    <p className="p">
                        The <strong>head</strong> contains metadata such as
                        title, meta tags, styles, and scripts. It does not
                        display visible content.
                    </p>

                    <p className="p">
                        The <strong>body</strong> contains all visible content
                        such as headings, paragraphs, images, forms, and more.
                    </p>

                    <pre className="code">
                        {`<head>
  <title>My Page</title>
</head>

<body>
  <h1>Hello World</h1>
</body>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">lang attribute</h3>
                    <p className="p">
                        The <strong>lang</strong> attribute defines the language
                        of the document. It helps screen readers and search
                        engines understand the content.
                    </p>

                    <pre className="code">{`<html lang="en">`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">dir attribute</h3>
                    <p className="p">
                        The <strong>dir</strong> attribute defines text
                        direction. Common values:
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" /> ltr - left to right
                        </li>
                        <li>
                            <span className="dot" /> rtl - right to left
                        </li>
                    </ul>

                    <pre className="code">{`<html dir="ltr">`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">Character encoding</h3>
                    <p className="p">
                        Character encoding tells the browser how to interpret
                        text characters. UTF-8 is the standard encoding and
                        supports almost all characters.
                    </p>

                    <pre className="code">{`<meta charset="UTF-8">`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">Viewport meta</h3>
                    <p className="p">
                        The viewport meta tag makes the website responsive on
                        mobile devices by controlling layout scaling.
                    </p>

                    <pre className="code">
                        {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">Favicon</h3>
                    <p className="p">
                        A favicon is the small icon shown in the browser tab. It
                        is added using the link element inside the head.
                    </p>

                    <pre className="code">
                        {`<link rel="icon" href="/favicon.ico">`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">Title element</h3>
                    <p className="p">
                        The title element defines the text shown in the browser
                        tab and is important for SEO.
                    </p>

                    <pre className="code">{`<title>My Website</title>`}</pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BasicDocumentStructure;
