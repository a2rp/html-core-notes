import React from "react";
import { Styled } from "./styled";

const Semantic = () => {
    return (
        <Styled.Wrapper id="semantic">
            <div className="top">
                <h2 className="title">Semantic Tags</h2>
                <p className="sub">
                    Semantic tags are HTML elements that clearly describe their
                    meaning. They help browsers, search engines, and screen
                    readers understand the structure of the document.
                </p>
            </div>

            <div className="card">
                <h3 className="h3">Why semantic HTML matters</h3>
                <ul className="list">
                    <li>
                        Better accessibility - screen readers can identify
                        landmark regions
                    </li>
                    <li>
                        Improved SEO - search engines understand content
                        structure
                    </li>
                    <li>
                        More readable code - developers can easily understand
                        layout intent
                    </li>
                    <li>Better maintainability - future changes are easier</li>
                </ul>
            </div>

            <div className="grid">
                <div className="card">
                    <h3 className="h3">Common layout semantics</h3>
                    <div className="pillRow">
                        <span className="pill">header</span>
                        <span className="pill">nav</span>
                        <span className="pill">main</span>
                        <span className="pill">section</span>
                        <span className="pill">article</span>
                        <span className="pill">aside</span>
                        <span className="pill">footer</span>
                    </div>

                    <div className="note">
                        <div className="noteTitle">Rule</div>
                        <div className="noteText">
                            A page should typically contain only one{" "}
                            <span className="mono">main</span> element.
                            <span className="mono"> header</span> and{" "}
                            <span className="mono">footer</span> can exist at
                            both page level and component level.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 className="h3">Content semantics</h3>
                    <div className="pillRow">
                        <span className="pill">figure</span>
                        <span className="pill">figcaption</span>
                        <span className="pill">time</span>
                        <span className="pill">address</span>
                        <span className="pill">details</span>
                        <span className="pill">summary</span>
                    </div>

                    <p className="text">
                        These tags define the meaning of content. For example,
                        use <span className="mono">figure</span> for an image
                        with a caption, and <span className="mono">time</span>{" "}
                        for publishing dates or timestamps.
                    </p>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Example layout</h3>
                <pre className="pre">{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic Page</title>
  </head>

  <body>
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
      </nav>
    </header>

    <main>
      <section aria-labelledby="intro-title">
        <h1 id="intro-title">Intro</h1>
        <p>Some content...</p>
      </section>

      <article>
        <h2>Blog Post</h2>
        <p>Post content...</p>
      </article>

      <aside>
        <h3>Related</h3>
        <p>Side information...</p>
      </aside>
    </main>

    <footer>
      <small>Copyright</small>
    </footer>
  </body>
</html>`}</pre>

                <div className="note">
                    <div className="noteTitle">Tip</div>
                    <div className="noteText">
                        Use proper heading hierarchy and attributes like{" "}
                        <span className="mono">aria-labelledby</span> to
                        strengthen landmark regions for accessibility.
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Common mistakes</h3>
                <ul className="list">
                    <li>
                        Wrapping everything in div elements and losing semantic
                        structure
                    </li>
                    <li>Using multiple main elements</li>
                    <li>Placing unrelated content inside nav</li>
                    <li>
                        Skipping heading levels such as using h4 directly after
                        h1
                    </li>
                </ul>
            </div>

            <div className="endLine">
                Use semantic elements whenever appropriate. Use div only when no
                semantic alternative fits.
            </div>
        </Styled.Wrapper>
    );
};

export default Semantic;
