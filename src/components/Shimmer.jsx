const Card = () => {
  return (
    <>
      <div className="p-4 bg-emerald-50 h-full drop-shadow-sm rounded-xl animate-pulse">
        <div className="header">
          <div className="h-36 bg-emerald-100 rounded-lg "></div>
          <div className="flex flex-col gap-1 py-2">
            <div className="h-4 w-1/2 bg-emerald-100"></div>
            <div className="h-4 w-3/4 bg-emerald-100"></div>
          </div>
        </div>
        <div className="flex flex-col gap-1 py-1">
          <div className="h-3 bg-emerald-100"></div>
          <div className="h-3 bg-emerald-100"></div>
          <div className="h-3 bg-emerald-100"></div>
          <div className="h-3 bg-emerald-100"></div>
        </div>
      </div>
    </>
  );
};

const Shimmer = () => {
  const cards = new Array(18).fill("card");

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 max-w-screen-xl mx-auto">
      {cards.map((card, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
