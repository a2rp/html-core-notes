// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiZap,
    FiShield,
} from "react-icons/fi";

const ScriptElement = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
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
                    <FiCode />
                </span>

                <span className="title">Script Element</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Inline vs External */}
                <div className="section">
                    <h3 className="h3">Inline vs External</h3>

                    <p className="p">
                        Inline script means JavaScript written directly inside
                        the HTML file.
                    </p>

                    <pre className="code">
                        {`<script>
  console.log("Hello");
</script>`}
                    </pre>

                    <p className="p">
                        External script means JavaScript written in a separate
                        file and linked using the src attribute.
                    </p>

                    <pre className="code">
                        {`<script src="app.js"></script>`}
                    </pre>

                    <p className="p">
                        In real projects, external scripts are preferred because
                        they are easier to maintain, cache, and reuse.
                    </p>
                </div>

                {/* Defer */}
                <div className="section">
                    <h3 className="h3">Defer</h3>

                    <p className="p">
                        The defer attribute tells the browser to download the
                        script in parallel but execute it only after HTML
                        parsing is complete.
                    </p>

                    <pre className="code">
                        {`<script src="app.js" defer></script>`}
                    </pre>

                    <ul className="bullets">
                        <li>HTML parsing is not blocked</li>
                        <li>Execution happens after DOM is ready</li>
                        <li>Scripts run in order</li>
                    </ul>
                </div>

                {/* Async */}
                <div className="section">
                    <h3 className="h3">Async</h3>

                    <p className="p">
                        The async attribute downloads the script in parallel and
                        executes it immediately once ready.
                    </p>

                    <pre className="code">
                        {`<script src="analytics.js" async></script>`}
                    </pre>

                    <ul className="bullets">
                        <li>HTML parsing is not blocked</li>
                        <li>Execution order is NOT guaranteed</li>
                        <li>Best for independent scripts like analytics</li>
                    </ul>
                </div>

                {/* Module */}
                <div className="section">
                    <h3 className="h3">Module</h3>

                    <p className="p">
                        type="module" allows you to use modern JavaScript
                        modules with import and export.
                    </p>

                    <pre className="code">
                        {`<script type="module" src="main.js"></script>`}
                    </pre>

                    <ul className="bullets">
                        <li>Modules are deferred by default</li>
                        <li>They use strict mode automatically</li>
                        <li>They allow ES module imports</li>
                    </ul>
                </div>

                {/* Nomodule */}
                <div className="section">
                    <h3 className="h3">Nomodule</h3>

                    <p className="p">
                        nomodule is used to provide fallback scripts for older
                        browsers that do not support modules.
                    </p>

                    <pre className="code">
                        {`<script nomodule src="legacy.js"></script>`}
                    </pre>

                    <p className="p">
                        Modern browsers ignore this when module is supported.
                    </p>
                </div>

                {/* Integrity */}
                <div className="section">
                    <h3 className="h3">
                        <FiShield style={{ marginRight: 6 }} />
                        Integrity Attribute
                    </h3>

                    <p className="p">
                        The integrity attribute is used for Subresource
                        Integrity (SRI). It ensures the file has not been
                        tampered with.
                    </p>

                    <pre className="code">
                        {`<script 
  src="https://cdn.example.com/lib.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous">
</script>`}
                    </pre>

                    <p className="p">
                        If the file content changes unexpectedly, the browser
                        refuses to execute it.
                    </p>
                </div>

                {/* crossorigin */}
                <div className="section">
                    <h3 className="h3">
                        <FiZap style={{ marginRight: 6 }} />
                        crossorigin
                    </h3>

                    <p className="p">
                        The crossorigin attribute controls how cross-origin
                        requests are handled.
                    </p>

                    <ul className="bullets">
                        <li>anonymous</li>
                        <li>use-credentials</li>
                    </ul>

                    <p className="p">
                        It is commonly used with integrity when loading scripts
                        from a CDN.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ScriptElement;
