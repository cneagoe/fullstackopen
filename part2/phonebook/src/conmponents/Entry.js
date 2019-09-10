import React, {useState} from 'react'

const Entry = ({persons,setPersons}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const phoneHand = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }
  const nameHand = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }
  const addValues = (event) => {
    event.preventDefault()
    let isThereAlready
    persons.forEach(p => p.name === newName ? isThereAlready = true : isThereAlready = false)
    if(!isThereAlready){
      const person = {name: newName, number: newNumber}
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }else{
      alert(`${newName} already exists`)
    } 
  }
  return(
    <form onSubmit={addValues}>
        <div>
          name: <input value={newName} onChange={nameHand}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={phoneHand}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Entry