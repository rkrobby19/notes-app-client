import "../styles/app.css";
import MyHeader from "../components/Header";
import { Container } from "react-bootstrap";
import MyFooter from "../components/Footer";
import MyNote from "../components/Note";
import CreateArea from "../components/CreateArea";

function App() {
  return (
    <>
      <MyHeader />
      <Container>
        {/* <MyNote /> */}
        <CreateArea />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
