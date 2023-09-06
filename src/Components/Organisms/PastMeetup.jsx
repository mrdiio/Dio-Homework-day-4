import { Container } from 'react-bootstrap';
import SectionTitle from '../Molecules/SectionTitle';
import CardPastMeetup from '../Molecules/CardPastMeetup';

import PropTypes from 'prop-types';

export default function PastMeetup({ data }) {
  return (
    <Container className="py-2">
      <SectionTitle title="Past Meetup" seeAll={true} />

      <div className="row py-3 g-3">
        <CardPastMeetup data={data} />
      </div>
    </Container>
  );
}

PastMeetup.propTypes = {
  data: PropTypes.array,
};
