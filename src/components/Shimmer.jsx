const Card = () => {
  return (
    <>
      <div className="card">
        <div className="header">
          <div className="header-img skeleton"></div>
          <div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </>
  );
};

const Shimmer = () => {
  const cards = new Array(18).fill("card");

  return (
    <div className="grid">
      {cards.map((card, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
