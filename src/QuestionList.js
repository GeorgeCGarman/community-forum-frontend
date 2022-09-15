import { ListGroup } from "react-bootstrap"
import Question from "./Question"
import { useContext, useState, useEffect } from "react"
import UserContext from "./UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import QuestionPreview from "./QuestionPreview"

function QuestionList(props) {
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()
  const user = useContext(UserContext)

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3000/questions",
    }
    axios(configuration)
      .then((result) => {
        console.log(result.data)
        setQuestions(result.data)
      })
      .catch((error) => {
        error = new Error()
      })
  }, [])

  return (
    <div className="App">
      <ListGroup>
        {questions.map((question) => {
          return (
            <ListGroup.Item
              key={question._id}
              onClick={() => navigate("/" + question._id)}
            >
              {/* <h5 style={{display: 'inline'}}>{question.title} </h5><Badge bg='light' text='secondary'>{question.views} views</Badge>
            <p style={{margin: 0}}>{question.body}</p> */}
              <QuestionPreview question={question} />
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default QuestionList
