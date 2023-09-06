import AboutMeetup from '../Organisms/AboutMeetup';
import Footer from '../Organisms/Footer';
import Members from '../Organisms/Members';
import MyNavbar from '../Organisms/Navbar';
import NextMeetup from '../Organisms/NextMeetup';
import PastMeetup from '../Organisms/PastMeetup';
import Title from '../Organisms/Title';

import PropTypes from 'prop-types';

export default function Home({ image, title, pastMeetUpData, memberData }) {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />

        <Title image={image} title={title}>
          <div className="row g-2 pt-2 pt-md-3 p-0 p-md-3">
            <div className="col-md-2">
              <span className="text-muted">Location</span>
            </div>
            <div className="col-md-10">
              <span className="fw-semibold">Jakarta, Indonesia</span>
            </div>
            <div className="col-md-2">
              <span className="text-muted">Members</span>
            </div>
            <div className="col-md-10">
              <span className="fw-semibold">1,078</span>
            </div>
            <div className="col-md-2">
              <span className="text-muted">Organizers</span>
            </div>
            <div className="col-md-10">
              <span className="fw-semibold">Adhy Wiranata</span>
            </div>
          </div>
        </Title>

        <NextMeetup>
          <h6 className="fw-normal">Awesome meetup and event</h6>
          <small className="text-body-tertiary">25 January 2019</small>

          <div className="pt-3">
            <p>Hello, </p>
            <p>
              Irure eiusmod deserunt minim laborum incididunt duis cillum sint
              sit. Nostrud proident nulla nostrud duis amet Lorem. Mollit
              consectetur consequat fugiat nulla amet dolor ad aute.
              Reprehenderit minim irure exercitation minim laborum ea labore
              laborum est. Magna ex adipisicing non enim tempor. Nisi consequat
              anim incididunt culpa officia amet eu cupidatat incididunt. Lorem
              amet esse veniam dolor elit deserunt enim voluptate.
            </p>

            <p>----</p>

            <p>See you there!</p>

            <p>Best, Dio</p>
          </div>
        </NextMeetup>

        <AboutMeetup>
          <p>
            Come and meet other developers Labore nulla dolore sunt quis ad
            velit et aliqua id consequat amet excepteur magna cillum.
          </p>

          <p>Twitter: @twitter Lorem ipsum dolor sit amet, consectetur</p>
        </AboutMeetup>

        <Members data={memberData} />

        <PastMeetup data={pastMeetUpData} />

        <Footer />
      </div>
    </>
  );
}

Home.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  pastMeetUpData: PropTypes.array,
  memberData: PropTypes.array,
};
