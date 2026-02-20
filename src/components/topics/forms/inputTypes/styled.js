// forms/inputTypes/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 5px;

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px 4px 14px;
        }

        .p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .list {
            padding: 10px 14px 14px 14px;
            display: grid;
            gap: 12px;
        }

        .item {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .itemTop {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .itemIcon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .itemTitle {
            font-weight: 900;
            letter-spacing: 0.15px;
            margin-bottom: 4px;
            color: var(--color-text-primary);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 14px;
        }

        .itemUse {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .example {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border-light);
            padding-top: 12px;
        }

        .exampleLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 8px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .code {
            margin: 0;
            padding: 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            overflow-x: auto;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .notes {
            margin-top: 12px;
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .notes li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
            margin-top: 6px;
            flex: 0 0 auto;
        }

        .tip {
            margin: 0 14px 14px 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            padding: 14px;
        }

        .tipTitle {
            font-weight: 900;
            margin-bottom: 6px;
            letter-spacing: 0.15px;
        }

        .tipText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }
    `,
};
