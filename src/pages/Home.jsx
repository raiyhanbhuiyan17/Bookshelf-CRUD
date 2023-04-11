import React, { useState } from 'react';

const Home = () => {
 
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(`Email: ${email}, Password: ${password}`);
      }

      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email"> Email: </label>
              <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              />
            
          </div>
          <div className="form-field">
            <label htmlFor="password"> Password: </label>
            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
            <button type="submit">Login</button>
          </form>

        </div>
      );
}

export default Home;

// import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";

// import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

// const Home = () => {
//   <h1>hello</h1>
//   return (
//     <>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#">My Library</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#">Home</Nav.Link>
//             <Nav.Link href="#">Books</Nav.Link>
//             <Nav.Link href="#">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Container className="my-5">
//         <Row>
//           <Col md={6}>
//             <h1>Welcome to My Library</h1>
//             <p>We provide a wide range of books for all ages and interests. Browse our collection and find your next read.</p>
//             <Button variant="primary" href="#">Explore Books</Button>
//           </Col>
//           <Col md={6}>
//             <img src="https://via.placeholder.com/500x300" alt="Library" className="img-fluid" />
//           </Col>
//         </Row>
//       </Container>

//       <footer className="bg-light py-3">
//         <Container>
//           <p className="text-center">&copy; My Library {new Date().getFullYear()}</p>
//         </Container>
//       </footer>
//     </>
//   );
// };

// export default Home;



