import React from "react";
import { Styled } from "./styled";

const BodyStructure = () => {
    return (
        <Styled.Section id="body">
            <h2>Body</h2>

            <div className="block">
                <h3>What is the body element?</h3>
                <p>
                    The <code>&lt;body&gt;</code> element contains all visible
                    content of the webpage.
                </p>
                <p>
                    Everything users see - text, images, forms, buttons, and
                    layout structures - exists inside the body.
                </p>
            </div>

            <div className="block">
                <h3>Basic Structure</h3>
                <pre>
                    {`<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>`}
                </pre>
            </div>

            <div className="block">
                <h3>Rendering Behavior</h3>
                <ul>
                    <li>HTML is parsed from top to bottom</li>
                    <li>Elements render in document order</li>
                    <li>CSS affects layout after parsing</li>
                    <li>Scripts can block rendering if not deferred</li>
                </ul>
            </div>

            <div className="block">
                <h3>Common Layout Pattern</h3>
                <pre>
                    {`<body>
    <header>
        Navigation
    </header>

    <main>
        Page Content
    </main>

    <aside>
        Sidebar
    </aside>

    <footer>
        Footer
    </footer>
</body>`}
                </pre>
            </div>

            <div className="block">
                <h3>Best Practices</h3>
                <ul>
                    <li>Keep the structure semantic</li>
                    <li>Do not place meta or title elements inside the body</li>
                    <li>Use only one main element per page</li>
                    <li>Avoid inline scripts that block rendering</li>
                </ul>
            </div>

            <div className="block">
                <h3>Common Mistakes</h3>
                <ul>
                    <li>Using multiple main elements</li>
                    <li>Placing head content inside the body</li>
                    <li>Using div everywhere instead of semantic elements</li>
                </ul>
            </div>
        </Styled.Section>
    );
};

export default BodyStructure;
