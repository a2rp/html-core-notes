// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCheckCircle,
    FiAlertCircle,
    FiInfo,
    FiLink,
} from "react-icons/fi";

const AccessibilityInForms = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
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
                    <FiLink />
                </span>

                <span className="title">Accessibility in Forms</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <p className="p">
                        Accessible forms are not just about looking good. They
                        must be usable with keyboard navigation and screen
                        readers. The core idea is simple: every form control
                        should have a clear label, helpful guidance, and a clear
                        error message when something goes wrong.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Screen readers read form fields using their label.
                            If a label is missing or not connected, users hear
                            vague text like "edit text" without context.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">1. Label association</h3>
                    <p className="p">
                        Every input should have a label. The label must be
                        linked to the input so clicking the label focuses the
                        input, and screen readers announce the correct name.
                    </p>

                    <div className="goodBadGrid">
                        <div className="card good">
                            <div className="cardTop">
                                <span className="badge goodBadge">
                                    <FiCheckCircle /> Good
                                </span>
                                <div className="cardTitle">
                                    Proper label and htmlFor
                                </div>
                            </div>

                            <div className="example">
                                <div className="field">
                                    <label htmlFor="emailGood">Email</label>
                                    <input
                                        id="emailGood"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="code">
                                <pre>
                                    {`<label for="email">Email</label>
<input id="email" type="email" />`}
                                </pre>
                            </div>
                        </div>

                        <div className="card bad">
                            <div className="cardTop">
                                <span className="badge badBadge">
                                    <FiAlertCircle /> Avoid
                                </span>
                                <div className="cardTitle">
                                    Placeholder is not a label
                                </div>
                            </div>

                            <div className="example">
                                <div className="field">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        aria-label="Email"
                                    />
                                </div>
                            </div>

                            <div className="code">
                                <pre>
                                    {`<!-- Placeholder disappears on typing -->
<input type="email" placeholder="Email" />`}
                                </pre>
                            </div>

                            <p className="tiny">
                                If you must skip a visible label, at least add
                                aria-label. But visible labels are better.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">2. aria-describedby</h3>
                    <p className="p">
                        Use aria-describedby to connect extra help text or error
                        text to a field. Screen readers will announce that extra
                        information after reading the label.
                    </p>

                    <div className="demoCard">
                        <div className="demoTitle">
                            Example: help text linked
                        </div>

                        <div className="field">
                            <label htmlFor="passwordA11y">Password</label>
                            <input
                                id="passwordA11y"
                                type="password"
                                aria-describedby="passwordHelp"
                                placeholder="Enter password"
                            />
                            <div className="help" id="passwordHelp">
                                Use at least 8 characters with letters and a
                                number.
                            </div>
                        </div>

                        <div className="code">
                            <pre>
                                {`<label for="password">Password</label>
<input id="password" aria-describedby="passwordHelp" />
<div id="passwordHelp">Use at least 8 characters...</div>`}
                            </pre>
                        </div>
                    </div>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            aria-describedby works best when the text exists in
                            the DOM and is not purely visual.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">3. Error messaging patterns</h3>
                    <p className="p">
                        A good error message is specific and placed near the
                        field. Also mark the field as invalid using
                        aria-invalid="true". Link the error text using
                        aria-describedby so screen readers announce it.
                    </p>

                    <div className="demoCard">
                        <div className="demoTitle">
                            Example: invalid field with linked error
                        </div>

                        <ErrorDemo />
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Put error text near the input
                        </li>
                        <li>
                            <span className="dot" />
                            Use aria-invalid on the input
                        </li>
                        <li>
                            <span className="dot" />
                            Link error text using aria-describedby
                        </li>
                        <li>
                            <span className="dot" />
                            Keep the message clear and actionable
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

const ErrorDemo = () => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    const isValid = value.trim().includes("@");
    const showError = touched && !isValid;

    const describedBy = showError ? "emailError" : "emailHint";

    return (
        <div className="errorDemo">
            <div className="field">
                <label htmlFor="emailA11y">Email</label>
                <input
                    id="emailA11y"
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="name@example.com"
                    aria-describedby={describedBy}
                    aria-invalid={showError ? "true" : "false"}
                />

                {!showError && (
                    <div className="help" id="emailHint">
                        Example: name@example.com
                    </div>
                )}

                {showError && (
                    <div className="error" id="emailError">
                        Please enter a valid email with "@".
                    </div>
                )}
            </div>

            <div className="code">
                <pre>
                    {`<input aria-invalid="true"
       aria-describedby="emailError" />

<div id="emailError">Please enter a valid email...</div>`}
                </pre>
            </div>

            <div className="tiny">
                Pro tip: For full forms, you can also show an error summary at
                the top, but always keep field-level errors near the input.
            </div>
        </div>
    );
};

export default AccessibilityInForms;
