// index.jsx
import React from "react";
import { Styled } from "./styled";

const AboutHtml = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <h2 className="heading">About HTML</h2>

                <p>
                    HTML stands for HyperText Markup Language. It is the
                    structural foundation of the web. Every website,
                    application, and interface you see begins with HTML. It
                    defines structure and meaning, not styling or behavior.
                    Headings, paragraphs, lists, forms, tables, media, and
                    semantic regions are all described using HTML.
                </p>

                <p>
                    A strong understanding of HTML makes CSS cleaner and
                    JavaScript more predictable. Good HTML improves
                    accessibility, performance, SEO, and maintainability. It is
                    not just markup. It is the logical blueprint of every web
                    interface.
                </p>

                <p>
                    The html-core-notes project is designed as a focused
                    revision system. It removes noise and organizes concepts in
                    a structured and practical way. The goal is fast recall,
                    semantic clarity, and strong fundamentals.
                </p>

                <div className="meta">
                    <span className="metaLabel">Last updated:</span>
                    <span className="metaValue">{formattedDateTime}</span>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutHtml;
