const Shimmer = () => {
  return Array(8)
    .fill("")
    .map((item, indx) => (
      <div key={indx} className="restaurant-card bg-gray-300"></div>
    ));
};

export default Shimmer;
