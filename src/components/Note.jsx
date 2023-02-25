import { Card } from "react-bootstrap";

const MyNote = ({ tittle, body }) => {
  return (
    <Card className="my-card">
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyNote;
