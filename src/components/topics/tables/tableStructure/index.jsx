// index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiTable } from "react-icons/fi";

const TableStructure = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiTable />
                </span>

                <span className="title">Table Structure</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>table</h3>
                    <p>
                        The table element is the container for all tabular data.
                        It defines the start and end of a table.
                    </p>
                </div>

                <div className="section">
                    <h3>thead, tbody, tfoot</h3>
                    <p>
                        thead contains header rows. tbody contains the main data
                        rows. tfoot contains summary rows like totals. These
                        help structure large tables clearly.
                    </p>
                </div>

                <div className="section">
                    <h3>tr, th, td</h3>
                    <p>
                        tr defines a table row. th defines a header cell. td
                        defines a data cell. Header cells usually describe
                        columns or rows.
                    </p>
                </div>

                <div className="section">
                    <h3>scope attribute</h3>
                    <p>
                        The scope attribute improves accessibility by defining
                        whether a header applies to a column or a row. Example:
                        scope="col" or scope="row".
                    </p>
                </div>

                <div className="section">
                    <h3>caption</h3>
                    <p>
                        caption gives a title to the table. It appears above the
                        table and helps screen readers understand what the table
                        represents.
                    </p>
                </div>

                <div className="section">
                    <h3>colgroup and col</h3>
                    <p>
                        colgroup and col allow you to style entire columns
                        instead of individual cells.
                    </p>
                </div>

                <div className="section">
                    <h3>rowspan and colspan</h3>
                    <p>
                        rowspan merges cells vertically. colspan merges cells
                        horizontally. These are useful for complex table
                        layouts.
                    </p>
                </div>

                <div className="section">
                    <h3>Accessible Tables</h3>
                    <p>
                        Always use th for headers, use scope properly, add a
                        caption, and avoid using tables for layout. Tables
                        should represent real tabular data only.
                    </p>
                </div>

                <div className="example">
                    <h4>Example Table</h4>

                    <table>
                        <caption>Student Scores</caption>

                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Math</th>
                                <th scope="col">Science</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">Amit</th>
                                <td>85</td>
                                <td>90</td>
                            </tr>

                            <tr>
                                <th scope="row">Riya</th>
                                <td>88</td>
                                <td>92</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan="3">End of Results</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TableStructure;
