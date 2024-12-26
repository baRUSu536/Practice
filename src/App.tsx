import CardList from "./components/card-list";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <section className="relative pt-[150px] flex flex-col items-center font-mono">
      <Header />
      <CardList />
      <Footer />
    </section>
  );
};

export default App;
