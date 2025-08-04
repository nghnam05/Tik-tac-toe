import GameBoard from "./assets/components/GameBoard/GameBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () =>{
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center flex-col">
      <div className="w-full max-w-[400px]">
        <h1 className="text-white text-center sm:text-3xl text-4xl font-semibold mb-4 md:mb-6">
          Tik Tac Toe Game
        </h1>
        <GameBoard></GameBoard>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>
    </div>
  );
}

export default App;