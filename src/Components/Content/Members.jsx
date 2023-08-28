import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';
import CardMember from './CardMember';

export default function Members() {
  return (
    <Container className="py-2">
      <SectionTitle title="Members" seeAll={true} />

      <div className="row g-3 py-3">
        <CardMember position={'Organizers'} name={'Adhy Wiranata'} />

        <CardMember position={'Co-Organizers'} name={'Jhon Doe'} />

        <CardMember position={'Members'} name={'Jane Doe'} />

        <CardMember position={'Members'} name={'Dio'} />
      </div>
    </Container>
  );
}
