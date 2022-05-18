import { Navbar, Container,Nav, NavDropdown } from "react-bootstrap";
import styles from "./style.module.scss"

export function Header(props) {
  return (
    <Navbar bg="light" expand="md"  fixed="top" >
      <Container className={styles.Navbar}>
        <Navbar.Brand className={styles.Logo} href="#home">Timer</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav  className={styles.Options}>
            <Nav.Link href="#home" className={styles.Item}>Home</Nav.Link>
            <Nav.Link href="#link" className={styles.Item}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className={styles.Item}>
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
