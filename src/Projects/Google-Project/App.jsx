import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
