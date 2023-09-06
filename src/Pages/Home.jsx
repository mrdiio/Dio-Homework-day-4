import Home from '../Components/Templates/Home';
import meeting from '../assets/meeting.svg';

export default function HomePage() {
  const pastMeetUp = [
    {
      date: '27 November 2022',
      title:
        '#9 Amet duis reprehenderit consectetur nisi ea veniam quis adipisicing.',
      viewers: 139,
    },
    {
      date: '27 Desember 2022',
      title:
        '#10 Esse nostrud duis id sunt ullamco reprehenderit nulla id laborum irure.',
      viewers: 249,
    },
    {
      date: '27 January 2023',
      title:
        '#11 Culpa ut exercitation magna incididunt sunt cillum eiusmod nostrud anim ad.',
      viewers: 307,
    },
  ];

  const memberData = [
    {
      name: 'Adhy Wiranata',
      position: 'Organizers',
    },
    {
      name: 'Jhon Doe',
      position: 'Co-Organizers',
    },
    {
      name: 'Jane Doe',
      position: 'Members',
    },
    {
      name: 'Dio',
      position: 'Members',
    },
  ];

  return (
    <>
      <Home
        image={meeting}
        title={'Hactive8 Meetup'}
        pastMeetUpData={pastMeetUp}
        memberData={memberData}
      />
    </>
  );
}
