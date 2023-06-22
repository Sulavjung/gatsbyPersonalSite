import React, { useState } from "react";

const DynamicDiv = () => {
  const minSize = 100; // Minimum size in pixels
  const maxSize = 500; // Maximum size in pixels
  const numBubbles = 25; // Number of bubbles to render

  const [childSize, setChildSize] = useState(minSize);

  const handleMouseMove = (event) => {
    const parentRect = event.currentTarget.getBoundingClientRect();
    const childRect = event.target.getBoundingClientRect();

    const parentCenterX = parentRect.width / 2;
    const parentCenterY = parentRect.height / 2;
    const childCenterX = childRect.width / 2;
    const childCenterY = childRect.height / 2;

    const distanceFromCenterX = Math.abs(
      parentCenterX - childRect.left - childCenterX
    );
    const distanceFromCenterY = Math.abs(
      parentCenterY - childRect.top - childCenterY
    );

    const isCloseToBorder =
      distanceFromCenterX < parentCenterX / 2 &&
      distanceFromCenterY < parentCenterY / 2;

    const size = isCloseToBorder ? minSize : maxSize;

    setChildSize(size);
  };

  const renderBubbles = () => {
    const bubbles = [];

    for (let i = 0; i < numBubbles; i++) {
      const bubbleStyle = {
        width: childSize,
        height: childSize,
        borderRadius: "50%",
        backgroundColor: "red",
        position: "relative",
        overflow: "auto",
      };

      bubbles.push(
        <div
          key={i}
          style={bubbleStyle}
          onMouseMove={handleMouseMove}
        ></div>
      );
    }

    return bubbles;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minSize}px, ${maxSize}px))`,
        gap: "10px",
        justifyContent: "center",
        alignContent: "center",
        padding: "10px",
        overflow: "auto", // Added overflow property
      }}
    >
      {renderBubbles()}
    </div>
  );
};

export default DynamicDiv;
