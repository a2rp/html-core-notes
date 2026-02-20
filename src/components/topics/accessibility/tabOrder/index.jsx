// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiNavigation,
    FiMousePointer,
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";
import { FaKeyboard } from "react-icons/fa";

const TabOrder = () => {
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
                    <FaKeyboard />
                </span>

                <span className="title">Tab order</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is tab order</h3>
                    <p className="p">
                        Tab order is the sequence in which focus moves when a
                        user presses the Tab key. Keyboard users rely on this to
                        navigate a page without a mouse. A good tab order is
                        predictable and follows the visual layout of the page.
                    </p>

                    <div className="callout good">
                        <span className="calloutIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="calloutText">
                            <div className="calloutTitle">Goal</div>
                            <div className="calloutSub">
                                Make keyboard navigation feel natural, from top
                                to bottom and left to right.
                            </div>
                        </div>
                    </div>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiNavigation />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Tab</div>
                                <div className="miniSub">Next focus</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiNavigation />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Shift + Tab</div>
                                <div className="miniSub">Previous focus</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiMousePointer />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Enter / Space</div>
                                <div className="miniSub">Activate controls</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Default tab order</h3>
                    <p className="p">
                        By default, browsers follow the DOM order. That means
                        focus moves in the order elements appear in your HTML.
                        This is why writing clean, logical markup is the easiest
                        way to get correct tab order.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Links, buttons, inputs, selects, and textareas are
                            focusable by default
                        </li>
                        <li>
                            <span className="dot" />
                            Disabled form controls are not focusable
                        </li>
                        <li>
                            <span className="dot" />
                            If you visually reorder items using CSS, the tab
                            order still follows the DOM order
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTitle">
                            Example: natural tab order
                        </div>
                        <pre className="code">
                            {`<a href="/docs">Docs</a>
<button type="button">Save</button>
<input type="text" placeholder="Search" />`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">tabindex</h3>
                    <p className="p">
                        tabindex controls whether an element can be focused and
                        how it participates in tab order.
                    </p>

                    <div className="table">
                        <div className="row head">
                            <div className="cell">Value</div>
                            <div className="cell">Meaning</div>
                            <div className="cell">When to use</div>
                        </div>

                        <div className="row">
                            <div className="cell mono">0</div>
                            <div className="cell">
                                Element becomes focusable and follows normal DOM
                                order
                            </div>
                            <div className="cell">
                                For custom UI elements like a div acting as a
                                button
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell mono">-1</div>
                            <div className="cell">
                                Element is focusable only via script, not Tab
                            </div>
                            <div className="cell">
                                For focus management inside modals, menus, and
                                panels
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell mono">{"> 0"}</div>
                            <div className="cell">
                                Changes the tab order to a manual priority list
                            </div>
                            <div className="cell">
                                Avoid in most cases, it creates confusing
                                navigation
                            </div>
                        </div>
                    </div>

                    <div className="callout warn">
                        <span className="calloutIcon">
                            <FiAlertTriangle />
                        </span>
                        <div className="calloutText">
                            <div className="calloutTitle">
                                Avoid tabindex greater than 0
                            </div>
                            <div className="calloutSub">
                                It breaks expected navigation and becomes hard
                                to maintain as the UI changes.
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTitle">
                            Example: making a custom element keyboard focusable
                        </div>
                        <pre className="code">
                            {`<div role="button" tabindex="0" aria-label="Open menu">
    Open menu
</div>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Focus management</h3>
                    <p className="p">
                        Focus management means placing focus intentionally so
                        keyboard users always know where they are. This matters
                        most for dialogs, drawers, menus, and dynamic sections.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            When a modal opens, move focus inside it
                        </li>
                        <li>
                            <span className="dot" />
                            Trap focus inside the modal while it is open
                        </li>
                        <li>
                            <span className="dot" />
                            When the modal closes, return focus to the element
                            that opened it
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTitle">
                            Example: focus flow for a modal (plain explanation)
                        </div>
                        <pre className="code">
                            {`1) User activates "Open settings" button
2) Modal opens, focus moves to modal heading or first input
3) Tab cycles inside modal only
4) User presses Escape or clicks Close
5) Focus returns to "Open settings" button`}
                        </pre>
                    </div>

                    <div className="callout good">
                        <span className="calloutIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="calloutText">
                            <div className="calloutTitle">Simple rule</div>
                            <div className="calloutSub">
                                If something appears on top of the page and
                                demands attention, it should also take focus.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Quick checklist</h3>

                    <div className="checkGrid">
                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="checkText">
                                Use semantic elements first (button, a, input)
                            </div>
                        </div>

                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="checkText">
                                Keep DOM order aligned with visual order
                            </div>
                        </div>

                        <div className="check">
                            <span className="checkIcon">
                                <FiAlertTriangle />
                            </span>
                            <div className="checkText">
                                Avoid tabindex greater than 0
                            </div>
                        </div>

                        <div className="check">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="checkText">
                                On dialogs, move focus in and return focus back
                            </div>
                        </div>
                    </div>

                    <div className="footerNote">
                        Tip: Test with keyboard only. Press Tab, Shift + Tab,
                        Enter, Space, and Escape. If navigation feels weird, DOM
                        order or focus handling is usually the reason.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TabOrder;
