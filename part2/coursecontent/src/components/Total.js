import React from 'react'

const Total = ({ course }) => {
  let s = course.parts.reduce((s, part) => s += part.exercises, 0);
  return (
    <p>
      Number of exercises{" "}
      {s}
    </p>
  )
}

export default Total
