import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <section className="relative pt-[150px] flex flex-col items-center">
      <Header/>
      <CardList/>
      <Footer/>
    </section>
  )
}

export default App
