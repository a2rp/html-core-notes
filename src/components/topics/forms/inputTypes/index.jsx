// forms/inputTypes/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiEdit3,
    FiKey,
    FiMail,
    FiLink2,
    FiHash,
    FiSliders,
    FiSearch,
    FiPhone,
    FiCalendar,
    FiClock,
    FiDroplet,
    FiUpload,
    FiCheckSquare,
    FiDisc,
    FiEyeOff,
    FiSend,
    FiRotateCcw,
    FiSquare,
} from "react-icons/fi";

const InputTypes = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                name: "text",
                icon: <FiEdit3 />,
                use: "Single-line plain text input for names, titles, etc.",
                example: `<input type="text" name="fullName" placeholder="Full name" />`,
                notes: [
                    "Default input type if you write <input> without type.",
                    "Use minlength and maxlength for length rules.",
                ],
            },
            {
                name: "password",
                icon: <FiKey />,
                use: "Hides typed characters for passwords and secrets.",
                example: `<input type="password" name="password" placeholder="Password" />`,
                notes: [
                    "Use autocomplete when appropriate like current-password or new-password.",
                    "Still treat as sensitive, never log it in console.",
                ],
            },
            {
                name: "email",
                icon: <FiMail />,
                use: "Email address input with built-in validation.",
                example: `<input type="email" name="email" placeholder="name@example.com" />`,
                notes: [
                    "Browser checks basic email format.",
                    "Use multiple attribute if you want multiple emails.",
                ],
            },
            {
                name: "url",
                icon: <FiLink2 />,
                use: "Website link input with URL validation.",
                example: `<input type="url" name="website" placeholder="https://example.com" />`,
                notes: [
                    "Browser validates URL format.",
                    "Keep placeholder realistic for users.",
                ],
            },
            {
                name: "number",
                icon: <FiHash />,
                use: "Numeric input with stepper controls.",
                example: `<input type="number" name="age" min="0" max="120" step="1" />`,
                notes: [
                    "Use min, max, step to control allowed values.",
                    "For phone numbers use tel, not number.",
                ],
            },
            {
                name: "range",
                icon: <FiSliders />,
                use: "Slider input for selecting a value in a range.",
                example: `<input type="range" name="volume" min="0" max="100" step="1" />`,
                notes: [
                    "Pair with an output element to show current value.",
                    "Good for settings like brightness, volume.",
                ],
            },
            {
                name: "search",
                icon: <FiSearch />,
                use: "Search field, may show clear button in some browsers.",
                example: `<input type="search" name="q" placeholder="Search..." />`,
                notes: [
                    "Semantically indicates search intent.",
                    "Works like text but with search UX in some browsers.",
                ],
            },
            {
                name: "tel",
                icon: <FiPhone />,
                use: "Telephone input, opens numeric keypad on mobile.",
                example: `<input type="tel" name="phone" placeholder="+91 98765 43210" />`,
                notes: [
                    "No built-in validation by default, use pattern if needed.",
                    "Best for phone numbers, not number type.",
                ],
            },
            {
                name: "date",
                icon: <FiCalendar />,
                use: "Date picker for selecting a calendar date.",
                example: `<input type="date" name="dob" />`,
                notes: [
                    "Use min and max to limit dates.",
                    "UI differs across browsers.",
                ],
            },
            {
                name: "time",
                icon: <FiClock />,
                use: "Time picker for selecting time of day.",
                example: `<input type="time" name="meetingTime" />`,
                notes: [
                    "Use step to control seconds if needed.",
                    "Great for schedules and reminders.",
                ],
            },
            {
                name: "datetime-local",
                icon: <FiClock />,
                use: "Date and time without timezone conversion.",
                example: `<input type="datetime-local" name="appointment" />`,
                notes: [
                    "Stores local date time string, not timezone aware.",
                    "Use when user picks a local moment like a meeting time.",
                ],
            },
            {
                name: "month",
                icon: <FiCalendar />,
                use: "Month picker, useful for billing cycles.",
                example: `<input type="month" name="billingMonth" />`,
                notes: [
                    "Lets users choose year and month.",
                    "Good for reports and subscriptions.",
                ],
            },
            {
                name: "week",
                icon: <FiCalendar />,
                use: "Week picker, useful for weekly planning.",
                example: `<input type="week" name="workWeek" />`,
                notes: [
                    "Returns ISO week format.",
                    "UI support depends on browser.",
                ],
            },
            {
                name: "color",
                icon: <FiDroplet />,
                use: "Color picker, returns hex color value.",
                example: `<input type="color" name="themeColor" value="#000000" />`,
                notes: [
                    "Great for theme settings.",
                    "Default value should be a valid hex.",
                ],
            },
            {
                name: "file",
                icon: <FiUpload />,
                use: "File upload input for selecting files from device.",
                example: `<input type="file" name="resume" accept=".pdf,.doc,.docx" />`,
                notes: [
                    "Use accept to hint file types.",
                    "Use multiple if you want multiple files.",
                ],
            },
            {
                name: "checkbox",
                icon: <FiCheckSquare />,
                use: "Toggle true or false, can be multiple selections.",
                example: `<input type="checkbox" name="agree" />`,
                notes: [
                    "Use with label for clickable text.",
                    "For groups, use same name with different values.",
                ],
            },
            {
                name: "radio",
                icon: <FiDisc />,
                use: "Single choice within a group.",
                example: `<input type="radio" name="plan" value="pro" />`,
                notes: [
                    "Radio works in groups using the same name.",
                    "Use checked for default selection if needed.",
                ],
            },
            {
                name: "hidden",
                icon: <FiEyeOff />,
                use: "Hidden field for sending extra values with the form.",
                example: `<input type="hidden" name="source" value="landing-page" />`,
                notes: [
                    "Not visible to user.",
                    "Do not trust hidden values for security decisions.",
                ],
            },
            {
                name: "submit",
                icon: <FiSend />,
                use: "Submits the form.",
                example: `<input type="submit" value="Submit" />`,
                notes: [
                    "Triggers form submit event.",
                    "button type=submit is often more flexible for styling.",
                ],
            },
            {
                name: "reset",
                icon: <FiRotateCcw />,
                use: "Resets form values back to initial defaults.",
                example: `<input type="reset" value="Reset" />`,
                notes: [
                    "Can surprise users, use carefully.",
                    "Often better to provide a custom clear button.",
                ],
            },
            {
                name: "button",
                icon: <FiSquare />,
                use: "Neutral button, does not submit unless you code it.",
                example: `<input type="button" value="Click me" />`,
                notes: [
                    "Does nothing by default, you attach behavior with JS.",
                    "Prefer <button type='button'> for richer content.",
                ],
            },
        ];
    }, []);

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
                    <FiEdit3 />
                </span>

                <span className="title">Input Types</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        HTML inputs have different types to collect different
                        kinds of data. Choosing the correct input type improves
                        validation, mobile keyboard behavior, and accessibility.
                    </p>
                    <p className="p">
                        Below is a beginner friendly list of common input types
                        with what they are used for and simple examples.
                    </p>
                </div>

                <div className="list">
                    {items.map((it) => (
                        <div className="item" key={it.name}>
                            <div className="itemTop">
                                <span className="itemIcon">{it.icon}</span>
                                <div className="itemHead">
                                    <div className="itemTitle">
                                        <span className="mono">{it.name}</span>
                                    </div>
                                    <div className="itemUse">{it.use}</div>
                                </div>
                            </div>

                            <div className="example">
                                <div className="exampleLabel">Example</div>
                                <pre className="code">
                                    <code>{it.example}</code>
                                </pre>
                            </div>

                            <ul className="notes">
                                {it.notes.map((n, idx) => (
                                    <li key={`${it.name}-n-${idx}`}>
                                        <span className="dot" />
                                        {n}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="tip">
                    <div className="tipTitle">Quick tip</div>
                    <div className="tipText">
                        Always pair inputs with a label. It improves usability
                        and makes forms accessible for keyboard and screen
                        readers.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default InputTypes;
