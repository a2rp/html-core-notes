import React from "react";
import { Styled } from "./styled";

const Headings = () => {
    return (
        <Styled.Section id="headings">
            <h2>Headings</h2>

            <div className="block">
                <h3>What are headings?</h3>
                <p>
                    Headings define the structure and hierarchy of content in a
                    document. They range from <code>h1</code> to <code>h6</code>
                    .
                </p>
                <p>
                    They are critical for accessibility, SEO, and content
                    organization.
                </p>
            </div>

            <div className="block">
                <h3>Heading Levels</h3>
                <pre>
                    {`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>`}
                </pre>
            </div>

            <div className="block">
                <h3>Hierarchy Rules</h3>
                <ul>
                    <li>Use only one h1 per page</li>
                    <li>Do not skip levels unnecessarily</li>
                    <li>Follow logical nesting order</li>
                    <li>Headings describe content structure, not styling</li>
                </ul>
            </div>

            <div className="block">
                <h3>Accessibility Importance</h3>
                <p>
                    Screen readers use headings to create a content outline.
                    Proper heading order allows users to navigate efficiently.
                </p>
                <pre>
                    {`<section>
    <h2>Features</h2>
    <h3>Performance</h3>
    <h3>Security</h3>
</section>`}
                </pre>
            </div>

            <div className="block">
                <h3>SEO Considerations</h3>
                <ul>
                    <li>
                        Search engines use headings to understand page topics
                    </li>
                    <li>Use meaningful keywords naturally</li>
                    <li>Avoid using headings purely for visual size</li>
                </ul>
            </div>

            <div className="block">
                <h3>Common Mistakes</h3>
                <ul>
                    <li>Using multiple h1 elements</li>
                    <li>Skipping from h1 directly to h4</li>
                    <li>Using headings for styling instead of CSS</li>
                    <li>Placing empty heading tags</li>
                </ul>
            </div>

            <div className="endLine">
                Headings define structure. CSS defines appearance.
            </div>
        </Styled.Section>
    );
};

export default Headings;
