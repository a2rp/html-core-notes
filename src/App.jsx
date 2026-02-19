// App.jsx
import React, { useEffect, useState } from "react";
import { Styled } from "./App.styled";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

const THEME_KEY = "htmlCoreNotesTheme";
const NAV_KEY = "htmlCoreNotesActiveNav";

const App = () => {
    const [theme, setTheme] = useState("dark");
    const [activeNav, setActiveNav] = useState("");

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
            setActiveNav(initial);

            // keep it in view inside side panel
            requestAnimationFrame(() => {
                const link = document.querySelector(
                    `.sideNav a[href="${initial}"]`,
                );
                if (link) {
                    link.scrollIntoView({ block: "center" });
                }
            });
        }
    }, []);

    // keep active in sync when user navigates via browser hash changes
    useEffect(() => {
        const onHashChange = () => {
            const h = window.location.hash || "";
            if (!h) return;

            setActiveNav(h);
            try {
                localStorage.setItem(NAV_KEY, h);
            } catch {
                // ignore
            }

            requestAnimationFrame(() => {
                const link = document.querySelector(`.sideNav a[href="${h}"]`);
                if (link) link.scrollIntoView({ block: "center" });
            });
        };

        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const handleNavClick = (e, hash) => {
        // keep default anchor behavior, but also store + highlight + ensure in view
        setActiveNav(hash);
        try {
            localStorage.setItem(NAV_KEY, hash);
        } catch {
            // ignore
        }

        requestAnimationFrame(() => {
            const link = document.querySelector(`.sideNav a[href="${hash}"]`);
            if (link) link.scrollIntoView({ block: "center" });
        });
    };

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
                                        handleNavClick(e, "#doctype")
                                    }
                                >
                                    Doctype & html
                                </a>

                                <a
                                    href="#head"
                                    className={
                                        activeNav === "#head" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#head")}
                                >
                                    Head & Meta
                                </a>

                                <a
                                    href="#body"
                                    className={
                                        activeNav === "#body" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#body")}
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
                                        handleNavClick(e, "#semantic")
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
                                        handleNavClick(e, "#block-inline")
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
                                        handleNavClick(e, "#attributes")
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
                                        handleNavClick(e, "#headings")
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
                                        handleNavClick(e, "#paragraphs")
                                    }
                                >
                                    Paragraphs
                                </a>

                                <a
                                    href="#lists"
                                    className={
                                        activeNav === "#lists" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#lists")}
                                >
                                    Lists
                                </a>

                                <a
                                    href="#links"
                                    className={
                                        activeNav === "#links" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#links")}
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
                                        handleNavClick(e, "#images")
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
                                        handleNavClick(e, "#tables")
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
                                    onClick={(e) => handleNavClick(e, "#forms")}
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
                                        handleNavClick(e, "#inputs")
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
                                        handleNavClick(e, "#textarea")
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
                                        handleNavClick(e, "#select")
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
                                        handleNavClick(e, "#validation")
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
                                    onClick={(e) => handleNavClick(e, "#audio")}
                                >
                                    Audio
                                </a>

                                <a
                                    href="#video"
                                    className={
                                        activeNav === "#video" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#video")}
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
                                        handleNavClick(e, "#iframe")
                                    }
                                >
                                    Iframe
                                </a>

                                <a
                                    href="#svg"
                                    className={
                                        activeNav === "#svg" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#svg")}
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
                                        handleNavClick(e, "#canvas")
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
                                        handleNavClick(e, "#accessibility")
                                    }
                                >
                                    Accessibility
                                </a>

                                <a
                                    href="#seo"
                                    className={
                                        activeNav === "#seo" ? "isActive" : ""
                                    }
                                    onClick={(e) => handleNavClick(e, "#seo")}
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
                                        handleNavClick(e, "#performance")
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
                                        handleNavClick(e, "#best-practices")
                                    }
                                >
                                    Best Practices
                                </a>
                            </div>
                        </nav>
                    </div>
                </aside>

                <section className="contentFooterWrapper">
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
