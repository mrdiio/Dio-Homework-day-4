import PropTypes from 'prop-types';

export default function CardMember({ position, name }) {
  return (
    <div className="col-md-6 col-6">
      <div className="card shadow-sm p-3">
        <div className="row g-2 h-100">
          <div className="col-md-2 d-flex justify-content-center">
            <img
              src="https://via.placeholder.com/80"
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="h-100 d-flex align-items-center">
              <div className="w-100">
                <h6 className="fw-normal">{position}</h6>
                <span className="text-body-tertiary">{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardMember.propTypes = {
  position: PropTypes.string,
  name: PropTypes.string,
};
