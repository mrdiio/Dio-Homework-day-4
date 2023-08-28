import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';

export default function AboutMeetup() {
  return (
    <Container className="py-2">
      <SectionTitle title="About Meetup" />

      <div className="row g-3 pt-3">
        <div className="col-md-12">
          <p>
            Come and meet other developers Labore nulla dolore sunt quis ad
            velit et aliqua id consequat amet excepteur magna cillum.
          </p>

          <p>Twitter: @twitter Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </Container>
  );
}
