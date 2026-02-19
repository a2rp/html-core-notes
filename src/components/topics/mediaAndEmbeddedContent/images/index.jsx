// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiImage,
    FiCheckCircle,
} from "react-icons/fi";

const ImagesTopic = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
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
                    <FiImage />
                </span>

                <span className="title">Images</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* img */}
                <section className="section">
                    <h3 className="h3">img</h3>
                    <p className="p">
                        The img element is used to display an image in HTML. It
                        is a self closing element and must include the src
                        attribute.
                    </p>

                    <div className="code">
                        {`<img src="image.jpg" alt="A description" />`}
                    </div>
                </section>

                {/* alt */}
                <section className="section">
                    <h3 className="h3">alt</h3>
                    <p className="p">
                        The alt attribute provides alternative text for
                        accessibility and screen readers. If the image fails to
                        load, this text is shown instead.
                    </p>

                    <ul className="bullets">
                        <li>
                            <FiCheckCircle />
                            Always describe the image meaningfully
                        </li>
                        <li>
                            <FiCheckCircle />
                            Use empty alt only for decorative images
                        </li>
                    </ul>

                    <div className="code">
                        {`<img src="profile.jpg" alt="Portrait of John Doe" />`}
                    </div>
                </section>

                {/* width & height */}
                <section className="section">
                    <h3 className="h3">width and height</h3>
                    <p className="p">
                        Setting width and height helps the browser reserve space
                        before the image loads. This prevents layout shifting.
                    </p>

                    <div className="code">
                        {`<img 
  src="photo.jpg" 
  alt="Landscape" 
  width="800" 
  height="500" 
/>`}
                    </div>
                </section>

                {/* loading */}
                <section className="section">
                    <h3 className="h3">loading attribute</h3>
                    <p className="p">
                        The loading attribute controls when the image loads. It
                        improves performance.
                    </p>

                    <ul className="bullets">
                        <li>
                            <FiCheckCircle />
                            lazy loads image only when near viewport
                        </li>
                        <li>
                            <FiCheckCircle />
                            eager loads immediately
                        </li>
                    </ul>

                    <div className="code">
                        {`<img src="banner.jpg" alt="Banner" loading="lazy" />`}
                    </div>
                </section>

                {/* decoding */}
                <section className="section">
                    <h3 className="h3">decoding attribute</h3>
                    <p className="p">
                        The decoding attribute tells the browser how to decode
                        the image.
                    </p>

                    <ul className="bullets">
                        <li>
                            <FiCheckCircle />
                            async allows non blocking decoding
                        </li>
                        <li>
                            <FiCheckCircle />
                            auto lets browser decide
                        </li>
                    </ul>

                    <div className="code">
                        {`<img src="hero.jpg" alt="Hero" decoding="async" />`}
                    </div>
                </section>

                {/* srcset */}
                <section className="section">
                    <h3 className="h3">srcset</h3>
                    <p className="p">
                        srcset allows you to provide multiple image sizes for
                        different screen resolutions.
                    </p>

                    <div className="code">
                        {`<img 
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  alt="Responsive image"
/>`}
                    </div>
                </section>

                {/* sizes */}
                <section className="section">
                    <h3 className="h3">sizes</h3>
                    <p className="p">
                        The sizes attribute works with srcset to define how much
                        screen width the image should occupy.
                    </p>

                    <div className="code">
                        {`<img 
  src="small.jpg"
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive"
/>`}
                    </div>
                </section>

                {/* picture */}
                <section className="section">
                    <h3 className="h3">picture element</h3>
                    <p className="p">
                        The picture element allows art direction. You can
                        provide different images for different screen sizes.
                    </p>

                    <div className="code">
                        {`<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg" />
  <source media="(max-width: 1200px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Responsive image" />
</picture>`}
                    </div>
                </section>

                {/* figure */}
                <section className="section">
                    <h3 className="h3">figure and figcaption</h3>
                    <p className="p">
                        The figure element groups media content and the
                        figcaption element provides a caption.
                    </p>

                    <div className="code">
                        {`<figure>
  <img src="chart.png" alt="Sales chart" />
  <figcaption>Monthly sales performance</figcaption>
</figure>`}
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default ImagesTopic;
