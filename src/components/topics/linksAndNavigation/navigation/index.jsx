// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiNavigation,
    FiLink,
    FiList,
} from "react-icons/fi";

const Navigation = () => {
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
                    <FiNavigation />
                </span>

                <span className="title">Navigation</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* NAV ELEMENT */}
                <div className="section">
                    <h3 className="h3">nav element</h3>

                    <p className="p">
                        The nav element represents a section of the page that
                        contains navigation links. It is used for major
                        navigation blocks such as the main menu, footer links,
                        or sidebar navigation.
                    </p>

                    <p className="p">
                        Not every group of links should be wrapped in nav. Only
                        important navigation areas that help users move across
                        the site should use it.
                    </p>

                    <div className="codeBlock">
                        {`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}
                    </div>

                    <div className="tip">
                        <FiLink />
                        Use semantic nav instead of a generic div for better
                        accessibility and SEO.
                    </div>
                </div>

                {/* BREADCRUMB */}
                <div className="section">
                    <h3 className="h3">Breadcrumb structure</h3>

                    <p className="p">
                        A breadcrumb shows the user where they are inside the
                        site hierarchy. It usually appears at the top of a page
                        and helps users navigate back to parent sections.
                    </p>

                    <div className="breadcrumbExample">
                        Home <span>›</span> Blog <span>›</span> HTML Guide
                    </div>

                    <div className="codeBlock">
                        {`<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li aria-current="page">HTML Guide</li>
  </ol>
</nav>`}
                    </div>

                    <ul className="bullets">
                        <li>Use ordered list for breadcrumbs</li>
                        <li>Use aria-current="page" for current item</li>
                        <li>Helps both users and screen readers</li>
                    </ul>
                </div>

                {/* PAGINATION */}
                <div className="section">
                    <h3 className="h3">Pagination patterns</h3>

                    <p className="p">
                        Pagination divides large content into smaller pages. It
                        is commonly used in blogs, product listings, and search
                        results.
                    </p>

                    <div className="paginationExample">
                        <button disabled>Prev</button>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>Next</button>
                    </div>

                    <div className="codeBlock">
                        {`<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=1">1</a></li>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3">3</a></li>
  </ul>
</nav>`}
                    </div>

                    <ul className="bullets">
                        <li>Wrap pagination inside nav</li>
                        <li>Use aria-label for clarity</li>
                        <li>Highlight active page</li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Navigation;
