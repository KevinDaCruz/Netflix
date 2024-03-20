import "./App.css";
import data from "./assets/data.json";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />

      {data.map((elem) => {
        return (
          <div key={elem.category}>
            <h2>{elem.category}</h2>
            <div className="caroussel">
              {elem.images.map((img) => {
                return (
                  <img key={img} className="movies" src={img} alt=""></img>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
