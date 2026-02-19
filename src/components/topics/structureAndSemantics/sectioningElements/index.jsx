// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiGrid } from "react-icons/fi";

const SectioningElements = () => {
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
                    <FiGrid />
                </span>

                <span className="title">Sectioning Elements</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What are Sectioning Elements</h3>
                    <p className="p">
                        Sectioning elements are semantic HTML tags that define
                        the structure of a webpage. They help organize content
                        into meaningful blocks so browsers, search engines, and
                        screen readers can understand the layout of the page.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">header</h3>
                    <p className="p">
                        The header element represents introductory content. It
                        usually contains a logo, navigation links, or page
                        title. It can appear at the top of the page or inside an
                        article or section.
                    </p>

                    <pre className="code">
                        {`<header>
  <h1>My Website</h1>
  <nav>...</nav>
</header>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">footer</h3>
                    <p className="p">
                        The footer element contains information about its parent
                        section. It commonly includes copyright, author details,
                        related links, or contact information.
                    </p>

                    <pre className="code">
                        {`<footer>
  <p>© 2026 My Website</p>
</footer>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">main</h3>
                    <p className="p">
                        The main element represents the primary content of the
                        page. There must be only one main element per page. It
                        should not contain repeated content like navigation or
                        footer.
                    </p>

                    <pre className="code">
                        {`<main>
  <h2>Article Title</h2>
  <p>Main content goes here.</p>
</main>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">section</h3>
                    <p className="p">
                        The section element defines a thematic grouping of
                        content. It is used when content belongs together and
                        usually contains a heading.
                    </p>

                    <pre className="code">
                        {`<section>
  <h2>Services</h2>
  <p>Details about services.</p>
</section>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">article</h3>
                    <p className="p">
                        The article element represents independent, self-
                        contained content. Blog posts, news articles, forum
                        posts, or comments are good examples.
                    </p>

                    <pre className="code">
                        {`<article>
  <h2>Blog Post</h2>
  <p>This is a standalone article.</p>
</article>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">aside</h3>
                    <p className="p">
                        The aside element represents content indirectly related
                        to the main content. It is often used for sidebars,
                        advertisements, or related links.
                    </p>

                    <pre className="code">
                        {`<aside>
  <h3>Related Links</h3>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul>
</aside>`}
                    </pre>
                </div>

                <div className="section">
                    <h3 className="h3">Why Semantics Matter</h3>
                    <p className="p">
                        Using semantic sectioning elements improves
                        accessibility, SEO, and code readability. It helps
                        screen readers understand page layout and helps search
                        engines identify important content.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SectioningElements;
