import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import Title from './Components/Content/Title';
import NextMeetup from './Components/Content/NextMeetup';
import AboutMeetup from './Components/Content/AboutMeetup';
import Members from './Components/Content/Members';
import PastMeetup from './Components/Content/PastMeetup';

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />

        {/* Content */}
        <Title />

        <NextMeetup />

        <AboutMeetup />

        <Members />

        <PastMeetup />
        {/* end content */}

        <Footer />
      </div>
    </>
  );
}

export default App;
