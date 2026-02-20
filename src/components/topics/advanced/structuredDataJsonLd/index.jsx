// index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiInfo,
    FiCheckCircle,
    FiAlertTriangle,
    FiSearch,
} from "react-icons/fi";

const StructuredDataJsonLd = () => {
    const [open, setOpen] = useState(false);

    const examples = useMemo(() => {
        const siteName = "html-core-notes";
        const siteUrl = "https://example.com/html-core-notes";
        const pageUrl = "https://example.com/html-core-notes/about";

        const orgJson = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            logo: "https://example.com/images/logo.png",
        };

        const articleJson = {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Structured Data in HTML (JSON-LD Basics)",
            description:
                "A beginner friendly explanation of structured data and JSON-LD with practical examples.",
            author: {
                "@type": "Person",
                name: "Ashish Ranjan",
            },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: pageUrl,
            publisher: {
                "@type": "Organization",
                name: siteName,
                logo: {
                    "@type": "ImageObject",
                    url: "https://example.com/images/logo.png",
                },
            },
        };

        const faqJson = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is JSON-LD?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "JSON-LD is a JSON format used to describe structured data for search engines and other tools.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Where do I put JSON-LD in HTML?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Usually inside a script tag with type='application/ld+json', often placed in the head or near the end of body.",
                    },
                },
            ],
        };

        const toPretty = (obj) => JSON.stringify(obj, null, 2);

        return {
            org: toPretty(orgJson),
            article: toPretty(articleJson),
            faq: toPretty(faqJson),
        };
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
                    <FiSearch />
                </span>

                <span className="title">Structured Data</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is structured data</h3>
                    <p className="p">
                        Structured data is extra information you attach to a web
                        page so machines can understand it clearly. Humans can
                        read a page and guess what it is, but search engines
                        prefer explicit signals like "this page is an article"
                        or "this is an organization" or "these are FAQs".
                    </p>

                    <p className="p">
                        When structured data is correct, it can help search
                        engines present better results. It does not guarantee
                        any special display, but it improves clarity and reduces
                        ambiguity.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">JSON-LD basics</h3>
                    <p className="p">
                        JSON-LD stands for JavaScript Object Notation for Linked
                        Data. It is the most common way to add structured data.
                        You place a JSON object inside a script tag with type
                        "application/ld+json". The browser ignores it for UI,
                        but crawlers can read it.
                    </p>

                    <div className="callouts">
                        <div className="callout">
                            <span className="calloutIcon">
                                <FiInfo />
                            </span>
                            <div className="calloutText">
                                <div className="calloutTitle">
                                    Where to put it
                                </div>
                                <div className="calloutSub">
                                    Put the script in head or near the end of
                                    body. Head is common for site wide metadata.
                                </div>
                            </div>
                        </div>

                        <div className="callout">
                            <span className="calloutIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="calloutText">
                                <div className="calloutTitle">
                                    Keep it consistent
                                </div>
                                <div className="calloutSub">
                                    The JSON-LD values should match what your
                                    page actually shows.
                                </div>
                            </div>
                        </div>

                        <div className="callout warn">
                            <span className="calloutIcon">
                                <FiAlertTriangle />
                            </span>
                            <div className="calloutText">
                                <div className="calloutTitle">Do not spam</div>
                                <div className="calloutSub">
                                    Do not add fake ratings, fake FAQs, or
                                    content not visible on the page.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Core fields you will see often</h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">@context</span> sets the
                            vocabulary, usually https://schema.org
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">@type</span> tells the
                            content type like Article, Organization, Product,
                            FAQPage
                        </li>
                        <li>
                            <span className="dot" />
                            Fields depend on the type, like{" "}
                            <span className="mono">headline</span>,{" "}
                            <span className="mono">author</span>,{" "}
                            <span className="mono">datePublished</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">Example 1: Organization JSON-LD</h3>
                    <p className="p">
                        This is a simple way to describe your website or brand.
                        Update the name, url, and logo.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <span className="codeTitle">Organization</span>
                        </div>

                        <pre className="pre">
                            <code>{`<script type="application/ld+json">
${examples.org}
</script>`}</code>
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Example 2: Article JSON-LD</h3>
                    <p className="p">
                        Use Article for blog posts, notes pages, documentation
                        pages, and long content. Keep dates and titles real.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <span className="codeTitle">Article</span>
                        </div>

                        <pre className="pre">
                            <code>{`<script type="application/ld+json">
${examples.article}
</script>`}</code>
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Example 3: FAQPage JSON-LD</h3>
                    <p className="p">
                        If your page has real FAQs visible to users, you can
                        describe them as a FAQPage.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            <span className="codeTitle">FAQPage</span>
                        </div>

                        <pre className="pre">
                            <code>{`<script type="application/ld+json">
${examples.faq}
</script>`}</code>
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Checklist</h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Use{" "}
                            <span className="mono">
                                type="application/ld+json"
                            </span>
                        </li>
                        <li>
                            <span className="dot" />
                            Keep values consistent with page content
                        </li>
                        <li>
                            <span className="dot" />
                            Start small, then add more types as needed
                        </li>
                        <li>
                            <span className="dot" />
                            Prefer valid Schema.org types and fields
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StructuredDataJsonLd;
