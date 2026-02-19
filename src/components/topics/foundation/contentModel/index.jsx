// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiGrid,
    FiBox,
    FiType,
    FiLayout,
    FiHash,
    FiImage,
    FiMousePointer,
    FiInfo,
    FiLayers,
} from "react-icons/fi";

const ContentModel = () => {
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
                    <FiGrid />
                </span>

                <span className="title">Content Model</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        The HTML content model is a simple way to understand
                        where an element is allowed to live and what kind of
                        content it can contain. In practice, it helps you avoid
                        invalid nesting and helps you write HTML that is more
                        predictable and accessible.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Modern HTML is not only "block vs inline". HTML has
                            content categories like{" "}
                            <span className="mono">flow</span>,
                            <span className="mono">phrasing</span>,{" "}
                            <span className="mono">sectioning</span>, and{" "}
                            <span className="mono">interactive</span>. These
                            categories explain nesting rules more accurately.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiBox />
                        </span>
                        <h3 className="h3">Block vs inline</h3>
                    </div>

                    <p className="p">
                        This is the classic beginner idea. A block element
                        usually starts on a new line and takes full width by
                        default. An inline element usually stays within a line
                        of text and only takes the space it needs.
                    </p>

                    <div className="cards2">
                        <div className="miniCard">
                            <div className="miniTitle">Block examples</div>
                            <div className="miniSub">
                                div, p, h1, ul, li, section, article
                            </div>
                        </div>
                        <div className="miniCard">
                            <div className="miniTitle">Inline examples</div>
                            <div className="miniSub">
                                span, a, strong, em, code, img
                            </div>
                        </div>
                    </div>

                    <div className="warn">
                        <span className="warnDot" />
                        <div className="warnText">
                            Block vs inline is useful, but it is not a complete
                            rule set. For correct nesting rules, use the content
                            categories below.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiLayers />
                        </span>
                        <h3 className="h3">Flow content</h3>
                    </div>

                    <p className="p">
                        Flow content is the broad category for most elements you
                        normally place inside the{" "}
                        <span className="mono">body</span>. If you are building
                        the structure of a page, you are mostly working with
                        flow content.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Includes paragraphs, headings, lists, sections,
                            images, tables, forms, etc.
                        </li>
                        <li>
                            <span className="dot" />
                            Most layout level elements are flow content.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiType />
                        </span>
                        <h3 className="h3">Phrasing content</h3>
                    </div>

                    <p className="p">
                        Phrasing content is basically "text level" content. It
                        is what you can put inside a paragraph without breaking
                        its meaning. It usually flows inline with text.
                    </p>

                    <div className="chips">
                        <span className="chip">span</span>
                        <span className="chip">a</span>
                        <span className="chip">strong</span>
                        <span className="chip">em</span>
                        <span className="chip">code</span>
                        <span className="chip">img</span>
                        <span className="chip">br</span>
                        <span className="chip">small</span>
                    </div>

                    <div className="note small">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            A common mistake is placing a block element inside a{" "}
                            <span className="mono">p</span>. A paragraph can
                            contain phrasing content, not flow content.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiLayout />
                        </span>
                        <h3 className="h3">Sectioning content</h3>
                    </div>

                    <p className="p">
                        Sectioning content creates a new section in the document
                        outline. It helps screen readers and search engines
                        understand the structure of your page.
                    </p>

                    <div className="cards2">
                        <div className="miniCard">
                            <div className="miniTitle">Sectioning elements</div>
                            <div className="miniSub">
                                section, article, nav, aside
                            </div>
                        </div>
                        <div className="miniCard">
                            <div className="miniTitle">Why it matters</div>
                            <div className="miniSub">
                                Better structure, accessibility, and meaning
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiHash />
                        </span>
                        <h3 className="h3">Heading content</h3>
                    </div>

                    <p className="p">
                        Heading content includes{" "}
                        <span className="mono">h1</span> to{" "}
                        <span className="mono">h6</span>. Headings label
                        sections and improve navigation for users and assistive
                        technology.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use headings in order. Do not jump levels randomly.
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer one main page title. Other headings represent
                            sub-sections.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiImage />
                        </span>
                        <h3 className="h3">Embedded content</h3>
                    </div>

                    <p className="p">
                        Embedded content is content that brings external media
                        or non-text resources into the document.
                    </p>

                    <div className="chips">
                        <span className="chip">img</span>
                        <span className="chip">video</span>
                        <span className="chip">audio</span>
                        <span className="chip">iframe</span>
                        <span className="chip">canvas</span>
                        <span className="chip">svg</span>
                    </div>

                    <div className="note small">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Embedded content often has extra accessibility
                            requirements, like alt text for images or captions
                            for video.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiMousePointer />
                        </span>
                        <h3 className="h3">Interactive content</h3>
                    </div>

                    <p className="p">
                        Interactive content includes elements that the user can
                        interact with. They usually accept focus, clicks, or
                        keyboard actions.
                    </p>

                    <div className="cards2">
                        <div className="miniCard">
                            <div className="miniTitle">Examples</div>
                            <div className="miniSub">
                                button, a (with href), input, select, textarea,
                                details, summary
                            </div>
                        </div>
                        <div className="miniCard">
                            <div className="miniTitle">Rule of thumb</div>
                            <div className="miniSub">
                                Do not nest interactive elements inside each
                                other
                            </div>
                        </div>
                    </div>

                    <div className="warn">
                        <span className="warnDot" />
                        <div className="warnText">
                            Avoid nesting buttons inside links or links inside
                            buttons. It creates confusing behavior for keyboard
                            and screen reader users.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiInfo />
                        </span>
                        <h3 className="h3">Metadata content</h3>
                    </div>

                    <p className="p">
                        Metadata content is mainly used inside the{" "}
                        <span className="mono">head</span>. It provides
                        information about the document rather than visible
                        content.
                    </p>

                    <div className="chips">
                        <span className="chip">title</span>
                        <span className="chip">meta</span>
                        <span className="chip">link</span>
                        <span className="chip">style</span>
                        <span className="chip">script</span>
                        <span className="chip">base</span>
                    </div>

                    <div className="note small">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Metadata affects SEO, social previews, and how the
                            page behaves on mobile devices.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="secHead">
                        <span className="secIcon">
                            <FiLayers />
                        </span>
                        <h3 className="h3">Transparent content model</h3>
                    </div>

                    <p className="p">
                        "Transparent" means the element does not define a fixed
                        content category by itself. Instead, it allows the same
                        content that its parent allows.
                    </p>

                    <div className="cards2">
                        <div className="miniCard">
                            <div className="miniTitle">Common example</div>
                            <div className="miniSub">
                                <span className="mono">a</span> can wrap text,
                                images, and other phrasing content depending on
                                context
                            </div>
                        </div>
                        <div className="miniCard">
                            <div className="miniTitle">Why it exists</div>
                            <div className="miniSub">
                                Flexible nesting without breaking semantics
                            </div>
                        </div>
                    </div>

                    <div className="note small">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Transparent does not mean "anything is allowed". The
                            surrounding context still matters.
                        </div>
                    </div>
                </div>

                <div className="quick">
                    <div className="quickTitle">Quick take</div>
                    <div className="quickText">
                        Flow is most body content. Phrasing is text level.
                        Sectioning creates meaningful sections. Embedded is
                        media. Interactive is clickable/focusable. Metadata is
                        head info. Transparent depends on context.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ContentModel;
