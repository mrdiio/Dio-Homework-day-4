import { Container } from 'react-bootstrap';
import meeting from '../../assets/meeting.svg';

export default function Title() {
  return (
    <Container className="py-3 pt-md-5">
      <div
        className="card mb-3 border-0"
        style={{ maxWidth: '540', height: '10' }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={meeting}
              className="img-fluid rounded-start p-3 img-thumbnail shadow-sm"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="h-100 d-flex flex-column">
              <div className="card-body">
                <h3 className="card-title">Hactive8 Meetup</h3>
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
              </div>
              <div className="card-footer bg-white border-0 d-flex align-items-end">
                <button className="btn btn-success px-5" type="submit">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
