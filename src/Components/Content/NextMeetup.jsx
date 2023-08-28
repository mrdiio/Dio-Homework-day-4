import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';

export default function NextMeetup() {
  return (
    <Container className="py-2">
      <SectionTitle title="Next Meetup" />

      <div className="row g-3 py-3">
        <div className="col-md-12">
          <div className="card shadow-sm p-3">
            <h6 className="fw-normal">Awesome meetup and event</h6>
            <small className="text-body-tertiary">25 January 2019</small>

            <div className="pt-3">
              <p>Hello, </p>
              <p>
                Irure eiusmod deserunt minim laborum incididunt duis cillum sint
                sit. Nostrud proident nulla nostrud duis amet Lorem. Mollit
                consectetur consequat fugiat nulla amet dolor ad aute.
                Reprehenderit minim irure exercitation minim laborum ea labore
                laborum est. Magna ex adipisicing non enim tempor. Nisi
                consequat anim incididunt culpa officia amet eu cupidatat
                incididunt. Lorem amet esse veniam dolor elit deserunt enim
                voluptate.
              </p>

              <p>----</p>

              <p>See you there!</p>

              <p>Best, Dio</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
