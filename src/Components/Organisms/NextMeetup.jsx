import { Container } from 'react-bootstrap';
import SectionTitle from '../Molecules/SectionTitle';

import PropTypes from 'prop-types';

export default function NextMeetup({ children }) {
  return (
    <Container className="py-2">
      <SectionTitle title="Next Meetup" />

      <div className="row g-3 py-3">
        <div className="col-md-12">
          <div className="card shadow-sm p-3">{children}</div>
        </div>
      </div>
    </Container>
  );
}

NextMeetup.propTypes = {
  children: PropTypes.node,
};
