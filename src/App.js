import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Container, Navbar, Nav} from 'react-bootstrap';
import Practice from './Components/Practice';

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/practice">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Practice</Nav.Link> */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<Routes>
  <Route path='/practice' element={<Practice/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/about/:id' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
