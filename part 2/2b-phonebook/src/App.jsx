import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')
  const addNewName = (event) => {
    event.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    const usedName = persons.some(person => person.name === name)
    usedName ? alert(`This name: ${name} is already used`) : setPersons(persons.concat({name, number}))

    setNewName(usedName ? name : '')
    setNewNumber('')
  }

  const searchResult = persons.filter(person => person.name.toLowerCase().includes(searchText.trim().toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchText={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onNewNameChange={(event) => setNewName(event.target.value)}
        onNewNumberChange={(event) => setNewNumber(event.target.value)}
        addNewName={addNewName}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchText={searchText}
        searchResult={searchResult}
      />
    </div>
  )
}

export default App