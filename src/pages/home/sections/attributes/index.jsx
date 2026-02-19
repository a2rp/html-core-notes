import React from "react";
import { Styled } from "./styled";

const Attributes = () => {
    return (
        <Styled.Wrapper id="attributes">
            <div className="top">
                <h2 className="title">Global Attributes</h2>
                <p className="sub">
                    Global attributes are attributes you can use on almost any
                    HTML element. They help with identification, accessibility,
                    language, direction, editing, tooltips, and custom data.
                </p>
            </div>

            <div className="card">
                <h3 className="h3">Most used global attributes</h3>

                <div className="table">
                    <div className="row head">
                        <div className="cell">Attribute</div>
                        <div className="cell">What it does</div>
                        <div className="cell">Example</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">id</div>
                        <div className="cell">
                            Unique identifier on the page. Used for anchors, JS
                            hooks, labels, and accessibility.
                        </div>
                        <div className="cell mono">{`<section id="pricing">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">class</div>
                        <div className="cell">
                            Groups elements for styling and scripting.
                        </div>
                        <div className="cell mono">{`<div class="card primary">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">title</div>
                        <div className="cell">
                            Tooltip text on hover. Not a replacement for labels
                            or aria.
                        </div>
                        <div className="cell mono">{`<button title="Save">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">style</div>
                        <div className="cell">
                            Inline CSS. Works, but use sparingly for
                            maintainability.
                        </div>
                        <div className="cell mono">{`<p style="margin:0">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">hidden</div>
                        <div className="cell">
                            Hides the element from layout and accessibility tree
                            in most cases.
                        </div>
                        <div className="cell mono">{`<div hidden>`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">tabindex</div>
                        <div className="cell">
                            Controls keyboard focus order. Use carefully.
                        </div>
                        <div className="cell mono">{`<div tabindex="0">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">contenteditable</div>
                        <div className="cell">
                            Makes content editable by the user.
                        </div>
                        <div className="cell mono">{`<div contenteditable="true">`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">draggable</div>
                        <div className="cell">
                            Enables native drag and drop behavior.
                        </div>
                        <div className="cell mono">{`<img draggable="true" />`}</div>
                    </div>

                    <div className="row">
                        <div className="cell mono">spellcheck</div>
                        <div className="cell">
                            Enables or disables spellcheck in editable fields.
                        </div>
                        <div className="cell mono">{`<textarea spellcheck="false">`}</div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="card">
                    <h3 className="h3">Language and direction</h3>

                    <p className="text">
                        Use <span className="mono">lang</span> to declare the
                        language for screen readers and spellcheck. Use{" "}
                        <span className="mono">dir</span> for text direction.
                    </p>

                    <pre className="pre">{`<html lang="en">
  <body>
    <p lang="hi">Namaste</p>
    <p dir="rtl">Right to left example</p>
  </body>
</html>`}</pre>
                </div>

                <div className="card">
                    <h3 className="h3">Custom data attributes</h3>

                    <p className="text">
                        Use <span className="mono">data-*</span> to store custom
                        information for JS. They are safe and readable.
                    </p>

                    <pre className="pre">{`<button data-id="42" data-state="open">
  Toggle
</button>`}</pre>

                    <pre className="pre">{`const btn = document.querySelector("button");
console.log(btn.dataset.id);
console.log(btn.dataset.state);`}</pre>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Accessibility related global attributes</h3>

                <ul className="list">
                    <li>
                        Use proper semantic elements first. Add aria only when
                        needed.
                    </li>
                    <li>
                        <span className="mono">tabindex="0"</span> can make a
                        non interactive element focusable, but prefer real
                        buttons and links.
                    </li>
                    <li>
                        <span className="mono">title</span> is not reliable for
                        accessibility. Use visible text, labels, or aria-label.
                    </li>
                </ul>

                <pre className="pre">{`<button aria-label="Close dialog">×</button>`}</pre>
            </div>

            <div className="card">
                <h3 className="h3">Common mistakes</h3>

                <ul className="list">
                    <li>Using duplicate ids on the same page</li>
                    <li>Using title as the only label for form controls</li>
                    <li>Using tabindex values like 5, 6, 7 for ordering</li>
                    <li>
                        Putting important data in class names instead of data
                        attributes
                    </li>
                </ul>
            </div>

            <div className="endLine">
                Rule - use semantic HTML first, then use global attributes to
                enhance.
            </div>
        </Styled.Wrapper>
    );
};

export default Attributes;
