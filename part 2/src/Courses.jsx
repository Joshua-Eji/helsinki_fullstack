const Total = ({course}) => {
    const total = course.parts.reduce((a,b) => {
      return a+b.exercises
    }, 0)
    return <h4> total of {total} exercises</h4>
  }

const Courses = ({courses}) => {

    return(
    <>
    {courses.map((course) => {
      return (
      <div key={course.id}>
      <h1>{course.name}</h1>

      {course.parts.map((part) => {
        return (
        <li key={part.id}>
          <p>{part.name} {part.exercises}</p>
        </li>)
        })
      }

      <Total course={course}/>
      </div>
      )
      }
    )
    }
    </>
    )
  }

  export default Courses;