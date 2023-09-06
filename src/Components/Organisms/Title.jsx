import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Title({ image, title, children }) {
  return (
    <Container className="py-3 pt-md-5">
      <div
        className="card mb-3 border-0"
        style={{ maxWidth: '540', height: '10' }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start p-3 img-thumbnail shadow-sm"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="h-100 d-flex flex-column">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {children}
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

Title.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
