import "./App.css";
import { Console } from "./components/Console.tsx";
import { Button } from "./components/Button.tsx";

function App() {
  return (
    <div className="w-full min-h-screen p-8 bg-black">
      <div className="flex flex-row justify-center items-stretch m-0">
        <h1 className="text-primary">Console cmd 2024. Andrey999K</h1>
      </div>
      <div className="flex flex-col my-[10px]">
        <Console />
        <Button outlined align="end">
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default App;
