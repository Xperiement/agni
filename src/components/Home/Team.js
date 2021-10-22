import React from "react";

const logos = [
  {
    type: "facebook",
    ico: "ri-facebook-circle-fill",
  },
  {
    type: "github",
    ico: "ri-github-fill",
  },
  {
    type: "instagram",
    ico: "ri-instagram-fill",
  },
  {
    type: "npm",
    ico: "ri-npmjs-fill",
  },
  {
    type: "paypal",
    ico: "ri-paypal-fill",
  },
  {
    type: "stackoverflow",
    ico: "ri-stack-overflow-fill",
  },
  {
    type: "telegram",
    ico: "ri-telegram-fill",
  },
  {
    type: "twitch",
    ico: "ri-twitch-fill",
  },
  {
    type: "twitter",
    ico: "ri-twitter-fill",
  },
  {
    type: "youtube",
    ico: "ri-youtube-fill",
  },
];
const icoMapper = (type) => {
  const exists = logos.find((item) => item.type === type.toLowerCase().trim());
  return exists ? exists.ico : "ri-link";
};

export default function Team({ data }) {
  return (
    <section id="about" className="team">
      <div className="head">Our Team</div>

      <div className="list">
        {data.map((item, id) => (
          <div className="card" key={id}>
            <img src={item.avatar} alt="" className="avatar" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="role">{item.role}</div>
            </div>
            <div className="links">
              {item.links.map((fitem, fid) => (
                <a key={fid} href={fitem.url} target="_blank" rel="noreferrer">
                  <i className={icoMapper(fitem.type)} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
