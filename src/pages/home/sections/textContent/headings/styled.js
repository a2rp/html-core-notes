import styled from "styled-components";

export const Styled = {
    Section: styled.section`
        padding: 18px 0 26px 0;
        scroll-margin-top: 14px;

        h2 {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 14px;
            margin-top: 14px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        ul {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;

            li {
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
                color: var(--color-text-muted);
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            overflow: auto;
            font-size: 12px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }

        .endLine {
            margin-top: 14px;
            color: var(--color-text-muted);
            font-size: 12px;
            border-top: 1px solid var(--color-border);
            padding-top: 12px;
        }
    `,
};
