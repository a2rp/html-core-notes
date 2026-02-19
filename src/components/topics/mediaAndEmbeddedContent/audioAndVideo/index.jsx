// mediaAndEmbeddedContent/audioAndVideo/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiVideo,
    FiVolume2,
    FiPlay,
    FiPause,
    FiInfo,
    FiCheckCircle,
    FiAlertCircle,
    FiMonitor,
} from "react-icons/fi";

const AudioAndVideo = () => {
    const [open, setOpen] = useState(false);

    const exampleVideo = useMemo(() => {
        return `<video controls width="640">
    <source src="movie.mp4" type="video/mp4" />
    <track
        kind="captions"
        src="captions.vtt"
        srclang="en"
        label="English"
        default
    />
    Sorry, your browser does not support the video tag.
</video>`;
    }, []);

    const exampleAudio = useMemo(() => {
        return `<audio controls>
    <source src="song.mp3" type="audio/mpeg" />
    <source src="song.ogg" type="audio/ogg" />
    Sorry, your browser does not support the audio element.
</audio>`;
    }, []);

    const exampleAutoplay = useMemo(() => {
        return `<video autoplay muted loop playsinline>
    <source src="preview.mp4" type="video/mp4" />
</video>`;
    }, []);

    const examplePreload = useMemo(() => {
        return `<audio controls preload="metadata">
    <source src="podcast.mp3" type="audio/mpeg" />
</audio>`;
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">{open ? <FiPause /> : <FiPlay />}</span>

                <span className="icon">
                    <FiVideo />
                </span>

                <span className="title">Audio and Video</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">audio and video</h3>
                    <p className="p">
                        HTML provides two built-in elements for media:
                        <span className="mono"> audio</span> and
                        <span className="mono"> video</span>. They let you play
                        sound and video without any extra libraries. Most of the
                        time, you will add the
                        <span className="mono"> controls</span> attribute so the
                        user can play, pause, and change volume.
                    </p>

                    <div className="noteRow">
                        <div className="note good">
                            <span className="noteIcon">
                                <FiCheckCircle />
                            </span>
                            <div className="noteText">
                                Use <span className="mono">controls</span> for
                                normal user-facing media
                            </div>
                        </div>

                        <div className="note warn">
                            <span className="noteIcon">
                                <FiAlertCircle />
                            </span>
                            <div className="noteText">
                                Autoplay is restricted by browsers, explain
                                below
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">audio</h3>
                    <p className="p">
                        The <span className="mono">audio</span> element plays
                        sound. You can provide multiple sources for better
                        browser support. The browser will pick the first format
                        it can play.
                    </p>

                    <pre className="code">
                        <code>{exampleAudio}</code>
                    </pre>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Put <span className="mono">controls</span> for UI
                        </li>
                        <li>
                            <span className="dot" />
                            Use multiple <span className="mono">
                                source
                            </span>{" "}
                            files if needed
                        </li>
                        <li>
                            <span className="dot" />
                            Add a fallback text for older browsers
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">video</h3>
                    <p className="p">
                        The <span className="mono">video</span> element plays
                        video. Like audio, you usually provide one or more{" "}
                        <span className="mono">source</span> tags. You can also
                        add captions using the{" "}
                        <span className="mono">track</span> element.
                    </p>

                    <pre className="code">
                        <code>{exampleVideo}</code>
                    </pre>

                    <div className="tip">
                        <span className="tipIcon">
                            <FiInfo />
                        </span>
                        <div className="tipText">
                            Add <span className="mono">width</span> and{" "}
                            <span className="mono">height</span> (or CSS) to
                            reduce layout shifting while the video loads.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">controls</h3>
                    <p className="p">
                        The <span className="mono">controls</span> attribute
                        shows the browser media UI. Without it, the media still
                        exists, but the user has no built-in way to play or
                        pause unless you build custom controls in JavaScript.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">controls</span> makes it
                            usable for beginners and users
                        </li>
                        <li>
                            <span className="dot" />
                            Without <span className="mono">controls</span>, you
                            need custom UI
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">autoplay rules and muted requirement</h3>
                    <p className="p">
                        Most browsers block autoplay with sound. Autoplay
                        usually works only when the media is{" "}
                        <span className="mono">muted</span>. This prevents
                        annoying experiences where pages suddenly play audio.
                    </p>

                    <pre className="code">
                        <code>{exampleAutoplay}</code>
                    </pre>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Autoplay with sound is usually blocked
                        </li>
                        <li>
                            <span className="dot" />
                            Autoplay commonly works with{" "}
                            <span className="mono">muted</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">playsinline</span> for
                            better mobile behavior
                        </li>
                    </ul>

                    <div className="note mini">
                        <span className="noteIcon">
                            <FiMonitor />
                        </span>
                        <div className="noteText">
                            Autoplay behavior can vary by browser and user
                            settings. Do not rely on autoplay for important
                            content.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">preload</h3>
                    <p className="p">
                        The <span className="mono">preload</span> attribute
                        hints how much media should be loaded before the user
                        presses play.
                    </p>

                    <pre className="code">
                        <code>{examplePreload}</code>
                    </pre>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">none</span> loads nothing
                            until play
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">metadata</span> loads basic
                            info like duration
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">auto</span> may load more,
                            browser decides
                        </li>
                    </ul>

                    <div className="tip">
                        <span className="tipIcon">
                            <FiInfo />
                        </span>
                        <div className="tipText">
                            For large files,{" "}
                            <span className="mono">preload="metadata"</span> is
                            a safe default. It keeps pages lighter.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">track, captions, and subtitles</h3>
                    <p className="p">
                        The <span className="mono">track</span> element is used
                        for timed text, like captions and subtitles. It usually
                        points to a <span className="mono">.vtt</span> file
                        (WebVTT). Captions help accessibility and are important
                        when the user cannot listen to audio.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Captions show spoken words and important sounds
                        </li>
                        <li>
                            <span className="dot" />
                            Subtitles usually translate speech
                        </li>
                        <li>
                            <span className="dot" />
                            Use <span className="mono">default</span> to enable
                            by default
                        </li>
                    </ul>

                    <div className="note good">
                        <span className="noteIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="noteText">
                            Always add captions for educational or public
                            content when possible.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">quick checklist</h3>

                    <div className="checkGrid">
                        <div className="checkItem">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Use <span className="mono">controls</span> for basic
                            UI
                        </div>

                        <div className="checkItem">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Add <span className="mono">track</span> captions
                            when possible
                        </div>

                        <div className="checkItem">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Autoplay needs <span className="mono">muted</span>{" "}
                            in most browsers
                        </div>

                        <div className="checkItem">
                            <span className="checkIcon">
                                <FiCheckCircle />
                            </span>
                            Prefer{" "}
                            <span className="mono">preload="metadata"</span> for
                            large files
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AudioAndVideo;
