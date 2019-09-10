import React, {useState} from 'react'
import Entry from './conmponents/Entry'
import Search from './conmponents/Search'
import List from './conmponents/List'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0734898765' },
    { name: 'Arto Hel', number: '0734898765' },
    { name: 'Arto Has', number: '0734898765' },
  ]) 
  return (
    <div>
      <h2>Phonebook</h2>
      <Entry persons={persons} setPersons={setPersons} />
      <Search persons={persons} setPersons={setPersons} />
      <List persons={persons}/>
      <div>debug: {persons[0].name + ' ' + persons[0].number}</div>
    </div>
  )
}

export default App