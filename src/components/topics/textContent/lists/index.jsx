// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiList } from "react-icons/fi";

const Lists = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
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
                    <FiList />
                </span>

                <span className="title">Lists</span>

                <span className="meta">ul, ol, li, dl, attributes</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* INTRO */}
                <div className="section">
                    <h3 className="h3">What are Lists</h3>
                    <p className="p">
                        Lists are used to group related items together. They
                        help structure content clearly and improve readability.
                        HTML provides three main types of lists: unordered,
                        ordered, and description lists.
                    </p>
                </div>

                {/* UNORDERED LIST */}
                <div className="section">
                    <h3 className="h3">Unordered List - ul</h3>
                    <p className="p">
                        An unordered list displays items with bullets. Order
                        does not matter.
                    </p>

                    <div className="codeBlock">
                        {`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`}
                    </div>

                    <ul className="demoList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                {/* ORDERED LIST */}
                <div className="section">
                    <h3 className="h3">Ordered List - ol</h3>
                    <p className="p">
                        An ordered list displays items with numbers. Order
                        matters.
                    </p>

                    <div className="codeBlock">
                        {`<ol>
    <li>Step One</li>
    <li>Step Two</li>
    <li>Step Three</li>
</ol>`}
                    </div>

                    <ol className="demoList">
                        <li>Step One</li>
                        <li>Step Two</li>
                        <li>Step Three</li>
                    </ol>
                </div>

                {/* DESCRIPTION LIST */}
                <div className="section">
                    <h3 className="h3">Description List - dl, dt, dd</h3>
                    <p className="p">
                        A description list is used for key value pairs. dt is
                        the term. dd is its description.
                    </p>

                    <div className="codeBlock">
                        {`<dl>
    <dt>HTML</dt>
    <dd>Structure of web pages</dd>

    <dt>CSS</dt>
    <dd>Styling of web pages</dd>
</dl>`}
                    </div>

                    <dl className="demoDl">
                        <dt>HTML</dt>
                        <dd>Structure of web pages</dd>

                        <dt>CSS</dt>
                        <dd>Styling of web pages</dd>
                    </dl>
                </div>

                {/* NESTED LIST */}
                <div className="section">
                    <h3 className="h3">Nested Lists</h3>
                    <p className="p">
                        You can place a list inside another list. This creates
                        hierarchy.
                    </p>

                    <div className="codeBlock">
                        {`<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>`}
                    </div>

                    <ul className="demoList">
                        <li>
                            Frontend
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* ATTRIBUTES */}
                <div className="section">
                    <h3 className="h3">Ordered List Attributes</h3>

                    <div className="subSection">
                        <h4>Reversed</h4>
                        <div className="codeBlock">
                            {`<ol reversed>
    <li>Three</li>
    <li>Two</li>
    <li>One</li>
</ol>`}
                        </div>

                        <ol reversed className="demoList">
                            <li>Three</li>
                            <li>Two</li>
                            <li>One</li>
                        </ol>
                    </div>

                    <div className="subSection">
                        <h4>Start</h4>
                        <div className="codeBlock">
                            {`<ol start="5">
    <li>Item</li>
    <li>Item</li>
</ol>`}
                        </div>

                        <ol start={5} className="demoList">
                            <li>Item</li>
                            <li>Item</li>
                        </ol>
                    </div>

                    <div className="subSection">
                        <h4>Type</h4>
                        <div className="codeBlock">
                            {`<ol type="A">
    <li>Item</li>
    <li>Item</li>
</ol>`}
                        </div>

                        <ol type="A" className="demoList">
                            <li>Item</li>
                            <li>Item</li>
                        </ol>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Lists;
