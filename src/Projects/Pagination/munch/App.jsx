import ResturantItem from "./ResturantsItem";
import items from "./Items";
const App = () => {
  return (
    <div className="flex flex-wrap justify-center   h-full">
      {items.map((ele, idx) => (
        <ResturantItem key={idx} item={ele} />
      ))}
      <div></div>
    </div>
  );
};

export default App;
