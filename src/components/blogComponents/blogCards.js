import React from "react"

export default function BlogCards(props) {
  const link = "/blogs/" + props.slug
  return (
    <div className="cardss rounded-4 mx-1 mt-1" key={props.key}>
      <img
        src={props.img}
        className="cardssImage"
        alt={props.title}
        height="400px"
        width="400px"
      />
      <a href={link}>
        <h1 className="pb-3 px-3 pt-3">{props.title}</h1>
      </a>
    </div>
  )
}
