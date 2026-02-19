// src/components/structureAndSemantics/documentLandmarks/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiMapPin,
    FiEye,
    FiCheckCircle,
    FiAlertTriangle,
    FiLayers,
    FiTag,
    FiInfo,
} from "react-icons/fi";

const DocumentLandmarks = () => {
    const [open, setOpen] = useState(false);

    const landmarks = useMemo(() => {
        return [
            {
                tag: "header",
                role: "banner",
                use: "Top area of a page or a section (logo, title, top nav).",
                note: "Only the top-level page header maps to banner. A header inside an article is not a banner landmark.",
            },
            {
                tag: "nav",
                role: "navigation",
                use: "Primary navigation links or menus.",
                note: "Use one nav per major navigation region. If there are multiple, label them.",
            },
            {
                tag: "main",
                role: "main",
                use: "The main unique content of the page.",
                note: "Only one main per page. Avoid nesting main inside other landmarks.",
            },
            {
                tag: "aside",
                role: "complementary",
                use: "Related side content (sidebar, related links, ads, callouts).",
                note: "Keep it relevant to the surrounding content.",
            },
            {
                tag: "footer",
                role: "contentinfo",
                use: "Bottom area of a page (copyright, contact, policies).",
                note: "Only the page-level footer maps to contentinfo. Footer inside article is not contentinfo.",
            },
            {
                tag: "section",
                role: "region (only when labeled)",
                use: "A thematic grouping of content with a heading.",
                note: "Section is not automatically a landmark unless it has an accessible name (aria-label/aria-labelledby).",
            },
            {
                tag: "article",
                role: "article",
                use: "Self-contained content that can stand alone (blog post, card, comment).",
                note: "Articles can be nested (like comments inside a post).",
            },
        ];
    }, []);

    const ariaRoles = useMemo(() => {
        return [
            {
                role: "banner",
                when: "Top-level site header of the page.",
                example:
                    "A header that contains site logo and primary navigation.",
            },
            {
                role: "navigation",
                when: "A set of navigation links to major pages or sections.",
                example: "Main menu, sidebar menu, footer menu.",
            },
            {
                role: "main",
                when: "The main content unique to the page.",
                example: "Content area excluding header/footer/sidebars.",
            },
            {
                role: "complementary",
                when: "Supporting content related to main content.",
                example: "Related posts sidebar, glossary, tips panel.",
            },
            {
                role: "contentinfo",
                when: "Footer information for the site or page.",
                example: "Copyright, contact links, policies.",
            },
            {
                role: "region",
                when: "A generic landmark area that needs a label.",
                example: "A section with aria-label like 'Pricing' or 'FAQ'.",
            },
            {
                role: "search",
                when: "A search area (often a form).",
                example: "Search bar container region.",
            },
        ];
    }, []);

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
                    <FiMapPin />
                </span>

                <span className="title">Document Landmarks</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What are landmarks</h3>
                    <p className="p">
                        Landmarks are important regions of a page that help
                        users navigate quickly, especially screen reader users.
                        A screen reader can jump directly to landmarks like
                        navigation, main content, or footer. Good landmarks make
                        a page feel organized and predictable.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Semantic mapping</h3>
                    <p className="p">
                        Many semantic HTML tags automatically map to ARIA
                        landmark roles. This means you often do not need to add
                        ARIA roles manually. Use semantic tags first, then use
                        ARIA only when you need extra meaning or labeling.
                    </p>

                    <div className="callout">
                        <div className="calloutIcon">
                            <FiInfo />
                        </div>
                        <div className="calloutText">
                            <div className="calloutTitle">Rule of thumb</div>
                            <div className="calloutSub">
                                Prefer semantic HTML. Add ARIA only when you
                                cannot express the meaning using HTML alone.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        Common semantic tags and their landmark roles
                    </h3>

                    <div className="table">
                        <div className="tHead">
                            <div className="cell tag">
                                <FiTag /> Tag
                            </div>
                            <div className="cell role">
                                <FiLayers /> ARIA role
                            </div>
                            <div className="cell use">
                                <FiEye /> When to use
                            </div>
                        </div>

                        <div className="tBody">
                            {landmarks.map((x) => (
                                <div
                                    className="tRow"
                                    key={`${x.tag}-${x.role}`}
                                >
                                    <div className="cell tag">
                                        <span className="pill mono">
                                            {x.tag}
                                        </span>
                                    </div>
                                    <div className="cell role">
                                        <span className="pill">{x.role}</span>
                                    </div>
                                    <div className="cell use">
                                        <div className="useText">{x.use}</div>
                                        <div className="note">
                                            <FiAlertTriangle /> {x.note}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">ARIA roles</h3>
                    <p className="p">
                        ARIA roles describe what an element is. Landmarks are a
                        special set of roles that describe page regions. If you
                        use semantic tags, roles are often implied
                        automatically. Add an explicit role only when needed.
                    </p>

                    <div className="roleGrid">
                        {ariaRoles.map((r) => (
                            <div className="roleCard" key={r.role}>
                                <div className="roleTop">
                                    <span className="roleIcon">
                                        <FiCheckCircle />
                                    </span>
                                    <span className="roleName">{r.role}</span>
                                </div>
                                <div className="roleWhen">{r.when}</div>
                                <div className="roleExample">
                                    Example: {r.example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Beginner checklist</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use <span className="mono">header</span>,{" "}
                            <span className="mono">nav</span>,{" "}
                            <span className="mono">main</span>,{" "}
                            <span className="mono">footer</span> first.
                        </li>
                        <li>
                            <span className="dot" />
                            Keep exactly one <span className="mono">
                                main
                            </span>{" "}
                            on a page.
                        </li>
                        <li>
                            <span className="dot" />
                            If you have multiple navs, label them with{" "}
                            <span className="mono">aria-label</span> or{" "}
                            <span className="mono">aria-labelledby</span>.
                        </li>
                        <li>
                            <span className="dot" />
                            Do not add ARIA roles when HTML already provides the
                            meaning.
                        </li>
                        <li>
                            <span className="dot" />
                            For a <span className="mono">section</span> to be a
                            real landmark, it must have an accessible name.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Tiny example (mental model)</h3>

                    <div className="codeBlock">
                        <div className="codeLine">
                            <span className="mono">&lt;header&gt;</span> site
                            header <span className="muted">(banner)</span>
                        </div>
                        <div className="codeLine">
                            <span className="mono">&lt;nav&gt;</span> main menu{" "}
                            <span className="muted">(navigation)</span>
                        </div>
                        <div className="codeLine">
                            <span className="mono">&lt;main&gt;</span> page
                            content <span className="muted">(main)</span>
                        </div>
                        <div className="codeLine">
                            <span className="mono">&lt;aside&gt;</span> sidebar{" "}
                            <span className="muted">(complementary)</span>
                        </div>
                        <div className="codeLine">
                            <span className="mono">&lt;footer&gt;</span> footer{" "}
                            <span className="muted">(contentinfo)</span>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DocumentLandmarks;
