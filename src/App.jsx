// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./App.styled";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

const THEME_KEY = "htmlCoreNotesTheme";
const NAV_KEY = "htmlCoreNotesActiveNav";

const SECTION_IDS = [
    "doctype",
    "head",
    "body",
    "semantic",
    "block-inline",
    "attributes",
    "headings",
    "paragraphs",
    "lists",
    "links",
    "images",
    "tables",
    "forms",
    "inputs",
    "textarea",
    "select",
    "validation",
    "audio",
    "video",
    "iframe",
    "svg",
    "canvas",
    "accessibility",
    "seo",
    "performance",
    "best-practices",
];

const App = () => {
    const [theme, setTheme] = useState("dark");
    const [activeNav, setActiveNav] = useState("");
    const contentRef = useRef(null);

    // blocks observer updates while we are doing programmatic smooth scroll
    const lockRef = useRef(false);
    const lockTimerRef = useRef(null);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            const initial =
                saved === "light" || saved === "dark" ? saved : "dark";
            setTheme(initial);
            document.documentElement.setAttribute("data-theme", initial);
        } catch {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // ignore
        }
    }, [theme]);

    const handleThemeChange = (nextTheme) => {
        if (nextTheme !== "light" && nextTheme !== "dark") return;
        setTheme(nextTheme);
    };

    const ensureActiveInSideView = (hash) => {
        requestAnimationFrame(() => {
            const link = document.querySelector(`.sideNav a[href="${hash}"]`);
            if (link) link.scrollIntoView({ block: "center" });
        });
    };

    const scrollToSectionInContent = (id) => {
        const container = contentRef.current;
        const el = document.getElementById(id);

        if (!container || !el) return;

        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        const top = container.scrollTop + (elRect.top - containerRect.top) - 14;

        container.scrollTo({ top, behavior: "smooth" });
    };

    const setActiveAndPersist = (hash) => {
        setActiveNav(hash);
        try {
            localStorage.setItem(NAV_KEY, hash);
        } catch {
            // ignore
        }
        ensureActiveInSideView(hash);
    };

    // init active nav on load
    useEffect(() => {
        const fromHash = window.location.hash || "";
        let initial = fromHash;

        if (!initial) {
            try {
                initial = localStorage.getItem(NAV_KEY) || "";
            } catch {
                initial = "";
            }
        }

        if (initial) {
            setActiveAndPersist(initial);

            const id = initial.replace("#", "");
            requestAnimationFrame(() => {
                scrollToSectionInContent(id);
            });
        }
    }, []);

    // keep active in sync when user navigates via browser hash changes
    useEffect(() => {
        const onHashChange = () => {
            const h = window.location.hash || "";
            if (!h) return;

            setActiveAndPersist(h);

            const id = h.replace("#", "");
            requestAnimationFrame(() => {
                scrollToSectionInContent(id);
            });
        };

        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const handleSideNavClick = (e, id) => {
        e.preventDefault();

        const hash = `#${id}`;

        // lock scroll spy while we do smooth scroll
        lockRef.current = true;
        if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
        lockTimerRef.current = setTimeout(() => {
            lockRef.current = false;
        }, 700);

        setActiveAndPersist(hash);

        scrollToSectionInContent(id);

        try {
            window.history.replaceState(null, "", hash);
        } catch {
            // ignore
        }
    };

    // scroll spy - when section enters view, highlight in side nav
    // scroll spy - manual calculation (more reliable)
    useEffect(() => {
        const container = contentRef.current;
        if (!container) return;

        const onScroll = () => {
            if (!container) return;

            const containerTop = container.getBoundingClientRect().top;

            let currentId = "";

            for (let i = 0; i < SECTION_IDS.length; i++) {
                const id = SECTION_IDS[i];
                const el = document.getElementById(id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();

                // section top crossed header offset area
                if (rect.top - containerTop <= 120) {
                    currentId = id;
                }
            }

            if (!currentId) return;

            const hash = `#${currentId}`;

            setActiveNav((prev) => {
                if (prev === hash) return prev;

                try {
                    localStorage.setItem(NAV_KEY, hash);
                } catch {}

                requestAnimationFrame(() => {
                    const link = document.querySelector(
                        `.sideNav a[href="${hash}"]`,
                    );
                    if (link) link.scrollIntoView({ block: "center" });
                });

                return hash;
            });
        };

        container.addEventListener("scroll", onScroll);

        return () => {
            container.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header theme={theme} onThemeChange={handleThemeChange} />
            </Styled.Header>

            <Styled.Main>
                <aside className="sidePanelWrapper">
                    <div className="sideInner">
                        <nav className="sideNav">
                            <div className="navSection">
                                <div className="navTitle">Foundations</div>

                                <a
                                    href="#doctype"
                                    className={
                                        activeNav === "#doctype"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "doctype")
                                    }
                                >
                                    Doctype & html
                                </a>

                                <a
                                    href="#head"
                                    className={
                                        activeNav === "#head" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "head")
                                    }
                                >
                                    Head & Meta
                                </a>

                                <a
                                    href="#body"
                                    className={
                                        activeNav === "#body" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "body")
                                    }
                                >
                                    Body
                                </a>

                                <a
                                    href="#semantic"
                                    className={
                                        activeNav === "#semantic"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "semantic")
                                    }
                                >
                                    Semantic Tags
                                </a>

                                <a
                                    href="#block-inline"
                                    className={
                                        activeNav === "#block-inline"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "block-inline")
                                    }
                                >
                                    Block vs Inline
                                </a>

                                <a
                                    href="#attributes"
                                    className={
                                        activeNav === "#attributes"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "attributes")
                                    }
                                >
                                    Global Attributes
                                </a>
                            </div>

                            <div className="navSection">
                                <div className="navTitle">Text & Content</div>

                                <a
                                    href="#headings"
                                    className={
                                        activeNav === "#headings"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "headings")
                                    }
                                >
                                    Headings
                                </a>

                                <a
                                    href="#paragraphs"
                                    className={
                                        activeNav === "#paragraphs"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "paragraphs")
                                    }
                                >
                                    Paragraphs
                                </a>

                                <a
                                    href="#lists"
                                    className={
                                        activeNav === "#lists" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "lists")
                                    }
                                >
                                    Lists
                                </a>

                                <a
                                    href="#links"
                                    className={
                                        activeNav === "#links" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "links")
                                    }
                                >
                                    Links
                                </a>

                                <a
                                    href="#images"
                                    className={
                                        activeNav === "#images"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "images")
                                    }
                                >
                                    Images
                                </a>

                                <a
                                    href="#tables"
                                    className={
                                        activeNav === "#tables"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "tables")
                                    }
                                >
                                    Tables
                                </a>
                            </div>

                            <div className="navSection">
                                <div className="navTitle">Forms</div>

                                <a
                                    href="#forms"
                                    className={
                                        activeNav === "#forms" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "forms")
                                    }
                                >
                                    Form Tag
                                </a>

                                <a
                                    href="#inputs"
                                    className={
                                        activeNav === "#inputs"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "inputs")
                                    }
                                >
                                    Input Types
                                </a>

                                <a
                                    href="#textarea"
                                    className={
                                        activeNav === "#textarea"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "textarea")
                                    }
                                >
                                    Textarea
                                </a>

                                <a
                                    href="#select"
                                    className={
                                        activeNav === "#select"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "select")
                                    }
                                >
                                    Select
                                </a>

                                <a
                                    href="#validation"
                                    className={
                                        activeNav === "#validation"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "validation")
                                    }
                                >
                                    Validation
                                </a>
                            </div>

                            <div className="navSection">
                                <div className="navTitle">Media & Embeds</div>

                                <a
                                    href="#audio"
                                    className={
                                        activeNav === "#audio" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "audio")
                                    }
                                >
                                    Audio
                                </a>

                                <a
                                    href="#video"
                                    className={
                                        activeNav === "#video" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "video")
                                    }
                                >
                                    Video
                                </a>

                                <a
                                    href="#iframe"
                                    className={
                                        activeNav === "#iframe"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "iframe")
                                    }
                                >
                                    Iframe
                                </a>

                                <a
                                    href="#svg"
                                    className={
                                        activeNav === "#svg" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "svg")
                                    }
                                >
                                    SVG
                                </a>

                                <a
                                    href="#canvas"
                                    className={
                                        activeNav === "#canvas"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "canvas")
                                    }
                                >
                                    Canvas
                                </a>
                            </div>

                            <div className="navSection">
                                <div className="navTitle">Advanced</div>

                                <a
                                    href="#accessibility"
                                    className={
                                        activeNav === "#accessibility"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "accessibility")
                                    }
                                >
                                    Accessibility
                                </a>

                                <a
                                    href="#seo"
                                    className={
                                        activeNav === "#seo" ? "isActive" : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "seo")
                                    }
                                >
                                    SEO Basics
                                </a>

                                <a
                                    href="#performance"
                                    className={
                                        activeNav === "#performance"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "performance")
                                    }
                                >
                                    Performance
                                </a>

                                <a
                                    href="#best-practices"
                                    className={
                                        activeNav === "#best-practices"
                                            ? "isActive"
                                            : ""
                                    }
                                    onClick={(e) =>
                                        handleSideNavClick(e, "best-practices")
                                    }
                                >
                                    Best Practices
                                </a>
                            </div>
                        </nav>
                    </div>
                </aside>

                <section className="contentFooterWrapper" ref={contentRef}>
                    <div className="contentWrapper">
                        <Home />
                    </div>

                    <div className="footerWrapper">
                        <Footer />
                    </div>
                </section>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
