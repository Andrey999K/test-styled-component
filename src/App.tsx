import "./App.css";
import styled from "styled-components";
import { Title } from "./components/Title.tsx";
import { Flex } from "./components/Flex.tsx";
import { Console } from "./components/Console.tsx";
import { Button } from "./components/Button.tsx";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Console cmd 2024. Andrey999K</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button outlined align="flex-end">
          Добавить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
