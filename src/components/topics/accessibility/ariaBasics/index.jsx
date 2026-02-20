// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiShield } from "react-icons/fi";

const AriaBasics = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiShield />
                </span>

                <span className="title">ARIA Basics</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is ARIA</h3>
                    <p className="p">
                        ARIA stands for Accessible Rich Internet Applications.
                        It helps screen readers and assistive technologies
                        understand parts of your UI when normal HTML semantics
                        are not enough.
                    </p>
                    <p className="p">
                        Important rule: Use semantic HTML first. Only use ARIA
                        when native HTML cannot solve the problem.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">aria-label</h3>
                    <p className="p">
                        aria-label provides a text label directly to screen
                        readers. It is useful when there is no visible text.
                    </p>

                    <div className="code">
                        {`<button aria-label="Close menu">
  ✕
</button>`}
                    </div>

                    <p className="note">
                        The button shows only an icon visually, but screen
                        readers will read "Close menu".
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">aria-labelledby</h3>
                    <p className="p">
                        aria-labelledby connects an element to another element
                        that already contains the visible label.
                    </p>

                    <div className="code">
                        {`<h2 id="modalTitle">Delete item</h2>
<div role="dialog" aria-labelledby="modalTitle">
  Are you sure?
</div>`}
                    </div>

                    <p className="note">
                        Screen readers will use the heading text as the dialog
                        label.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">aria-describedby</h3>
                    <p className="p">
                        aria-describedby links an element to additional
                        descriptive text.
                    </p>

                    <div className="code">
                        {`<input id="email" aria-describedby="emailHelp" />

<p id="emailHelp">
  We will not share your email.
</p>`}
                    </div>

                    <p className="note">
                        Screen readers will read both the label and this helper
                        description.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">aria-hidden</h3>
                    <p className="p">
                        aria-hidden="true" hides content from screen readers. It
                        does not visually hide content. It only affects
                        accessibility APIs.
                    </p>

                    <div className="code">
                        {`<span aria-hidden="true">★</span>`}
                    </div>

                    <p className="note">
                        Useful for decorative icons that do not carry meaning.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">role attribute</h3>
                    <p className="p">
                        The role attribute defines what an element represents
                        when native semantics are missing.
                    </p>

                    <div className="code">
                        {`<div role="button" tabindex="0">
  Click me
</div>`}
                    </div>

                    <p className="note">
                        If you use role="button", you must also handle keyboard
                        interaction properly. That is why native button is
                        always better.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Golden Rule</h3>
                    <ul className="bullets">
                        <li>Use semantic HTML first</li>
                        <li>Do not replace native elements unnecessarily</li>
                        <li>ARIA does not fix bad HTML structure</li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AriaBasics;
