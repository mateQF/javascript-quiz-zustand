import "./App.css";

import { JavaScriptLogo } from "./JavaScriptLogo";
import { Container, Stack, Typography } from "@mui/material";
import { Start } from "./Start";

import { Game } from "./Game";
import { useQuestionsStore } from "./store/questions";

function App() {
  const questions = useQuestionsStore(state => state.questions)
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
          sx={{ marginBottom: '1em' }}
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            Javascript Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
