import "./App.css";
import FilmTitle from "./components/form/FilmTitle";

function App() {
  return (
    <div className="App">
      <h2 className="text-4xl font-bold text-white mt-16 text-start">
        List a <span className="text-[#F69E1E]">Film</span>
      </h2>
      <div className="bg mx-36 my-20 p-6">
        <FilmTitle/>
      </div>
    </div>
  );
}

export default App;
