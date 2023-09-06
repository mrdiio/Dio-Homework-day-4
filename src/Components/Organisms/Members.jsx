import { Container } from 'react-bootstrap';
import SectionTitle from '../Molecules/SectionTitle';
import CardMember from '../Molecules/CardMember';

import PropTypes from 'prop-types';

export default function Members({ data }) {
  return (
    <Container className="py-2">
      <SectionTitle title="Members" seeAll={true} />

      <div className="row g-3 py-3">
        {data.map((item, i) => (
          <CardMember
            key={i}
            position={item.position}
            name={item.name}
            image={'https://via.placeholder.com/80'}
          />
        ))}
      </div>
    </Container>
  );
}

Members.propTypes = {
  data: PropTypes.array,
};
