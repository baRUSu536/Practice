import CardList from "./components/card-list";
import Footer from "./components/footer";
import Header from "./components/header";

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
