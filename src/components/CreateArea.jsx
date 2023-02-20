import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CreateArea = () => {
  return (
    <Form className="create-area">
      <Form.Group className="mb-3" controlId="title">
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="body">
        <Form.Control as="textarea" rows={3} placeholder="your notes .." />
      </Form.Group>
      <Button onClick={() => alert(`clicked`)}>Add</Button>
    </Form>
  );
};

export default CreateArea;
