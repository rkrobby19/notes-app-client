import { Container, Navbar } from "react-bootstrap";

function MyHeader() {
  return (
    <Navbar className="my-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Notes Keeper</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>Welcome</Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
