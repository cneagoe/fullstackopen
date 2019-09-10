import React, {useState} from 'react'

const Search = ({persons, setPersons}) => {
  const [ searchName, setSearchName ] = useState('')
  const searchHand = (event) => {
    event.preventDefault()
    setSearchName(event.target.value)
  }
  const searchVal = () => {
    event.preventDefault()
    setPersons(persons.filter(person => 
      person.name.search(searchName) !== -1 ? true : false)
    )
  }
  return(
    <form onSubmit={searchVal}>
        <div>
          name: <input value={searchName} onChange={searchHand}/>
        </div>
        <div>
          <button type="submit">search</button>
        </div>
      </form>
  )
}

export default Search