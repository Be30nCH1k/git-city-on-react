export default function AttractionCard({ attraction }) {
    return (
      <div className="attraction-card">
        <h2>{attraction.name}</h2>
        <p>{attraction.description}</p>
        <Link to={`/attractions/${attraction.id}`}>Подробнее</Link>
      </div>
    );
  }