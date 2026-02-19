import React from "react";
import { Styled } from "./styled";

const Images = () => {
    return (
        <Styled.Section id="images">
            <h2>Images</h2>

            <div className="block">
                <h3>Basic image tag</h3>

                <p>
                    The <code>&lt;img&gt;</code> tag is used to display images.
                    It is a self closing tag.
                </p>

                <pre>{`<img src="image.jpg" alt="Description of image">`}</pre>

                <ul>
                    <li>src defines image source</li>
                    <li>alt provides alternative text</li>
                </ul>
            </div>

            <div className="block">
                <h3>Why alt attribute is important</h3>

                <ul>
                    <li>Improves accessibility</li>
                    <li>Displayed if image fails to load</li>
                    <li>Used by screen readers</li>
                    <li>Helps SEO</li>
                </ul>

                <pre>
                    {`<!-- Bad -->
<img src="cat.jpg">

<!-- Good -->
<img src="cat.jpg" alt="Black cat sitting on a chair">`}
                </pre>
            </div>

            <div className="block">
                <h3>Image size control</h3>

                <pre>{`<img src="image.jpg" width="300" height="200">`}</pre>

                <p>
                    You can also control size using CSS instead of HTML
                    attributes.
                </p>

                <pre>
                    {`img {
  width: 300px;
  height: auto;
}`}
                </pre>
            </div>

            <div className="block">
                <h3>Responsive images</h3>

                <p>
                    To make images responsive, avoid fixed width and use
                    percentage or max width.
                </p>

                <pre>
                    {`img {
  max-width: 100%;
  height: auto;
}`}
                </pre>
            </div>

            <div className="block">
                <h3>Using picture element</h3>

                <p>
                    The <code>&lt;picture&gt;</code> element allows different
                    images based on screen size.
                </p>

                <pre>
                    {`<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive example">
</picture>`}
                </pre>
            </div>

            <div className="block">
                <h3>Lazy loading</h3>

                <pre>
                    {`<img src="image.jpg" alt="Example" loading="lazy">`}
                </pre>

                <p>
                    loading="lazy" delays loading until image is near viewport.
                </p>
            </div>

            <div className="block">
                <h3>Common mistakes</h3>

                <ul>
                    <li>Missing alt attribute</li>
                    <li>Using very large unoptimized images</li>
                    <li>Not defining dimensions causing layout shift</li>
                    <li>
                        Using image for decorative purpose without empty alt
                    </li>
                </ul>

                <pre>
                    {`<!-- Decorative image -->
<img src="divider.png" alt="">`}
                </pre>
            </div>

            <div className="endLine">
                Always optimize images, use meaningful alt text, and make them
                responsive.
            </div>
        </Styled.Section>
    );
};

export default Images;
