import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';
import CardPastMeetup from './CardPastMeetup';

export default function PastMeetup() {
  const data = [
    {
      date: '27 November 2022',
      title: 'Amet duis reprehenderit consectetur nisi ea veniam quis adipisicing.',
      viewers: 139,
    },
    {
      date: '27 Desember 2022',
      title: 'Esse nostrud duis id sunt ullamco reprehenderit nulla id laborum irure.',
      viewers: 249,
    },
    {
      date: '27 January 2023',
      title: 'Culpa ut exercitation magna incididunt sunt cillum eiusmod nostrud anim ad.',
      viewers: 307,
    },
  ];

  return (
    <Container className="py-2">
      <SectionTitle title="Past Meetup" seeAll={true} />

      <div className="row py-3 g-3">
        <CardPastMeetup data={data} />
      </div>
    </Container>
  );
}
