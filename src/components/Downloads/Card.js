import React from "react";

// {
//     type: "kernel",
//     title: "v6.9",
//     size: "14.5MB",
//     url: "",
//     md5: "",
//     changelogs: ["Added Z-Engine", "Improved thermal"],
//   },

export default function Card({ data }) {
  return (
    <div id={data.title} className="card">
      <div className="tCont">
        <div className="lCont">
          <div className="title">{data.title}</div>
          {data.md5 ? (
            <div className="hash">
              <i className="ri-shield-check-line" />
              <div>{data.md5}</div>
            </div>
          ) : (
            <div className="hash disabled">
              <i className="ri-shield-check-line" />
              <div>Not provided</div>
            </div>
          )}
        </div>

        <div className="rCont">
          <a
            className="downloadBtn"
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-download-cloud-2-line"></i>
            <div className="iCont">
              <div className="title">Download</div>
              <div className="size">{data.size}</div>
            </div>
          </a>
        </div>
      </div>

      <div className="changelogs">
        {data.changelogs.length > 0 && (
          <>
            <div className="subHead">Changelogs</div>
            <ul>
              {data.changelogs.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
