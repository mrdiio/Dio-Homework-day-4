export default function CardPastMeetup({ data }) {
  return data.map((item, i) => (
    <div className="col-md-4" key={i}>
      <div className="card h-100">
        <div className="card-body">
          <h6 className="card-title border-bottom pb-2">{item.date}</h6>
          <p className="card-text">{item.title}</p>
        </div>
        <div className="card-footer bg-white border-0 d-flex align-items-end">
          <small className="text-muted">{item.viewers} went</small>

          <button className="btn btn-success px-5 ms-auto" type="submit">
            View
          </button>
        </div>
      </div>
    </div>
  ));
}
