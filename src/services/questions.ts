export const getAllQuestions = async (limit: number) => {
  const res = await fetch("http://localhost:5173/data.json");
  const questionJson = await res.json();

  const questions = questionJson
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  return questions;
};
