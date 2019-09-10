import React, {Fragment} from 'react'

const List = ({persons}) => {
  return(
    <Fragment>
    <h2>Numbers</h2>
      {persons.map((person) => 
          <Fragment key={person.name + person.number}>
          <h3>{person.name}</h3>
          <h3>{person.number}</h3>
          </Fragment>
      )}
    </Fragment>
  )
}

export default List