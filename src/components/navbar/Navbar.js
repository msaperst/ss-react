import banner from './banner.png';
import './Navbar.css';
import 'react-bootstrap/Navbar'
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    let menu;
    switch (props.section) {
        case "portrait":
            menu = <Portrait user={props.user}/>;
            break;
        case "wedding":
            menu = <Wedding user={props.user}/>;
            break;
        case "commercial":
            menu = <Commercial user={props.user}/>;
            break;
        default:
            menu = <Overall user={props.user}/>
    }
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" id="saperstone-studios-banner">
                    <img
                        src={banner}
                        className="d-inline-block align-top"
                        alt="Saperstone Studios, Photography and Retouch for Northern Virginia, DC, and Maryland"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="saperstone-studios-navbar-nav"/>
                <Navbar.Collapse id="saperstone-studios-navbar-nav">
                    {menu}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function Overall(props) {
    return (
        <Nav className="ml-auto">
            <OverallPortraits/>
            <OverallWeddings/>
            <OverallCommercial/>
            <Blog user={props.user}/>
            <Information user={props.user}/>
            <User user={props.user}/>
        </Nav>
    );
}

function Portrait(props) {
    return (
        <Nav className="ml-auto">
            <PortraitDetails/>
            <PortraitGallery/>
            <PortraitRetouch/>
            <Nav.Link href="#home">Raves</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <User user={props.user}/>
        </Nav>
    )
}

function Wedding(props) {
    return (
        <Nav className="ml-auto">
            <WeddingDetails/>
            <WeddingGallery/>
            <Nav.Link href="#home">Retouch</Nav.Link>
            <Nav.Link href="#home">Raves</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <User user={props.user}/>
        </Nav>
    )
}

function Commercial(props) {
    return (
        <Nav className="ml-auto">
            <CommercialDetails/>
            <CommercialGallery/>
            <Nav.Link href="#home">Retouch</Nav.Link>
            <Nav.Link href="#home">Raves</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <User user={props.user}/>
        </Nav>
    )
}

function OverallPortraits() {
    return (
        <NavDropdown title="Portraits" id="portrait-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Retouch</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Raves</NavDropdown.Item>
        </NavDropdown>
    )
}

function OverallWeddings() {
    return (
        <NavDropdown title="Weddings" id="weddings-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Retouch</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Raves</NavDropdown.Item>
        </NavDropdown>
    )
}

function OverallCommercial() {
    return (
        <NavDropdown title="Commercial" id="commercial-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Retouch</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Raves</NavDropdown.Item>
        </NavDropdown>
    )
}

function PortraitDetails() {
    return (
        <NavDropdown title="Details" id="details-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Session Information</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">The Process</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Products and Investment</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">What to Wear</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Home Studio</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
        </NavDropdown>
    )
}

function PortraitGallery() {
    return (
        <NavDropdown title="Gallery" id="gallery-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Maternity</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Newborns</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">6 Months</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">First Birthday</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Kids and Family</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Seniors</NavDropdown.Item>
        </NavDropdown>
    )
}

function PortraitRetouch() {
    return (
        <NavDropdown title="Retouch" id="retouch-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Portrait Retouch</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Restoration</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Other Edits</NavDropdown.Item>
        </NavDropdown>
    )
}

function WeddingDetails() {
    return (
        <NavDropdown title="Details" id="details-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">The Wedding Experience</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Engagements</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">The Process</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Products and Investment</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Night Photography</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Photobooth</NavDropdown.Item>
        </NavDropdown>
    )
}

function WeddingGallery() {
    return (
        <NavDropdown title="Gallery" id="gallery-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Surprise Proposals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Engagements</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Weddings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Night Photography</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Photobooth</NavDropdown.Item>
        </NavDropdown>
    )
}

function CommercialDetails() {
    return (
        <NavDropdown title="Details" id="details-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Background Options</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">What to Expect</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
        </NavDropdown>
    )
}

function CommercialGallery() {
    return (
        <NavDropdown title="Gallery" id="gallery-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Studio Headshots</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">On Location</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Company Headshots and Team Photos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Professional Branding</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Photobooth</NavDropdown.Item>
        </NavDropdown>
    )
}

function Blog(props) {
    let items = [];
    if (props.user && props.user.role === "admin") {
        items.push(<NavDropdown.Item key="3" href="#action/3.3">Write New Post</NavDropdown.Item>);
        items.push(<NavDropdown.Item key="4" href="#action/3.3">Manage Posts</NavDropdown.Item>);
    }
    return (
        <NavDropdown title="Blog" id="blog-dropdown-nav">
            <NavDropdown.Item href="#action/3.1">Recent Posts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
            {items.map((item) => {
                return item;
            })}
            <Form inline>
                <FormControl id="blog-search-input" type="text" placeholder="Search" className="mx-sm-2"/>
                <Button variant="light"><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
        </NavDropdown>
    )
}

function Information(props) {
    let items = [];
    if (!props.user || props.user.role !== "admin") {
        items.push(<NavDropdown.Item key="1" href="#album">Find Album</NavDropdown.Item>);
    }
    return (
        <NavDropdown title="Information" id="information-dropdown-nav">
            {items.map((item) => {
                return item;
            })}
            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Meet Leigh Ann</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Raves</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
        </NavDropdown>
    )
}

function User(props) {
    let items = [];
    if (!props.user) {     //if no user
        return <Nav.Link href="#home">Login</Nav.Link>
    } else if (props.user.role === "admin") {
        items.push(<NavDropdown.Item key="1" href="#album">Manage Users</NavDropdown.Item>);
        items.push(<NavDropdown.Item key="2" href="#album">Manage Albums</NavDropdown.Item>);
        items.push(<NavDropdown.Item key="3" href="#album">Manage Products</NavDropdown.Item>);
        items.push(<NavDropdown.Item key="4" href="#album">Manage Contracts</NavDropdown.Item>);
        items.push(<NavDropdown.Item key="5" href="#album">View Usage</NavDropdown.Item>);
    } else {
        items.push(<NavDropdown.Item key="1" href="#album">View Albums</NavDropdown.Item>);
    }
    return (
        <NavDropdown title={props.user.username} id="user-dropdown-nav">
            {items.map((item) => {
                return item;
            })}
            <NavDropdown.Item href="#action/3.1">Manage Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><FontAwesomeIcon icon={faSignOutAlt}/> Logout</NavDropdown.Item>
        </NavDropdown>
    )
}

export default Header;
export {
    Overall,
    Portrait,
    Wedding,
    Commercial,
    OverallPortraits,
    OverallWeddings,
    OverallCommercial,
    PortraitDetails,
    PortraitGallery,
    PortraitRetouch,
    WeddingDetails,
    WeddingGallery,
    CommercialDetails,
    CommercialGallery,
    Blog,
    Information,
    User,
}