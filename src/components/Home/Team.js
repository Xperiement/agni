import React from "react";
import avatar from "../../assets/avatar.jpg";

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

const data = [
  {
    name: "Alex Suprun",
    role: "Founder",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    links: [
      {
        type: "github",
        url: "https://www.github.com",
      },
      {
        type: "facebook",
        url: "https://www.github.com",
      },
      {
        type: "twitter",
        url: "https://www.github.com",
      },
    ],
  },
  {
    name: "Nature",
    role: "Energy",
    avatar:
      "https://images.unsplash.com/photo-1551008475-4533d141425b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    links: [
      {
        type: "github",
        url: "https://www.github.com",
      },
      {
        type: "facebook",
        url: "https://www.github.com",
      },
      {
        type: "twitter",
        url: "https://www.github.com",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="team">
      <div className="head">Our Team</div>

      <div className="list">
        {data.map((item) => (
          <div className="card">
            <img src={item.avatar} alt="" className="avatar" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="role">{item.role}</div>
            </div>
            <div className="links">
              {item.links.map((fitem) => (
                <a href={fitem.url} target="_blank" rel="noreferrer">
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
