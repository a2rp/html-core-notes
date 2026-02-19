import React from "react";
import { Styled } from "./styled";

const Paragraphs = () => {
    return (
        <Styled.Section id="paragraphs">
            <h2>Paragraphs</h2>

            <div className="block">
                <h3>What is a paragraph?</h3>
                <p>
                    A paragraph is a block of text wrapped inside the{" "}
                    <code>&lt;p&gt;</code> tag. It is used for normal readable
                    content like explanations, descriptions, and story text.
                </p>
                <p>
                    Browsers give paragraphs default spacing and treat them as
                    block elements, meaning they start on a new line.
                </p>
            </div>

            <div className="block">
                <h3>Basic Example</h3>
                <pre>
                    {`<p>
    This is a paragraph. It is used for normal text content.
</p>

<p>
    This is another paragraph. Browsers add spacing between them.
</p>`}
                </pre>
            </div>

            <div className="block">
                <h3>When to use p</h3>
                <ul>
                    <li>Use it for plain text blocks</li>
                    <li>Use it for documentation and explanations</li>
                    <li>Use it for blog content and article text</li>
                    <li>Use it when the content is not a heading or list</li>
                </ul>
            </div>

            <div className="block">
                <h3>Good HTML structure</h3>
                <p>
                    Paragraphs should live inside meaningful sections like{" "}
                    <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, or{" "}
                    <code>&lt;article&gt;</code>.
                </p>

                <pre>
                    {`<article>
    <h2>About the product</h2>

    <p>
        This product is designed for daily use and long term durability.
    </p>

    <p>
        It comes with a warranty and supports easy replacement.
    </p>
</article>`}
                </pre>
            </div>

            <div className="block">
                <h3>Common mistakes</h3>
                <ul>
                    <li>Using multiple br tags instead of paragraphs</li>
                    <li>Wrapping headings inside p</li>
                    <li>Using p as a layout container</li>
                    <li>Leaving empty paragraphs for spacing</li>
                </ul>

                <pre>
                    {`<!-- Wrong -->
<p><h2>Title</h2></p>

<!-- Wrong -->
Text line 1<br><br><br>Text line 2

<!-- Better -->
<p>Text line 1</p>
<p>Text line 2</p>`}
                </pre>
            </div>

            <div className="block">
                <h3>Extra tips</h3>
                <ul>
                    <li>Use CSS for spacing, not empty p tags</li>
                    <li>Keep paragraphs short for readability</li>
                    <li>Use lists when content is item based</li>
                </ul>
            </div>

            <div className="endLine">
                Use p for readable text blocks. Use CSS for layout and spacing.
            </div>
        </Styled.Section>
    );
};

export default Paragraphs;
