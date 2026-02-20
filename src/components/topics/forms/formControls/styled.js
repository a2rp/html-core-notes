// styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 16px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;
        margin-bottom: 5px;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 26px;
            height: 26px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            background: var(--color-bg);
        }

        .icon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 14px;
            border-top: 1px dashed var(--color-border-light);
        }

        .section:first-child {
            border-top: none;
        }

        h3 {
            margin-bottom: 6px;
        }

        p {
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        fieldset {
            border: 1px solid var(--color-border);
            padding: 8px;
            border-radius: 8px;
        }

        legend {
            padding: 0 6px;
        }
    `,
};
