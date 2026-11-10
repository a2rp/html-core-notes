// index.jsx
import { useState } from "react";
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
                        The img element embeds an image and is a void element,
                        so it has no closing tag. A trailing slash is optional
                        and does not make an HTML element self-closing. Use src
                        for a single image resource; picture and srcset can
                        provide alternative sources.
                    </p>

                    <div className="code">
                        {`<img src="image.jpg" alt="A description">`}
                    </div>
                </section>

                {/* alt */}
                <section className="section">
                    <h3 className="h3">alt</h3>
                    <p className="p">
                        The alt attribute provides the image's text alternative
                        for assistive technology and when the image cannot be
                        presented. Describe the information or function the
                        image adds to the page.
                    </p>

                    <ul className="bullets">
                        <li>
                            <FiCheckCircle />
                            Describe informative images in their context
                        </li>
                        <li>
                            <FiCheckCircle />
                            Use empty alt only for decorative images
                        </li>
                    </ul>

                    <div className="code">
                        {`<img src="profile.jpg" alt="Portrait of John Doe">`}
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
  height="500">`}
                    </div>
                </section>

                {/* loading */}
                <section className="section">
                    <h3 className="h3">loading attribute</h3>
                    <p className="p">
                        The loading attribute lets the browser defer offscreen
                        images. The browser decides when a lazy image is close
                        enough to load.
                    </p>

                    <ul className="bullets">
                        <li>
                            <FiCheckCircle />
                            lazy allows the browser to defer an offscreen image
                        </li>
                        <li>
                            <FiCheckCircle />
                            eager requests the image without lazy deferral
                        </li>
                    </ul>

                    <div className="code">
                        {`<img src="banner.jpg" alt="Banner" loading="lazy">`}
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
                        {`<img src="hero.jpg" alt="Hero" decoding="async">`}
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
  alt="Responsive image">`}
                    </div>
                </section>

                {/* sizes */}
                <section className="section">
                    <h3 className="h3">sizes</h3>
                    <p className="p">
                        With width-descriptor srcset candidates, sizes tells the
                        browser the image's expected rendered width so it can
                        choose a suitable source. CSS controls the actual size.
                    </p>

                    <div className="code">
                        {`<img 
  src="small.jpg"
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Responsive">`}
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
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1200px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Responsive image">
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
  <img src="chart.png" alt="Sales chart">
  <figcaption>Monthly sales performance</figcaption>
</figure>`}
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default ImagesTopic;
