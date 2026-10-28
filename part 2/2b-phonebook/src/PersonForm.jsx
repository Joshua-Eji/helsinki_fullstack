const PersonForm = ({
  newName,
  newNumber,
  onNewNameChange,
  onNewNumberChange,
  addNewName
}) => {
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={onNewNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNewNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm