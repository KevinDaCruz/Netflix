import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <>
      {data.map((elem) => {
        console.log(elem);
        return (
          <>
            <div>{elem.category}</div>
            {elem.images.map((img) => {
              return (
                <>
                  <img src="" alt="" />
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}

export default App;
