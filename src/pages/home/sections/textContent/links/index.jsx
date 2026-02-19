import React from "react";
import { Styled } from "./styled";

const Links = () => {
    return (
        <Styled.Section id="links">
            <h2>Links</h2>

            <div className="block">
                <h3>What is a link?</h3>
                <p>
                    The <code>&lt;a&gt;</code> tag is used to create hyperlinks.
                    It connects one document to another or one section of a page
                    to another.
                </p>
                <p>
                    The most important attribute is <code>href</code>, which
                    defines the destination.
                </p>
            </div>

            <div className="block">
                <h3>Basic link</h3>

                <pre>{`<a href="https://example.com">Visit Website</a>`}</pre>

                <p>
                    This creates a clickable link that navigates to another
                    website.
                </p>
            </div>

            <div className="block">
                <h3>Internal link</h3>

                <p>
                    Internal links point to another page or section within the
                    same website.
                </p>

                <pre>{`<a href="/about.html">About Page</a>`}</pre>

                <pre>{`<a href="#contact">Go to Contact Section</a>`}</pre>
            </div>

            <div className="block">
                <h3>Open link in new tab</h3>

                <pre>
                    {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open in new tab
</a>`}
                </pre>

                <ul>
                    <li>target="_blank" opens link in new tab</li>
                    <li>rel="noopener noreferrer" improves security</li>
                </ul>
            </div>

            <div className="block">
                <h3>Email and phone links</h3>

                <pre>
                    {`<a href="mailto:someone@example.com">Send Email</a>`}
                </pre>

                <pre>{`<a href="tel:+1234567890">Call Now</a>`}</pre>

                <p>These links trigger email clients or phone dialers.</p>
            </div>

            <div className="block">
                <h3>Download link</h3>

                <pre>{`<a href="file.pdf" download>Download PDF</a>`}</pre>

                <p>
                    The download attribute forces the browser to download the
                    file instead of opening it.
                </p>
            </div>

            <div className="block">
                <h3>Accessibility best practices</h3>
                <ul>
                    <li>Use descriptive link text</li>
                    <li>Avoid "click here" as link text</li>
                    <li>Ensure sufficient color contrast</li>
                    <li>Make links clearly identifiable</li>
                </ul>

                <pre>
                    {`<!-- Weak -->
<a href="/docs">Click here</a>

<!-- Better -->
<a href="/docs">Read documentation</a>`}
                </pre>
            </div>

            <div className="block">
                <h3>Common mistakes</h3>
                <ul>
                    <li>Using button for navigation instead of anchor</li>
                    <li>Missing rel when using target="_blank"</li>
                    <li>Empty href attributes</li>
                    <li>Using links without meaningful text</li>
                </ul>
            </div>

            <div className="endLine">
                Links connect the web. Always use meaningful text and proper
                attributes for accessibility and security.
            </div>
        </Styled.Section>
    );
};

export default Links;
