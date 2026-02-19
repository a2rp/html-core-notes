// src/pages/textContent/tables/index.jsx
import React from "react";
import { Styled } from "./styled";

const Tables = () => {
    return (
        <Styled.Wrapper id="tables">
            <div className="top">
                <h2 className="title">Tables</h2>
                <p className="sub">
                    Use tables for tabular data - not for layout. A good table
                    is readable, structured, and accessible.
                </p>
            </div>

            <div className="grid">
                <div className="card">
                    <h3 className="h3">Core structure</h3>

                    <ul className="list">
                        <li>
                            <span className="mono">table</span> - container
                        </li>
                        <li>
                            <span className="mono">thead</span> - header rows
                        </li>
                        <li>
                            <span className="mono">tbody</span> - data rows
                        </li>
                        <li>
                            <span className="mono">tfoot</span> - summary rows
                            (optional)
                        </li>
                        <li>
                            <span className="mono">tr</span> - row
                        </li>
                        <li>
                            <span className="mono">th</span> - header cell
                        </li>
                        <li>
                            <span className="mono">td</span> - data cell
                        </li>
                    </ul>

                    <pre className="pre">{`<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Qty</th>
      <th>Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Notebook</td>
      <td>2</td>
      <td>499</td>
    </tr>
  </tbody>
</table>`}</pre>
                </div>

                <div className="card">
                    <h3 className="h3">Caption and headers</h3>

                    <p className="text">
                        <span className="mono">caption</span> gives a short
                        title to the table. Use <span className="mono">th</span>{" "}
                        with <span className="mono">scope</span> for
                        accessibility.
                    </p>

                    <pre className="pre">{`<table>
  <caption>Monthly Expenses</caption>

  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Rent</th>
      <td>18000</td>
    </tr>
    <tr>
      <th scope="row">Food</th>
      <td>6500</td>
    </tr>
  </tbody>
</table>`}</pre>

                    <div className="note">
                        <div className="noteTitle">Tip</div>
                        <div className="noteText">
                            <span className="mono">scope="col"</span> means the
                            header applies to a column.{" "}
                            <span className="mono">scope="row"</span> means it
                            applies to a row.
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Advanced - cell spanning</h3>

                <p className="text">
                    Use <span className="mono">colspan</span> and{" "}
                    <span className="mono">rowspan</span> to merge cells.
                </p>

                <pre className="pre">{`<table>
  <thead>
    <tr>
      <th>Plan</th>
      <th colspan="2">Pricing</th>
    </tr>
    <tr>
      <th></th>
      <th>Monthly</th>
      <th>Yearly</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Starter</td>
      <td>199</td>
      <td>1990</td>
    </tr>
  </tbody>
</table>`}</pre>
            </div>

            <div className="card">
                <h3 className="h3">Responsive table pattern</h3>

                <p className="text">
                    Tables can overflow on small screens. The simplest pattern
                    is to wrap the table inside a scroll container.
                </p>

                <pre className="pre">{`<div class="tableScroll">
  <table>
    ...
  </table>
</div>`}</pre>

                <div
                    className="miniTableWrap"
                    role="region"
                    aria-label="Example table scroll container"
                >
                    <div className="tableScroll">
                        <table className="demoTable">
                            <caption className="visuallyHidden">
                                Example orders table
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#A102</td>
                                    <td>Neha</td>
                                    <td>Shipped</td>
                                    <td>2499</td>
                                </tr>
                                <tr>
                                    <td>#A103</td>
                                    <td>Niraj</td>
                                    <td>Processing</td>
                                    <td>1199</td>
                                </tr>
                                <tr>
                                    <td>#A104</td>
                                    <td>Aman</td>
                                    <td>Delivered</td>
                                    <td>799</td>
                                </tr>
                                <tr>
                                    <td>#A105</td>
                                    <td>Riya</td>
                                    <td>Cancelled</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="note">
                    <div className="noteTitle">Rule</div>
                    <div className="noteText">
                        Keep the header visible and allow horizontal scrolling
                        for the table area only, not the full page.
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="h3">Best practices</h3>

                <ul className="list">
                    <li>Use tables only for data, not page layout</li>
                    <li>Always prefer a caption for important tables</li>
                    <li>Use th with scope for clear relationships</li>
                    <li>Keep columns consistent - avoid messy spans</li>
                    <li>
                        For complex tables, consider headers with ids and
                        headers attributes
                    </li>
                </ul>
            </div>

            <div className="card">
                <h3 className="h3">Common mistakes</h3>

                <ul className="list">
                    <li>Using tables to build website layout</li>
                    <li>Skipping thead and th</li>
                    <li>No caption for data tables</li>
                    <li>
                        Overusing colspan and rowspan until structure becomes
                        unclear
                    </li>
                </ul>
            </div>

            <div className="endLine">
                Tables are a precision tool - use them for structured data and
                keep them accessible.
            </div>
        </Styled.Wrapper>
    );
};

export default Tables;
