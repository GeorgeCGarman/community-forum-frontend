import { Badge } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { ListGroup } from "react-bootstrap"

function Question() {
  let params = useParams()
  const [question, setQuestion] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const configuration = {
      method: "get",
      url: `http://localhost:3000/questions?question_id=${params.questionId}`,
    }
    axios(configuration)
      .then((result) => {
        console.log(result.data[0])
        // setQuestions(result.data)
        setQuestion(result.data[0])
      })
      .catch((error) => {
        error = new Error()
      })
  }, [])

  useEffect(() => {
    const configuration = {
      method: "get",
      url: `http://localhost:3000/comments?question_id=${params.questionId}`,
    }
    axios(configuration)
      .then((result) => {
        console.log(result.data[0])
        // setQuestions(result.data)
        setComments(result.data)
      })
      .catch((error) => {
        error = new Error()
      })
  }, [])

  return (
    <div>
      {question && (
        <div style={{ margin: 15 }}>
          <h5 style={{ display: "inline" }}>{question.title} </h5>
          <Badge bg="light" text="secondary">
            {question.views} views
          </Badge>
          <p style={{ margin: 0 }}>{question.body}</p>
        </div>
      )}
      <ListGroup className="m-3">
        {comments.map((comment) => {
          return (
            <ListGroup.Item>
              <div>
                <h5 style={{ display: "inline" }}>{comment.comment} </h5>
                {/* <Badge bg="light" text="secondary">
                {question.views} views
              </Badge> */}
                <p style={{ margin: 0 }}>{comment.date_created.valueAsDate}</p>
              </div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Question
