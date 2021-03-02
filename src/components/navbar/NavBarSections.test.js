import {render, screen} from '@testing-library/react';
import Header, {
    Commercial,
    CommercialDetails,
    CommercialGallery, Overall,
    Portrait,
    PortraitDetails,
    PortraitGallery, PortraitRetouch,
    Wedding,
    WeddingDetails,
    WeddingGallery
} from './Navbar';

test( 'Verify Portraits Header', () => {
    render(<Header section="portrait"/>);
    expect(screen.getByAltText(/Saperstone Studios, Photography and Retouch for Northern Virginia, DC, and Maryland/)).toBeInTheDocument();
    verifyHighLevelMenu();
});

test('Verify Portraits Menu', () => {
    render(<Portrait/>);
    verifyHighLevelMenu();
});

test('Portraits Details has basic info', () => {
    render(<PortraitDetails/>);
    expect(screen.queryByText(/Session Information/)).toBeNull();
    screen.getByText(/Details/).click();
    expect(screen.getByLabelText(/Details/).childElementCount).toBe(6);
    expect(screen.getByText(/Session Information/)).toBeInTheDocument();
    expect(screen.getByText(/The Process/)).toBeInTheDocument();
    expect(screen.getByText(/Products and Investment/)).toBeInTheDocument();
    expect(screen.getByText(/What to Wear/)).toBeInTheDocument();
    expect(screen.getByText(/Home Studio/)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/)).toBeInTheDocument();
});

test('Portraits Gallery has basic info', () => {
    render(<PortraitGallery/>);
    expect(screen.queryByText(/Maternity/)).toBeNull();
    screen.getByText(/Gallery/).click();
    expect(screen.getByLabelText(/Gallery/).childElementCount).toBe(6);
    expect(screen.getByText(/Maternity/)).toBeInTheDocument();
    expect(screen.getByText(/Newborns/)).toBeInTheDocument();
    expect(screen.getByText(/6 Months/)).toBeInTheDocument();
    expect(screen.getByText(/First Birthday/)).toBeInTheDocument();
    expect(screen.getByText(/Kids and Family/)).toBeInTheDocument();
    expect(screen.getByText(/Seniors/)).toBeInTheDocument();
});

test('Portraits Retouch has basic info', () => {
    render(<PortraitRetouch/>);
    expect(screen.queryByText(/Portrait Retouch/)).toBeNull();
    screen.getByText(/Retouch/).click();
    expect(screen.getByLabelText(/Retouch/).childElementCount).toBe(3);
    expect(screen.getByText(/Portrait Retouch/)).toBeInTheDocument();
    expect(screen.getByText(/Restoration/)).toBeInTheDocument();
    expect(screen.getByText(/Other Edits/)).toBeInTheDocument();
});

test( 'Verify Weddings Header', () => {
    render(<Header section="wedding"/>);
    expect(screen.getByAltText(/Saperstone Studios, Photography and Retouch for Northern Virginia, DC, and Maryland/)).toBeInTheDocument();
    verifyHighLevelMenu();
});

test('Verify Weddings Menu', () => {
    render(<Wedding/>);
    verifyHighLevelMenu();
});

test('Weddings Details has basic info', () => {
    render(<WeddingDetails/>);
    expect(screen.queryByText(/The Wedding Experience/)).toBeNull();
    screen.getByText(/Details/).click();
    expect(screen.getByLabelText(/Details/).childElementCount).toBe(6);
    expect(screen.getByText(/The Wedding Experience/)).toBeInTheDocument();
    expect(screen.getByText(/Engagements/)).toBeInTheDocument();
    expect(screen.getByText(/The Process/)).toBeInTheDocument();
    expect(screen.getByText(/Products and Investment/)).toBeInTheDocument();
    expect(screen.getByText(/Night Photography/)).toBeInTheDocument();
    expect(screen.getByText(/Photobooth/)).toBeInTheDocument();
});

test('Weddings Gallery has basic info', () => {
    render(<WeddingGallery/>);
    expect(screen.queryByText(/Surprise Proposals/)).toBeNull();
    screen.getByText(/Gallery/).click();
    expect(screen.getByLabelText(/Gallery/).childElementCount).toBe(5);
    expect(screen.getByText(/Surprise Proposals/)).toBeInTheDocument();
    expect(screen.getByText(/Engagements/)).toBeInTheDocument();
    expect(screen.getByText(/Weddings/)).toBeInTheDocument();
    expect(screen.getByText(/Night Photography/)).toBeInTheDocument();
    expect(screen.getByText(/Photobooth/)).toBeInTheDocument();
});

test( 'Verify Commercial Header', () => {
    render(<Header section="commercial"/>);
    expect(screen.getByAltText(/Saperstone Studios, Photography and Retouch for Northern Virginia, DC, and Maryland/)).toBeInTheDocument();
    verifyHighLevelMenu();
});

test('Verify Commercial Menu', () => {
    render(<Commercial/>);
    verifyHighLevelMenu();
});

test('Commercial Details has basic info', () => {
    render(<CommercialDetails/>);
    expect(screen.queryByText(/Services/)).toBeNull();
    screen.getByText(/Details/).click();
    expect(screen.getByLabelText(/Details/).childElementCount).toBe(5);
    expect(screen.getByText(/Services/)).toBeInTheDocument();
    expect(screen.getByText(/Background Options/)).toBeInTheDocument();
    expect(screen.getByText(/What to Expect/)).toBeInTheDocument();
    expect(screen.getByText(/Pricing/)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/)).toBeInTheDocument();
});

test('Commercial Gallery has basic info', () => {
    render(<CommercialGallery/>);
    expect(screen.queryByText(/Studio Headshots/)).toBeNull();
    screen.getByText(/Gallery/).click();
    expect(screen.getByLabelText(/Gallery/).childElementCount).toBe(6);
    expect(screen.getByText(/Studio Headshots/)).toBeInTheDocument();
    expect(screen.getByText(/On Location/)).toBeInTheDocument();
    expect(screen.getByText(/Company Headshots and Team Photos/)).toBeInTheDocument();
    expect(screen.getByText(/Professional Branding/)).toBeInTheDocument();
    expect(screen.getByText(/Events/)).toBeInTheDocument();
    expect(screen.getByText(/Photobooth/)).toBeInTheDocument();
});

function verifyHighLevelMenu() {
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/)).toBeInTheDocument();
    expect(screen.getByText(/Retouch/)).toBeInTheDocument();
    expect(screen.getByText(/Raves/)).toBeInTheDocument();
    expect(screen.getByText(/Blog/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
}