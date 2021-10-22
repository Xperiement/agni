import React from "react";

export default function Improvements({ data }) {
  return (
    <section className="improvements">
      <div className="head">Improvements</div>
      <div className="list">
        {data.map((item, id) => (
          <div key={id} className="card">
            <div className="head">{item.title}</div>
            <ul>
              {item.data.map((fitem, fid) => (
                <li key={fid}>{fitem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
