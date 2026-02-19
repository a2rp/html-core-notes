import React from "react";
import { Styled } from "./styled";

const DoctypeHtml = () => {
    return (
        <Styled.Section id="doctype">
            <h2>Doctype & html</h2>

            <div className="block">
                <h3>What is Doctype?</h3>
                <p>
                    <code>&lt;!DOCTYPE html&gt;</code> instructs the browser to
                    use the HTML5 standard and render the page in standards
                    mode.
                </p>
                <p>
                    Without it, the browser may enter quirks mode, which can
                    cause inconsistent layout and rendering behavior.
                </p>
            </div>

            <div className="block">
                <h3>Basic Structure</h3>
                <pre>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>`}
                </pre>
            </div>

            <div className="block">
                <h3>lang Attribute</h3>
                <p>
                    The <code>lang</code> attribute defines the document
                    language. It improves accessibility, screen reader support,
                    and SEO.
                </p>
                <pre>{`<html lang="en">`}</pre>
            </div>

            <div className="block">
                <h3>Character Encoding</h3>
                <pre>{`<meta charset="UTF-8">`}</pre>
                <p>
                    UTF-8 supports most global characters and prevents character
                    encoding issues.
                </p>
            </div>

            <div className="block">
                <h3>Minimum Safe Template</h3>
                <pre>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>

</body>
</html>`}
                </pre>
            </div>

            <div className="block">
                <h3>Common Mistakes</h3>
                <ul>
                    <li>Missing doctype declaration</li>
                    <li>Omitting the lang attribute</li>
                    <li>Using incorrect character encoding</li>
                    <li>Missing viewport meta tag for responsive design</li>
                </ul>
            </div>
        </Styled.Section>
    );
};

export default DoctypeHtml;
