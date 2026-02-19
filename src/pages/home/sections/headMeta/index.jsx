import React from "react";
import { Styled } from "./styled";

const HeadMeta = () => {
    return (
        <Styled.Section id="head">
            <h2>Head & Meta</h2>

            <div className="block">
                <h3>What is &lt;head&gt;?</h3>
                <p>
                    The <code>&lt;head&gt;</code> element contains metadata,
                    configuration, and references to external resources for the
                    document.
                </p>
                <p>It does not render visible content directly on the page.</p>
            </div>

            <div className="block">
                <h3>Essential Meta Tags</h3>

                <pre>{`<meta charset="UTF-8">`}</pre>

                <pre>
                    {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                </pre>

                <pre>
                    {`<meta name="description" content="Short page summary">`}
                </pre>

                <pre>{`<meta name="keywords" content="html, meta, seo">`}</pre>

                <pre>{`<meta name="author" content="Ashish Ranjan">`}</pre>
            </div>

            <div className="block">
                <h3>Viewport - Mobile Critical</h3>
                <p>
                    The viewport meta tag controls layout scaling on mobile
                    devices.
                </p>
                <pre>
                    {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                </pre>
                <p>
                    Without it, mobile browsers render the page at desktop width
                    and automatically scale it down.
                </p>
            </div>

            <div className="block">
                <h3>Title Tag</h3>
                <pre>{`<title>Page Title</title>`}</pre>
                <p>
                    The title appears in the browser tab and search engine
                    results.
                </p>
            </div>

            <div className="block">
                <h3>Linking External Resources</h3>

                <pre>{`<link rel="stylesheet" href="styles.css">`}</pre>

                <pre>{`<link rel="icon" href="favicon.ico">`}</pre>

                <pre>
                    {`<link rel="preconnect" href="https://fonts.googleapis.com">`}
                </pre>
            </div>

            <div className="block">
                <h3>Script Loading</h3>

                <pre>{`<script src="app.js" defer></script>`}</pre>

                <p>
                    <code>defer</code> downloads the script without blocking
                    HTML parsing and executes it after the document is fully
                    parsed.
                </p>

                <pre>{`<script src="app.js" async></script>`}</pre>

                <p>
                    <code>async</code> downloads the script in parallel and
                    executes it immediately after download, independent of
                    document parsing.
                </p>
            </div>

            <div className="block">
                <h3>SEO Basics</h3>
                <ul>
                    <li>Use a unique title for each page</li>
                    <li>Keep meta description under 160 characters</li>
                    <li>Set the correct language attribute on html</li>
                    <li>Use canonical links when necessary</li>
                </ul>
            </div>

            <div className="block">
                <h3>Common Mistakes</h3>
                <ul>
                    <li>Missing viewport meta tag</li>
                    <li>Duplicate meta descriptions</li>
                    <li>Blocking scripts without defer or async</li>
                    <li>Adding unnecessary meta tags</li>
                </ul>
            </div>
        </Styled.Section>
    );
};

export default HeadMeta;
