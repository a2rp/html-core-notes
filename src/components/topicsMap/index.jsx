// index.jsx
import React, { useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiSearch,
    FiX,
    FiLayers,
    FiBookOpen,
} from "react-icons/fi";

const TopicsMap = () => {
    const rootRef = useRef(null);
    const [query, setQuery] = useState("");
    const [openKeys, setOpenKeys] = useState(() => new Set());

    const data = useMemo(() => {
        return [
            {
                key: "foundation",
                title: "Foundation",
                icon: <FiLayers />,
                items: [
                    {
                        title: "Introduction",
                        sub: [
                            "What is HTML",
                            "How the web works",
                            "Client server model",
                            "HTTP basics",
                            "Browser parsing pipeline",
                            "Rendering flow overview",
                        ],
                    },
                    {
                        title: "Basic Document Structure",
                        sub: [
                            "Doctype",
                            "html element",
                            "head and body",
                            "lang attribute",
                            "dir attribute",
                            "Character encoding",
                            "Viewport meta",
                            "Favicon",
                            "Title element",
                        ],
                    },
                    {
                        title: "HTML Syntax Rules",
                        sub: [
                            "Tags",
                            "Elements",
                            "Attributes",
                            "Boolean attributes",
                            "Global attributes",
                            "Data attributes",
                            "Comments",
                            "Case sensitivity",
                            "Self closing tags myth",
                            "Void elements",
                        ],
                    },
                    {
                        title: "Content Model",
                        sub: [
                            "Block vs inline",
                            "Flow content",
                            "Phrasing content",
                            "Sectioning content",
                            "Heading content",
                            "Embedded content",
                            "Interactive content",
                            "Metadata content",
                            "Transparent content model",
                        ],
                    },
                ],
            },
            {
                key: "textContent",
                title: "Text Content",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Headings",
                        sub: [
                            "h1 to h6",
                            "Document outline theory",
                            "Accessibility considerations",
                        ],
                    },
                    {
                        title: "Paragraph and Text Semantics",
                        sub: [
                            "p",
                            "br",
                            "hr",
                            "pre",
                            "blockquote",
                            "q",
                            "cite",
                            "abbr",
                            "dfn",
                            "time",
                            "mark",
                            "small",
                            "sub",
                            "sup",
                            "strong",
                            "em",
                            "b",
                            "i",
                            "u",
                            "s",
                            "code",
                            "kbd",
                            "samp",
                            "var",
                            "span",
                        ],
                    },
                    {
                        title: "Lists",
                        sub: [
                            "ul",
                            "ol",
                            "li",
                            "dl",
                            "dt",
                            "dd",
                            "Nested lists",
                            "Reversed lists",
                            "Start attribute",
                            "Type attribute",
                        ],
                    },
                ],
            },
            {
                key: "linksNavigation",
                title: "Links and Navigation",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Anchors",
                        sub: [
                            "a tag",
                            "href",
                            "target",
                            "rel",
                            "Download attribute",
                            "Mailto",
                            "Tel links",
                            "Hash navigation",
                            "External link security",
                        ],
                    },
                    {
                        title: "Navigation",
                        sub: [
                            "nav",
                            "Breadcrumb structure",
                            "Pagination patterns",
                        ],
                    },
                ],
            },
            {
                key: "mediaEmbedded",
                title: "Media and Embedded Content",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Images",
                        sub: [
                            "img",
                            "alt",
                            "width and height",
                            "Loading attribute",
                            "Decoding attribute",
                            "Srcset",
                            "Sizes",
                            "Picture element",
                            "Figure and figcaption",
                        ],
                    },
                    {
                        title: "Audio and Video",
                        sub: [
                            "audio",
                            "video",
                            "controls",
                            "autoplay rules",
                            "muted requirement",
                            "preload",
                            "track",
                            "captions and subtitles",
                        ],
                    },
                    {
                        title: "Embedded",
                        sub: [
                            "iframe",
                            "sandbox",
                            "allow attribute",
                            "embed",
                            "object",
                            "param",
                        ],
                    },
                    {
                        title: "SVG integration",
                        sub: [
                            "Inline SVG",
                            "SVG vs img",
                            "Accessibility in SVG",
                        ],
                    },
                    { title: "Canvas", sub: ["canvas element basics"] },
                ],
            },
            {
                key: "structureSemantics",
                title: "Structure and Semantics",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Sectioning Elements",
                        sub: [
                            "header",
                            "footer",
                            "main",
                            "section",
                            "article",
                            "aside",
                        ],
                    },
                    {
                        title: "Document Landmarks",
                        sub: ["ARIA roles", "Semantic mapping"],
                    },
                    {
                        title: "Details and Disclosure",
                        sub: ["details", "summary"],
                    },
                    {
                        title: "Dialog",
                        sub: ["dialog element", "Modal behavior"],
                    },
                ],
            },
            {
                key: "tables",
                title: "Tables",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Table Structure",
                        sub: [
                            "table",
                            "thead",
                            "tbody",
                            "tfoot",
                            "tr",
                            "th",
                            "td",
                            "scope attribute",
                            "caption",
                            "colgroup",
                            "col",
                            "rowspan",
                            "colspan",
                            "Accessible tables",
                        ],
                    },
                ],
            },
            {
                key: "forms",
                title: "Forms",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Form Basics",
                        sub: [
                            "form",
                            "action",
                            "method",
                            "GET vs POST",
                            "enctype",
                        ],
                    },
                    {
                        title: "Input Types",
                        sub: [
                            "text",
                            "password",
                            "email",
                            "url",
                            "number",
                            "range",
                            "search",
                            "tel",
                            "date",
                            "time",
                            "datetime-local",
                            "month",
                            "week",
                            "color",
                            "file",
                            "checkbox",
                            "radio",
                            "hidden",
                            "submit",
                            "reset",
                            "button",
                        ],
                    },
                    {
                        title: "Form Controls",
                        sub: [
                            "label",
                            "fieldset",
                            "legend",
                            "textarea",
                            "select",
                            "option",
                            "optgroup",
                            "datalist",
                            "output",
                            "progress",
                            "meter",
                        ],
                    },
                    {
                        title: "Validation",
                        sub: [
                            "required",
                            "pattern",
                            "minlength",
                            "maxlength",
                            "step",
                            "min",
                            "max",
                            "Constraint validation API",
                            "Custom validation",
                        ],
                    },
                    {
                        title: "Accessibility in Forms",
                        sub: [
                            "Label association",
                            "aria-describedby",
                            "Error messaging patterns",
                        ],
                    },
                ],
            },
            {
                key: "metadata",
                title: "Metadata",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Meta Tags",
                        sub: [
                            "charset",
                            "viewport",
                            "description",
                            "keywords",
                            "author",
                            "refresh",
                            "http-equiv",
                        ],
                    },
                    {
                        title: "Link Element",
                        sub: [
                            "Stylesheets",
                            "Icons",
                            "Preload",
                            "Prefetch",
                            "Preconnect",
                        ],
                    },
                    {
                        title: "Base Element",
                        sub: ["Base href", "Base target"],
                    },
                ],
            },
            {
                key: "scriptsPerformance",
                title: "Scripts and Performance",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Script Element",
                        sub: [
                            "Inline vs external",
                            "Defer",
                            "Async",
                            "Module",
                            "Nomodule",
                            "Integrity attribute",
                            "crossorigin",
                        ],
                    },
                    {
                        title: "Performance Attributes",
                        sub: [
                            "Loading lazy",
                            "Decoding async",
                            "Fetchpriority",
                        ],
                    },
                ],
            },
            {
                key: "accessibility",
                title: "Accessibility",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "ARIA Basics",
                        sub: [
                            "aria-label",
                            "aria-labelledby",
                            "aria-describedby",
                            "aria-hidden",
                            "role attribute",
                        ],
                    },
                    {
                        title: "Semantic HTML vs div soup",
                        sub: ["Why semantics matter", "Screen reader behavior"],
                    },
                    {
                        title: "Tab order",
                        sub: ["tabindex", "Focus management"],
                    },
                ],
            },
            {
                key: "advanced",
                title: "Advanced",
                icon: <FiBookOpen />,
                items: [
                    {
                        title: "Microdata",
                        sub: ["itemscope", "itemtype", "itemprop"],
                    },
                    { title: "Structured Data", sub: ["JSON-LD basics"] },
                    {
                        title: "Custom Data Attributes",
                        sub: ["data attributes", "dataset API concept"],
                    },
                    {
                        title: "Internationalization",
                        sub: ["lang switching", "dir rtl", "Bidi isolation"],
                    },
                    {
                        title: "Deprecated Elements",
                        sub: [
                            "font",
                            "center",
                            "marquee",
                            "frameset",
                            "applet",
                        ],
                    },
                    {
                        title: "HTML Living Standard",
                        sub: ["WHATWG vs W3C", "Why spec matters"],
                    },
                    {
                        title: "SEO fundamentals",
                        sub: [
                            "Semantic headings",
                            "Meta description",
                            "Open Graph basics",
                        ],
                    },
                    {
                        title: "Security basics",
                        sub: ["XSS concept", "rel noopener", "Sandbox iframe"],
                    },
                ],
            },
        ];
    }, []);

    const filteredData = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return data;

        const includes = (s) => String(s).toLowerCase().includes(q);

        return data
            .map((sec) => {
                const matchedItems = sec.items
                    .map((it) => {
                        const titleMatch = includes(it.title);
                        const matchedSubs = (it.sub || []).filter((x) =>
                            includes(x),
                        );

                        if (titleMatch) return it;
                        if (matchedSubs.length) {
                            return { ...it, sub: matchedSubs };
                        }
                        return null;
                    })
                    .filter(Boolean);

                const sectionMatch = includes(sec.title);
                if (sectionMatch) return sec;
                if (matchedItems.length) return { ...sec, items: matchedItems };
                return null;
            })
            .filter(Boolean);
    }, [data, query]);

    const counts = useMemo(() => {
        let sections = filteredData.length;
        let topics = 0;
        let bullets = 0;

        filteredData.forEach((sec) => {
            topics += sec.items.length;
            sec.items.forEach((it) => {
                bullets += (it.sub || []).length;
            });
        });

        return { sections, topics, bullets };
    }, [filteredData]);

    const toggleSection = (key) => {
        setOpenKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    const expandAll = () => {
        const next = new Set();
        filteredData.forEach((x) => next.add(x.key));
        setOpenKeys(next);
    };

    const collapseAll = () => {
        setOpenKeys(new Set());
    };

    const clearSearch = () => setQuery("");

    return (
        <Styled.Wrapper ref={rootRef}>
            <div className="container">
                <div className="top">
                    <div className="titleRow">
                        <h2 className="title">HTML Topic Map</h2>
                        <div className="chips">
                            <div className="chip">
                                {counts.sections} sections
                            </div>
                            <div className="chip">{counts.topics} topics</div>
                            <div className="chip">{counts.bullets} bullets</div>
                        </div>
                    </div>

                    <p className="sub">
                        A structured list of topics and subtopics for
                        html-core-notes. Use search to filter and expand
                        sections as needed.
                    </p>

                    <div className="controls">
                        <div className="search">
                            <span className="searchIcon">
                                <FiSearch />
                            </span>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search topics like 'forms', 'meta', 'iframe'..."
                                aria-label="Search topics"
                            />
                            {query.trim() && (
                                <button
                                    type="button"
                                    className="clearBtn"
                                    onClick={clearSearch}
                                    aria-label="Clear search"
                                    title="Clear"
                                >
                                    <FiX />
                                </button>
                            )}
                        </div>

                        <div className="btnRow">
                            <button
                                type="button"
                                className="btn"
                                onClick={expandAll}
                            >
                                Expand all
                            </button>
                            <button
                                type="button"
                                className="btn"
                                onClick={collapseAll}
                            >
                                Collapse all
                            </button>
                        </div>
                    </div>
                </div>

                <div className="list">
                    {filteredData.map((section) => {
                        const isOpen = openKeys.has(section.key);

                        return (
                            <div className="section" key={section.key}>
                                <button
                                    type="button"
                                    className="sectionHeader"
                                    onClick={() => toggleSection(section.key)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="chev">
                                        {isOpen ? (
                                            <FiChevronDown />
                                        ) : (
                                            <FiChevronRight />
                                        )}
                                    </span>

                                    <span className="secIcon">
                                        {section.icon}
                                    </span>

                                    <span className="secTitle">
                                        {section.title}
                                    </span>

                                    <span className="secMeta">
                                        {section.items.length} topics
                                    </span>
                                </button>

                                <div
                                    className={`sectionBody ${
                                        isOpen ? "open" : ""
                                    }`}
                                >
                                    {section.items.map((topic, idx) => {
                                        return (
                                            <div
                                                className="topic"
                                                key={`${section.key}-${idx}`}
                                            >
                                                <div className="topicTitle">
                                                    {topic.title}
                                                </div>

                                                <ul className="bullets">
                                                    {(topic.sub || []).map(
                                                        (b, i) => (
                                                            <li
                                                                className="bullet"
                                                                key={`${section.key}-${idx}-${i}`}
                                                            >
                                                                {b}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    {!filteredData.length && (
                        <div className="empty">
                            <div className="emptyTitle">No matches</div>
                            <div className="emptySub">
                                Try searching for keywords like "forms", "meta",
                                "table", "aria", or "script".
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TopicsMap;
