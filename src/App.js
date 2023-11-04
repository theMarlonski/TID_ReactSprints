import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import IconImg from "./Ressources/Icons/NotificationBell.svg"

function App() {
  return (
    <div className="App">
      <Header
        IconPath = {IconImg}
        />
      <Footer />
    </div>
  );
}
export default App;
