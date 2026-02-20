// index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCheckCircle,
    FiAlertTriangle,
    FiEdit3,
    FiCode,
    FiInfo,
} from "react-icons/fi";

const Validation = () => {
    const [open, setOpen] = useState(false);
    const [demo, setDemo] = useState({
        fullName: "",
        email: "",
        age: "",
        pin: "",
        price: "50",
        website: "",
    });

    const [touched, setTouched] = useState({});
    const [customError, setCustomError] = useState("");
    const [submitMsg, setSubmitMsg] = useState("");

    const toggle = () => setOpen((v) => !v);

    const rules = useMemo(() => {
        return [
            {
                title: "required",
                desc: "Makes a field mandatory. Browser shows an error if empty.",
                ex: `<input required />`,
            },
            {
                title: "pattern",
                desc: "Validates with a regex pattern. Useful for PIN, username rules, etc.",
                ex: `<input pattern="^[0-9]{6}$" />`,
            },
            {
                title: "minLength",
                desc: "Minimum number of characters for text inputs.",
                ex: `<input minLength="3" />`,
            },
            {
                title: "maxLength",
                desc: "Maximum number of characters for text inputs.",
                ex: `<input maxLength="20" />`,
            },
            {
                title: "min",
                desc: "Minimum value for number/date/range inputs.",
                ex: `<input type="number" min="18" />`,
            },
            {
                title: "max",
                desc: "Maximum value for number/date/range inputs.",
                ex: `<input type="number" max="60" />`,
            },
            {
                title: "step",
                desc: "Allowed step increments for number/range inputs. Example: step 0.5 or step 10.",
                ex: `<input type="number" step="0.5" />`,
            },
            {
                title: "Constraint Validation API",
                desc: "Browser validation API to check and show errors programmatically (checkValidity, reportValidity, setCustomValidity).",
                ex: `form.checkValidity()`,
            },
            {
                title: "Custom validation",
                desc: "Your own logic on top of browser constraints. Example: confirm password, business rules.",
                ex: `setCustomValidity("Message")`,
            },
        ];
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setDemo((prev) => ({ ...prev, [name]: value }));
        setSubmitMsg("");

        if (name === "website") {
            const v = value.trim();
            if (!v) {
                setCustomError("");
                return;
            }

            const startsOk =
                v.startsWith("https://") || v.startsWith("http://");
            setCustomError(
                startsOk ? "" : "URL must start with https:// or http://",
            );
        }
    };

    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        // Set custom validity for website field
        const websiteInput = form.querySelector('input[name="website"]');
        if (websiteInput) {
            websiteInput.setCustomValidity(customError || "");
        }

        const ok = form.checkValidity();
        if (!ok) {
            form.reportValidity();
            setSubmitMsg("Fix the highlighted fields and try again.");
            return;
        }

        setSubmitMsg("Looks good. Form passed browser validation.");
    };

    const onReset = () => {
        setDemo({
            fullName: "",
            email: "",
            age: "",
            pin: "",
            price: "50",
            website: "",
        });
        setTouched({});
        setCustomError("");
        setSubmitMsg("");
    };

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiEdit3 />
                </span>

                <span className="title">Validation</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">What is form validation</h3>
                    <p className="p">
                        Validation means checking user input before you accept
                        it. HTML gives you built-in validation rules that work
                        without JavaScript. The browser can block submission and
                        show a message when a field is invalid.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <div className="noteText">
                            Use HTML validation for common rules. Use custom
                            validation only for business logic that HTML cannot
                            express.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Core validation attributes</h3>

                    <div className="ruleGrid">
                        {rules.map((r) => (
                            <div className="ruleCard" key={r.title}>
                                <div className="ruleTop">
                                    <div className="ruleName">{r.title}</div>
                                    <div className="ruleTag">Core</div>
                                </div>

                                <div className="ruleDesc">{r.desc}</div>

                                <div className="codeRow">
                                    <span className="codeIcon">
                                        <FiCode />
                                    </span>
                                    <code className="code">{r.ex}</code>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Beginner demo</h3>
                    <p className="p">
                        Try submitting with empty fields or wrong values. The
                        browser will show built-in validation messages. The
                        "Website" field also shows a custom validation message
                        using setCustomValidity.
                    </p>

                    <form
                        className="demoForm"
                        onSubmit={onSubmit}
                        onReset={onReset}
                    >
                        <div className="row">
                            <label className="label" htmlFor="fullName">
                                Full name <span className="req">*</span>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={demo.fullName}
                                onChange={onChange}
                                onBlur={onBlur}
                                required
                                minLength={3}
                                maxLength={30}
                                placeholder="Example: Ashish Ranjan"
                            />
                            <div className="hint">
                                required + minLength 3 + maxLength 30
                            </div>
                            {touched.fullName &&
                                demo.fullName &&
                                demo.fullName.length < 3 && (
                                    <div className="inlineWarn">
                                        <FiAlertTriangle /> Minimum 3 characters
                                    </div>
                                )}
                        </div>

                        <div className="row">
                            <label className="label" htmlFor="email">
                                Email <span className="req">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={demo.email}
                                onChange={onChange}
                                onBlur={onBlur}
                                required
                                placeholder="example@mail.com"
                            />
                            <div className="hint">required + type email</div>
                        </div>

                        <div className="twoCol">
                            <div className="row">
                                <label className="label" htmlFor="age">
                                    Age <span className="req">*</span>
                                </label>
                                <input
                                    id="age"
                                    name="age"
                                    type="number"
                                    value={demo.age}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    required
                                    min={18}
                                    max={60}
                                    step={1}
                                    placeholder="18 to 60"
                                />
                                <div className="hint">
                                    required + min 18 + max 60 + step 1
                                </div>
                            </div>

                            <div className="row">
                                <label className="label" htmlFor="pin">
                                    PIN code <span className="req">*</span>
                                </label>
                                <input
                                    id="pin"
                                    name="pin"
                                    type="text"
                                    value={demo.pin}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    required
                                    inputMode="numeric"
                                    pattern="^[0-9]{6}$"
                                    maxLength={6}
                                    placeholder="6 digits"
                                />
                                <div className="hint">
                                    required + pattern ^[0-9]{"{6}"}$
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <label className="label" htmlFor="price">
                                Price (step demo)
                            </label>
                            <input
                                id="price"
                                name="price"
                                type="range"
                                value={demo.price}
                                onChange={onChange}
                                min={0}
                                max={100}
                                step={5}
                            />
                            <div className="hint">
                                range + min 0 + max 100 + step 5
                            </div>
                            <div className="pill">
                                <FiCheckCircle /> Selected: {demo.price}
                            </div>
                        </div>

                        <div className="row">
                            <label className="label" htmlFor="website">
                                Website (custom validation)
                            </label>
                            <input
                                id="website"
                                name="website"
                                type="url"
                                value={demo.website}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder="https://example.com"
                            />
                            <div className="hint">
                                Custom rule: must start with https:// or http://
                            </div>

                            {!!customError && (
                                <div className="inlineWarn">
                                    <FiAlertTriangle /> {customError}
                                </div>
                            )}
                        </div>

                        <div className="actions">
                            <button type="submit" className="btn primary">
                                Submit
                            </button>
                            <button type="reset" className="btn">
                                Reset
                            </button>
                        </div>

                        {!!submitMsg && (
                            <div className="submitMsg">{submitMsg}</div>
                        )}
                    </form>
                </div>

                <div className="section">
                    <h3 className="h3">
                        Constraint Validation API quick notes
                    </h3>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="bulletText">
                                <code className="inlineCode">
                                    form.checkValidity()
                                </code>{" "}
                                returns true or false without showing UI.
                            </span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="bulletText">
                                <code className="inlineCode">
                                    form.reportValidity()
                                </code>{" "}
                                shows browser messages and returns true or
                                false.
                            </span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="bulletText">
                                <code className="inlineCode">
                                    input.setCustomValidity("Message")
                                </code>{" "}
                                sets your custom error message.
                            </span>
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="bulletText">
                                Set custom validity to empty string to clear it:
                                <code className="inlineCode">
                                    setCustomValidity("")
                                </code>
                                .
                            </span>
                        </li>
                    </ul>

                    <div className="miniCode">
                        <div className="miniCodeTop">
                            <span className="miniCodeIcon">
                                <FiCode />
                            </span>
                            Example snippet
                        </div>

                        <pre className="pre">
                            {`const form = e.currentTarget;

if (!form.checkValidity()) {
    form.reportValidity();
    return;
}

const input = form.querySelector('input[name="website"]');
input.setCustomValidity("URL must start with https://");`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Validation;
