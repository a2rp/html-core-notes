import styled from "styled-components";

export const Styled = {
    Section: styled.section`
        padding: 40px 0;
        border-bottom: 1px solid var(--color-border);

        h2 {
            font-size: 28px;
            margin-bottom: 24px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .block {
            margin-bottom: 28px;
        }

        p {
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        ul {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        li {
            margin-bottom: 6px;
        }

        code {
            background: var(--color-surface);
            padding: 3px 6px;
            border-radius: 6px;
            font-size: 13px;
        }

        pre {
            background: var(--color-surface);
            padding: 14px;
            border-radius: 10px;
            overflow-x: auto;
            font-size: 13px;
            border: 1px solid var(--color-border);
            margin-top: 10px;
        }
    `,
};
