const Persons = ({ persons, searchText, searchResult }) => {
  return (
    <ul>
      {searchText === ''
        ? persons.map((person) => (
            <li key={person.id}>
              Name: {person.name}, Number: {person.number}
            </li>
          ))
        : searchResult.map((person) => (
            <li key={person.id}>
              Name: {person.name}, Number: {person.number}
            </li>
          ))}
    </ul>
  )
}

export default Persons