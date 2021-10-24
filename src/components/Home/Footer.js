import React from "react";
import logo from "../../assets/agni.webp";
import author from "../../assets/epicX.webp";

export default function Footer({ groups = [], donate = [], start, end }) {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="info">
          <img src={logo} alt="" />
          <div className="aInfo">
            <div>Agni Kernel</div>
            <div>{`Copyright ${start} - ${end} All Rights Reserved`}</div>
          </div>
        </div>
        <div className="refs">
          {groups.length > 1 && (
            <div className="cInfo">
              <div className="head">Support Groups</div>
              {groups.map((item, id) => (
                <a
                  key={id}
                  href={item.url}
                  className="items"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {donate.length > 1 && (
            <div className="cInfo">
              <div className="head">Donate</div>
              {donate.map((item, id) => (
                <a
                  key={id}
                  href={item.url}
                  className="items"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="authorCont">
        <img
          onClick={() => {
            const link = document.createElement("a");
            link.href = "https://epicX67.github.io";
            link.setAttribute("target", "blank");
            link.click();
          }}
          className="author"
          src={author}
          alt=""
        />
      </div>
    </footer>
  );
}
