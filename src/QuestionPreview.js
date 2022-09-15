import { Badge } from "react-bootstrap"

function QuestionPreview(props) {
  const question = props.question
  return (
    <div>
      <h5 style={{ display: "inline" }}>{question.title} </h5>
      <Badge bg="light" text="secondary">
        {question.views} views
      </Badge>
      <p style={{ margin: 0 }}>{question.body}</p>
    </div>
  )
}

export default QuestionPreview
