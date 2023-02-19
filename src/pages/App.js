import "../assets/stylesheets/app.css";
import MyHeader from "../components/header";
import { Container } from "react-bootstrap";
import MyFooter from "../components/footer";
import MyNote from "../components/note";

function App() {
    return (
        <>
            <MyHeader />
            <Container>
                <MyNote />
            </Container>
            <MyFooter />
        </>
    );
}

export default App;
