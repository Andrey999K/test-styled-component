import "./App.css";
import { Title } from "./components/Title.tsx";
import { Flex } from "./components/Flex.tsx";
import { Console } from "./components/Console.tsx";
import { Button } from "./components/Button.tsx";

function App() {
  return (
    <div className="w-full min-h-screen p-8 bg-black">
      <Flex justify="center">
        <Title>Console cmd 2024. Andrey999K</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button outlined align="flex-end">
          Добавить
        </Button>
      </Flex>
    </div>
  );
}

export default App;
