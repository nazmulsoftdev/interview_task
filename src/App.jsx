import Conatiner from "./components/Conatiner";
import Logo from "./components/reuseable/Logo";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <Logo />
      <Conatiner />
    </div>
  );
}

export default App;
