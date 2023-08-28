/* eslint-disable react/prop-types */
export default function SectionTitle({ title, seeAll }) {
  return (
    <div className="w-full border-bottom pb-1">
      <div className="d-flex justify-content-between">
        <h4>{title}</h4>

        {seeAll && (
          <a href="#see-all" className="text-decoration-none text-black">
            See all
          </a>
        )}
      </div>
    </div>
  );
}
