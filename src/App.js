import './App.css';
import Header from "./components/Header.js";
import Icon from "./Ressources/Icons/HomeIcon.svg"

function App() {
  return (
    <div className="App">
      <Header
        showNotificationIcon={false}
        alternativeIconSrc = {Icon}
        />
    </div>
  );
}
export default App;
