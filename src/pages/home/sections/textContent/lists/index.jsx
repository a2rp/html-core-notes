import React from "react";
import { Styled } from "./styled";

const Lists = () => {
    return (
        <Styled.Section id="lists">
            <h2>Lists</h2>

            <div className="block">
                <h3>What are lists?</h3>
                <p>
                    HTML lists are used to group related items. They are perfect
                    for navigation menus, steps, features, checklists, and any
                    item based content.
                </p>
                <p>
                    The three most common list tags are <code>&lt;ul&gt;</code>,
                    <code>&lt;ol&gt;</code>, and <code>&lt;dl&gt;</code>.
                </p>
            </div>

            <div className="block">
                <h3>Unordered list - ul</h3>
                <p>
                    Use <code>&lt;ul&gt;</code> when order does not matter, like
                    features or bullet points.
                </p>

                <pre>
                    {`<ul>
    <li>Fast setup</li>
    <li>Responsive layout</li>
    <li>Dark mode support</li>
</ul>`}
                </pre>
            </div>

            <div className="block">
                <h3>Ordered list - ol</h3>
                <p>
                    Use <code>&lt;ol&gt;</code> when order matters, like steps,
                    instructions, rankings, or priority.
                </p>

                <pre>
                    {`<ol>
    <li>Install dependencies</li>
    <li>Start the dev server</li>
    <li>Build for production</li>
</ol>`}
                </pre>
            </div>

            <div className="block">
                <h3>Description list - dl</h3>
                <p>
                    Use <code>&lt;dl&gt;</code> when you have term and
                    description pairs, like a glossary or FAQ.
                </p>

                <pre>
                    {`<dl>
    <dt>HTML</dt>
    <dd>Markup language for web pages</dd>

    <dt>CSS</dt>
    <dd>Styles and layout rules</dd>
</dl>`}
                </pre>
            </div>

            <div className="block">
                <h3>Nested lists</h3>
                <p>
                    You can nest lists inside a list item. This is common in
                    menus and outlines.
                </p>

                <pre>
                    {`<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>`}
                </pre>
            </div>

            <div className="block">
                <h3>Common mistakes</h3>
                <ul>
                    <li>Putting text directly inside ul or ol without li</li>
                    <li>Using br for spacing instead of proper list items</li>
                    <li>
                        Using div tags where a list is the correct structure
                    </li>
                    <li>Over nesting lists without real need</li>
                </ul>

                <pre>
                    {`<!-- Wrong -->
<ul>
    Item 1
    Item 2
</ul>

<!-- Correct -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`}
                </pre>
            </div>

            <div className="block">
                <h3>Accessibility notes</h3>
                <ul>
                    <li>
                        Use lists for item groups so screen readers understand
                        structure
                    </li>
                    <li>Do not remove list semantics for real lists</li>
                    <li>For nav menus, lists are still valid and common</li>
                </ul>
            </div>

            <div className="endLine">
                Use lists for grouped items. Use ul for bullets, ol for steps,
                and dl for term definitions.
            </div>
        </Styled.Section>
    );
};

export default Lists;
