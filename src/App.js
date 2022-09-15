import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, Outlet } from "react-router-dom"
import QuestionList from "./QuestionList"
import Question from "./Question"
import UserContext from "./UserContext"

function App() {
  const [questions, setQuestions] = useState([])
  const [question, setQuestion] = useState()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  return (
    <>
      {/* {!user && (
        <a href={'/login'}>Login</a>
      )} */}
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<QuestionList />}></Route>
            <Route path=":questionId" element={<Question />}></Route>
          </Route>
          {/* <Route
            path="/"
            element={
              <QuestionList
                questions={questions}
                clickQuestion={clickQuestion}
              />
            }
          />
          <Route path="/question" element={<Question question={question} />} /> */}
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
