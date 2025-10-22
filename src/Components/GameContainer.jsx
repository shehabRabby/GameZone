import React from "react";
import AppsCard from "./AppsCard";

const GameContainer = ({ allData }) => {
  // Sort by rating
  const sortedData = [...allData].sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  );

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Popular Games</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedData.map((item) => (
            <AppsCard key={item.id} game={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameContainer;
