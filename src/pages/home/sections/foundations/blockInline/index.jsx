import React from "react";
import { Styled } from "./styled";

const BlockInline = () => {
    return (
        <Styled.Wrapper id="block-inline">
            <div className="top">
                <h2 className="title">Block vs Inline</h2>
                <p className="sub">
                    HTML elements fall into two primary display categories -
                    block level and inline. Understanding this behavior is
                    fundamental to layout control.
                </p>
            </div>

            <div className="grid">
                <div className="card">
                    <h3 className="h3">Block elements</h3>

                    <ul className="list">
                        <li>Start on a new line</li>
                        <li>Default width is 100 percent of the parent</li>
                        <li>Width and height can be explicitly set</li>
                        <li>Vertical margins work as expected</li>
                    </ul>

                    <div className="pillRow">
                        <span className="pill">div</span>
                        <span className="pill">p</span>
                        <span className="pill">h1 - h6</span>
                        <span className="pill">section</span>
                        <span className="pill">article</span>
                        <span className="pill">header</span>
                        <span className="pill">footer</span>
                    </div>
                </div>

                <div className="card">
                    <h3 className="h3">Inline elements</h3>

                    <ul className="list">
                        <li>Do not start on a new line</li>
                        <li>Take only as much width as their content</li>
                        <li>Width and height cannot be applied directly</li>
                        <li>Vertical margins have limited effect</li>
                    </ul>

                    <div className="pillRow">
                        <span className="pill">span</span>
                        <span className="pill">a</span>
                        <span className="pill">strong</span>
                        <span className="pill">em</span>
                        <span className="pill">img</span>
                        <span className="pill">label</span>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Visual example</h3>

                <div className="example">
                    <div className="blockExample">Block 1</div>
                    <div className="blockExample">Block 2</div>

                    <span className="inlineExample">Inline 1</span>
                    <span className="inlineExample">Inline 2</span>
                </div>

                <pre className="pre">{`<div>Block 1</div>
<div>Block 2</div>

<span>Inline 1</span>
<span>Inline 2</span>`}</pre>
            </div>

            <div className="card">
                <h3 className="h3">display property</h3>

                <p className="text">
                    The CSS <span className="mono">display</span> property
                    controls how an element behaves in the layout.
                </p>

                <pre className="pre">{`div {
  display: inline;
}

span {
  display: block;
}

div {
  display: inline-block;
}`}</pre>

                <ul className="list">
                    <li>block - full width, new line</li>
                    <li>inline - content width, same line</li>
                    <li>
                        inline-block - behaves like inline but allows width and
                        height
                    </li>
                </ul>
            </div>

            <div className="card">
                <h3 className="h3">Common mistakes</h3>

                <ul className="list">
                    <li>
                        Setting height on inline elements and expecting it to
                        work
                    </li>
                    <li>Relying on vertical margins for inline elements</li>
                    <li>
                        Mixing block and inline elements without understanding
                        layout flow
                    </li>
                </ul>
            </div>

            <div className="endLine">
                Most layout issues come from misunderstanding display behavior.
            </div>
        </Styled.Wrapper>
    );
};

export default BlockInline;
