import React, { Fragment } from 'react'
import Part from './Part'
import Header from './Header'
import Total from './Total'

const Content = ({ courses }) => {
  return (
    courses.map((course) => {
      return (
        <Fragment key={course.id}>
          < Header course={course} />
          < Part parts={course.parts} />
          <Total course={course} />
        </Fragment>
      )
    })
  )
}

export default Content
