import React from "react"

function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomEmoji() {
  const emojis = ["😀", "😂", "🥰", "😎", "😭", "😡", "👻", "🎉", "❤️", "🌟"] // List of emojis
  return emojis[Math.floor(Math.random() * emojis.length)]
}

function generateRandomEmojis(numEmojis, containerSize) {
  const emojis = []
  for (let i = 0; i < numEmojis; i++) {
    const size = getRandomPosition(20, 50) // Size of the emoji from 30px to 100px
    const left = getRandomPosition(0, containerSize - size)
    const top = getRandomPosition(0, containerSize - size)
    const emoji = getRandomEmoji() // Random emoji
    emojis.push({ left, top, size, emoji })
  }
  // Sort emojis by size in descending order
  emojis.sort((a, b) => b.size - a.size)
  return emojis
}

export default function BlogCards(props) {
  const link = "/blogs/" + props.slug
  let img = null

  if (props.img !== "NONE") {
    img = require(`../../content/blogPost/Images/${props.img}`)
  }

  const emojis = generateRandomEmojis(10, 400)

  return (
    <a className="cardss rounded-4 mx-1 mt-1" href={link}>
      <div key={props.key}>
        {img ? (
          <img
            className="cardssImage"
            src={img.default}
            alt={props.title}
            height="400px"
            width="400px"
          />
        ) : (
          <div
            className="cardssImagePlaceholder"
            style={{
              height: "400px",
              width: "400px",
              position: "relative",
            }}
          >
            {emojis.map((emoji, index) => (
              <div
                className="emojisBlog"
                key={index}
                style={{
                  position: "absolute",
                  fontSize: `${emoji.size}px`,
                  left: `${emoji.left}px`,
                  top: `${emoji.top}px`,
                  rotate: `${emoji.top}deg`,
                  filter:
                    emoji.size < 30
                      ? "none"
                      : emoji.size > 40
                      ? "blur(6px)"
                      : "blur(4px)",
                }}
              >
                {emoji.emoji}
              </div>
            ))}
          </div>
        )}

        <h1 className="cardTitle pb-3 px-3 pt-3">{props.title}</h1>
      </div>
    </a>
  )
}
