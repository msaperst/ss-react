import {render, screen} from '@testing-library/react';
import Header, {Blog, OverallCommercial, Information, Overall, OverallPortraits, User, OverallWeddings} from './Navbar';

test( 'Verify Overall Header', () => {
    render(<Header/>);
    expect(screen.getByAltText(/Saperstone Studios, Photography and Retouch for Northern Virginia, DC, and Maryland/)).toBeInTheDocument();
    verifyAllLinksTopLevelLinks();
});

test( 'Verify Overall Menu', () => {
    render(<Overall/>);
    verifyAllLinksTopLevelLinks();
});

function verifyAllLinksTopLevelLinks() {
    expect(screen.getByText(/Portraits/)).toBeInTheDocument();
    expect(screen.getByText(/Weddings/)).toBeInTheDocument();
    expect(screen.getByText(/Commercial/)).toBeInTheDocument();
    expect(screen.getByText(/Blog/)).toBeInTheDocument();
    expect(screen.getByText(/Information/)).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
}

test('Portraits top has basic info', () => {
    render(<OverallPortraits/>);
    expect(screen.queryByText(/Details/)).toBeNull();
    screen.getByText(/Portraits/).click();
    expect(screen.getByLabelText(/Portrait/).childElementCount).toBe(4);
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/)).toBeInTheDocument();
    expect(screen.getByText(/Retouch/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
});

test('Weddings top has basic info', () => {
    render(<OverallWeddings/>);
    expect(screen.queryByText(/Details/)).toBeNull();
    screen.getByText(/Weddings/).click();
    expect(screen.getByLabelText(/Weddings/).childElementCount).toBe(4);
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/)).toBeInTheDocument();
    expect(screen.getByText(/Retouch/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
});

test('Commercial top has basic info', () => {
    render(<OverallCommercial/>);
    expect(screen.queryByText(/Details/)).toBeNull();
    screen.getByText(/Commercial/).click();
    expect(screen.getByLabelText(/Commercial/).childElementCount).toBe(4);
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/)).toBeInTheDocument();
    expect(screen.getByText(/Retouch/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
});

test('Blog has basic info', () => {
    render(<Blog user="null"/>);
    verifyBasicBlog();
});

test('Blog has normal info', () => {
    render(<Blog user={{username: "msaperst"}}/>);
    verifyBasicBlog();
});

test('Blog has user info', () => {
    render(<Blog user={{username: "msaperst", role: "downloader"}}/>);
    verifyBasicBlog();
});

function verifyBasicBlog() {
    expect(screen.queryByText(/Recent Posts/)).toBeNull();
    screen.getByText(/Blog/).click();
    expect(screen.getByLabelText(/Blog/).childElementCount).toBe(3);
    expect(screen.getByText(/Recent Posts/)).toBeInTheDocument();
    expect(screen.getByText(/Categories/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
}

test('Blog has admin info', () => {
    render(<Blog user={{username: "msaperst", role: "admin"}}/>);
    expect(screen.queryByText(/Recent Posts/)).toBeNull();
    screen.getByText(/Blog/).click();
    expect(screen.getByLabelText(/Blog/).childElementCount).toBe(5);
    expect(screen.getByText(/Recent Posts/)).toBeInTheDocument();
    expect(screen.getByText(/Categories/)).toBeInTheDocument();
    expect(screen.getByText(/Write New Post/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Posts/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
});

test( 'Information has basic info', () => {
    render(<Information user="null"/>);
    verifyBasicInformation();
});

test('Information has normal info', () => {
    render(<Information user={{username: "msaperst"}}/>);
    verifyBasicInformation();
});

test('Information has user info', () => {
    render(<Information user={{username: "msaperst", role: "downloader"}}/>);
    verifyBasicInformation();
});

function verifyBasicInformation() {
    expect(screen.queryByText(/Find Album/)).toBeNull();
    screen.getByText(/Information/).click();
    expect(screen.getByLabelText(/Information/).childElementCount).toBe(5);
    expect(screen.getByText(/Find Album/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Meet Leigh Ann/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
}

test('Information has admin info', () => {
    render(<Information user={{username: "msaperst", role: "admin"}}/>);
    expect(screen.queryByText(/Find Album/)).toBeNull();
    screen.getByText(/Information/).click();
    expect(screen.getByLabelText(/Information/).childElementCount).toBe(4);
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Meet Leigh Ann/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
});

test( 'User has basic info', () => {
    render(<User user={null}/>);
    expect(screen.getByText(/Login/)).toBeInTheDocument();
});

test('User has normal info', () => {
    render(<User user={{username: "msaperst"}}/>);
    verifyBasicUser();
});

test('User has user info', () => {
    render(<User user={{username: "msaperst", role: "downloader"}}/>);
    verifyBasicUser();
});

function verifyBasicUser() {
    expect(screen.queryByText(/View Albums/)).toBeNull();
    screen.getByText(/msaperst/).click();
    expect(screen.getByLabelText(/msaperst/).childElementCount).toBe(3);
    expect(screen.getByText(/View Albums/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Profile/)).toBeInTheDocument();
    expect(screen.getByText(/Logout/)).toBeInTheDocument();
}

test('User has admin info', () => {
    render(<User user={{username: "msaperst", role: "admin"}}/>);
    expect(screen.queryByText(/Manage Users/)).toBeNull();
    screen.getByText(/msaperst/).click();
    expect(screen.getByLabelText(/msaperst/).childElementCount).toBe(7);
    expect(screen.getByText(/Manage Users/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Albums/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Products/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Contracts/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Profile/)).toBeInTheDocument();
    expect(screen.getByText(/Logout/)).toBeInTheDocument();
});