import React from "react";
import { Styled } from "./styled";

const Forms = () => {
    return (
        <Styled.Section id="forms">
            <h2>Forms</h2>

            <div className="block">
                <h3>What is a form?</h3>
                <p>
                    The <code>&lt;form&gt;</code> element collects user input
                    and sends it to a server.
                </p>

                <pre>
                    {`<form action="/submit" method="post">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>`}
                </pre>
            </div>

            <div className="block">
                <h3>Important attributes</h3>

                <ul>
                    <li>
                        <code>action</code> - URL where data is sent
                    </li>
                    <li>
                        <code>method</code> - get or post
                    </li>
                    <li>
                        <code>autocomplete</code> - on or off
                    </li>
                    <li>
                        <code>novalidate</code> - disables browser validation
                    </li>
                </ul>

                <pre>
                    {`<form action="/login" method="post" autocomplete="on">`}
                </pre>
            </div>

            <div className="block">
                <h3>GET vs POST</h3>

                <ul>
                    <li>GET - data appended in URL</li>
                    <li>GET - used for search or read operations</li>
                    <li>POST - data sent inside request body</li>
                    <li>POST - used for sensitive or large data</li>
                </ul>
            </div>

            <div className="block">
                <h3>Label and input association</h3>

                <pre>
                    {`<label for="email">Email</label>
<input type="email" id="email" name="email">`}
                </pre>

                <p>
                    Always associate <code>label</code> with input using
                    <code>for</code> and <code>id</code>.
                </p>
            </div>

            <div className="block">
                <h3>Fieldset and legend</h3>

                <pre>
                    {`<form>
  <fieldset>
    <legend>Personal Info</legend>

    <label for="name">Name</label>
    <input id="name" type="text">
  </fieldset>
</form>`}
                </pre>

                <p>
                    Use <code>fieldset</code> to group related fields.
                </p>
            </div>

            <div className="block">
                <h3>Basic example form</h3>

                <pre>
                    {`<form action="/register" method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username">

  <label for="password">Password</label>
  <input type="password" id="password" name="password">

  <button type="submit">Register</button>
</form>`}
                </pre>
            </div>

            <div className="block">
                <h3>Best practices</h3>

                <ul>
                    <li>Always use labels</li>
                    <li>Use semantic grouping</li>
                    <li>Use correct input types</li>
                    <li>Validate on client and server</li>
                    <li>Never rely only on frontend validation</li>
                </ul>
            </div>

            <div className="block">
                <h3>Common mistakes</h3>

                <ul>
                    <li>Missing name attribute</li>
                    <li>No labels for inputs</li>
                    <li>Using div instead of fieldset</li>
                    <li>Using GET for sensitive data</li>
                </ul>
            </div>

            <div className="endLine">
                Forms are data contracts between user and server - design them
                carefully.
            </div>
        </Styled.Section>
    );
};

export default Forms;
