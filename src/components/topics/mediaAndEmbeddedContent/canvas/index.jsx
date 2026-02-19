// src/components/mediaAndEmbeddedContent/canvas/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiEdit3,
    FiRotateCw,
    FiPlay,
    FiPause,
    FiInfo,
} from "react-icons/fi";

const CanvasBasics = () => {
    const [open, setOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(true);

    const codeSample = useMemo(() => {
        return `<!-- HTML -->
<canvas id="demo" width="420" height="220"></canvas>

<script>
  const canvas = document.getElementById("demo");
  const ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // circle
  ctx.beginPath();
  ctx.arc(210, 110, 55, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();

  // text
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("Canvas basics", 20, 30);
</script>`;
    }, []);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiEdit3 />
                </span>

                <span className="title">Canvas</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is a canvas</h3>
                    <p className="p">
                        The <span className="mono">canvas</span> element is a
                        drawing surface. It does not contain real HTML elements
                        inside it. Instead, you draw pixels using JavaScript.
                        This is useful for charts, games, animations, custom
                        visual effects, and small interactive demos.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">How it works</h3>
                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Create a canvas with a fixed width and height
                        </li>
                        <li>
                            <span className="dot" />
                            Get a drawing context:
                            <span className="mono">getContext("2d")</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Use the context to draw shapes, text, and images
                        </li>
                        <li>
                            <span className="dot" />
                            For animations, clear the canvas and redraw inside a
                            loop (usually{" "}
                            <span className="mono">requestAnimationFrame</span>)
                        </li>
                    </ul>
                </div>

                <CanvasDemo isRunning={isRunning} />

                <div className="section">
                    <h3 className="h3">Mini controls</h3>

                    <div className="btnRow">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setIsRunning(true)}
                            disabled={isRunning}
                        >
                            <span className="btnIcon">
                                <FiPlay />
                            </span>
                            Play
                        </button>

                        <button
                            type="button"
                            className="btn"
                            onClick={() => setIsRunning(false)}
                            disabled={!isRunning}
                        >
                            <span className="btnIcon">
                                <FiPause />
                            </span>
                            Pause
                        </button>

                        <button
                            type="button"
                            className="btn"
                            onClick={() => {
                                // Force remount demo by toggling open quickly is not ideal.
                                // We keep it simple: a custom event is overkill.
                                // Instead, user can pause + play. Demo restarts naturally.
                                setIsRunning(false);
                                setTimeout(() => setIsRunning(true), 80);
                            }}
                        >
                            <span className="btnIcon">
                                <FiRotateCw />
                            </span>
                            Restart
                        </button>
                    </div>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <p className="noteText">
                            Canvas is pixel based. If you resize the canvas
                            using CSS only, drawings can look blurry. Prefer
                            setting
                            <span className="mono">width</span> and
                            <span className="mono">height</span> attributes on
                            the element, and handle high DPI scaling if needed.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Basic example code</h3>
                    <pre className="code">
                        <code>{codeSample}</code>
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

const CanvasDemo = ({ isRunning }) => {
    const canvasRef = React.useRef(null);
    const rafRef = React.useRef(0);
    const tRef = React.useRef(0);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;

        const draw = () => {
            // Background
            ctx.fillStyle = "#0d0d0d";
            ctx.fillRect(0, 0, w, h);

            // Title
            ctx.fillStyle = "#ffffff";
            ctx.font = "14px Verdana";
            ctx.fillText("Canvas demo: moving dot", 14, 24);

            // Guide line
            ctx.globalAlpha = 0.35;
            ctx.beginPath();
            ctx.moveTo(14, h / 2);
            ctx.lineTo(w - 14, h / 2);
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;

            // Animation values
            const t = tRef.current;
            const x = 14 + ((Math.sin(t) + 1) / 2) * (w - 28);
            const y = h / 2 + Math.cos(t * 1.2) * 36;

            // Dot
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();

            // Label
            ctx.fillStyle = "#d0d0d0";
            ctx.font = "12px Verdana";
            ctx.fillText("requestAnimationFrame loop", 14, h - 14);
        };

        const tick = () => {
            tRef.current += 0.04;
            draw();
            rafRef.current = window.requestAnimationFrame(tick);
        };

        const stop = () => {
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
            rafRef.current = 0;
        };

        if (isRunning) {
            stop();
            tick();
        } else {
            stop();
            draw();
        }

        return () => stop();
    }, [isRunning]);

    return (
        <div className="section">
            <h3 className="h3">Canvas element basics</h3>
            <p className="p">
                Below is a small demo. We draw a background, some text, and a
                moving dot. The motion uses{" "}
                <span className="mono">requestAnimationFrame</span>.
            </p>

            <div className="demoBox">
                <canvas
                    ref={canvasRef}
                    width={520}
                    height={220}
                    className="canvas"
                />
            </div>
        </div>
    );
};

export default CanvasBasics;
