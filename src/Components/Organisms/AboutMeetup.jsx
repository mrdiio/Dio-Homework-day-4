import { Container } from 'react-bootstrap';
import SectionTitle from '../Molecules/SectionTitle';

import PropTypes from 'prop-types';

export default function AboutMeetup({ children }) {
  return (
    <Container className="py-2">
      <SectionTitle title="About Meetup" />

      <div className="row g-3 pt-3">
        <div className="col-md-12 px-3 px-md-2">{children}</div>
      </div>
    </Container>
  );
}

AboutMeetup.propTypes = {
  children: PropTypes.node,
};
