import { useState } from 'react'
import Course from './components/Course'

function App() {
  const courses = [
      {
      id: 1,
      name: "Half Stack app development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 10,
          id: 2
        },
        {
          name: "Fundamentals of React",
          exercises: 14,
          id: 3
        },
        {
          name: "Functional programming",
          exercises: 5,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
    <h1>List of courses of Web Development Curriculum:</h1>
    {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}

export default App
