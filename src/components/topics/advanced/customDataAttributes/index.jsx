// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiDatabase,
    FiCode,
} from "react-icons/fi";

const CustomDataAttributes = () => {
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
                    <FiDatabase />
                </span>

                <span className="title">Custom Data Attributes</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What are data attributes</h3>

                    <p className="p">
                        Custom data attributes allow you to store extra
                        information directly inside HTML elements. They are
                        written using the prefix <strong>data-</strong>. These
                        attributes do not affect layout or styling
                        automatically. They simply store custom values.
                    </p>

                    <p className="p">
                        This is useful when you want to attach metadata to
                        elements that JavaScript can later read.
                    </p>

                    <div className="codeBlock">
                        <pre>
                            {`<div data-user-id="42" data-role="admin">
    Profile
</div>`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Why use data attributes</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Store extra information without creating custom
                            attributes
                        </li>
                        <li>
                            <span className="dot" />
                            Keep HTML valid and standard compliant
                        </li>
                        <li>
                            <span className="dot" />
                            Pass configuration data to JavaScript
                        </li>
                        <li>
                            <span className="dot" />
                            Avoid hardcoding values inside JS files
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">dataset API concept</h3>

                    <p className="p">
                        In JavaScript, every element has a property called
                        <strong>dataset</strong>. It allows you to access all
                        data attributes as an object.
                    </p>

                    <div className="codeBlock">
                        <pre>
                            {`const element = document.querySelector("div");

console.log(element.dataset.userId);
console.log(element.dataset.role);`}
                        </pre>
                    </div>

                    <p className="p">
                        Notice how <strong>data-user-id</strong> becomes
                        <strong>dataset.userId</strong>. Hyphenated names
                        convert to camelCase automatically.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">How the conversion works</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            data-user-id → dataset.userId
                        </li>
                        <li>
                            <span className="dot" />
                            data-product-name → dataset.productName
                        </li>
                        <li>
                            <span className="dot" />
                            data-custom-value → dataset.customValue
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Updating values dynamically</h3>

                    <div className="codeBlock">
                        <pre>{`element.dataset.userId = "99";`}</pre>
                    </div>

                    <p className="p">
                        This updates the HTML attribute automatically to:
                        <strong> data-user-id="99"</strong>.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">When to use it</h3>

                    <p className="p">
                        Use data attributes when you need small pieces of
                        structured information attached to elements. Avoid
                        storing large JSON objects directly in HTML. Keep it
                        lightweight and purposeful.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CustomDataAttributes;
