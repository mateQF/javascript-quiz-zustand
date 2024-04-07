import { Button } from "@mui/material";

import { useQuestionsData } from "./hooks/useQuestionData";
import { useQuestionsStore } from "./store/questions";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correct - ❌ ${incorrect} incorrect - ❓ ${unanswered} unanswered`}</strong>{" "}
      <div style={{ marginTop: "1em" }}>
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </footer>
  );
};
