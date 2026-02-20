// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiDatabase } from "react-icons/fi";

const Microdata = () => {
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

                <span className="title">Microdata</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is Microdata</h3>
                    <p className="p">
                        Microdata is a way to add structured information inside
                        your HTML. It helps search engines understand what your
                        content actually represents, not just how it looks. For
                        example, instead of showing only text like "John Doe",
                        you can tell the browser that this text represents a
                        Person.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Core attributes</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            itemscope defines a new structured item
                        </li>
                        <li>
                            <span className="dot" />
                            itemtype defines the type of item
                        </li>
                        <li>
                            <span className="dot" />
                            itemprop defines properties of that item
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Basic example</h3>

                    <p className="p">
                        Below is a simple example describing a person using
                        Microdata.
                    </p>

                    <pre className="code">
                        {`<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
  <a href="https://example.com" itemprop="url">
    Portfolio
  </a>
</div>`}
                    </pre>

                    <p className="p">
                        Here: itemscope creates a new item. itemtype tells that
                        the item is a Person. itemprop defines individual
                        properties like name, jobTitle, and url.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Why it matters</h3>
                    <p className="p">
                        Search engines use structured data to generate rich
                        results. For example, product ratings, prices, events,
                        and author details can appear directly in search results
                        when structured data is correctly defined.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Important note</h3>
                    <p className="p">
                        Microdata is one way to provide structured data. Modern
                        applications often use JSON-LD instead, but
                        understanding Microdata helps you understand how
                        semantic metadata works directly inside HTML.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Microdata;
