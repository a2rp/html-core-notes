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
            margin-top: 8px;
        }

        ul {
            margin-top: 8px;
            padding-left: 18px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        pre {
            margin-top: 10px;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            overflow: auto;
            font-size: 13px;
            line-height: 1.55;
        }

        code {
            font-family: ui-monospace, monospace;
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
