"use client";

import { matchPairs, quizQuestions } from "@/data/quizzes";
import { recordQuiz } from "@/lib/progress";
import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

type Result = "unanswered" | "correct" | "incorrect";

export function QuizBoard() {
  const [picked, setPicked] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);
  const [quizHint, setQuizHint] = useState("");
  const [matchHint, setMatchHint] = useState("");

  const missions = useMemo(() => {
    const values = matchPairs.map((pair) => pair.mission);
    return [...values].sort((a, b) => a.localeCompare(b));
  }, []);

  const correctCount = quizQuestions.filter((question) => picked[question.id] === question.answer).length;
  const matchScore = matchPairs.filter((pair) => matches[pair.id] === pair.mission).length;

  function resultFor(id: string, answer: string): Result {
    if (!checked || !picked[id]) return "unanswered";
    return picked[id] === answer ? "correct" : "incorrect";
  }

  function checkQuiz() {
    if (checked) return;
    if (quizQuestions.some((question) => !picked[question.id])) {
      setQuizHint("Answer every question, then check.");
      return;
    }
    setQuizHint("");
    setChecked(true);
    const correctIds = quizQuestions.filter((question) => picked[question.id] === question.answer).map((question) => question.id);
    recordQuiz(correctIds);
  }

  function chooseMatch(pairId: string, mission: string) {
    setMatchHint("");
    setMatches((current) => {
      const next = { ...current, [pairId]: mission };
      if (mission) {
        for (const id of Object.keys(next)) {
          if (id !== pairId && next[id] === mission) delete next[id];
        }
      }
      return next;
    });
  }

  function checkMatches() {
    if (matchChecked) return;
    if (matchPairs.some((pair) => !matches[pair.id])) {
      setMatchHint("Match every machine, then check. Each mission is used once.");
      return;
    }
    setMatchHint("");
    setMatchChecked(true);
  }

  function retry() {
    setPicked({});
    setChecked(false);
    setQuizHint("");
  }

  return (
    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="quick-quiz">
        <div className="text-card flex flex-wrap items-end justify-between gap-3 rounded-3xl border border-white/10 px-5 py-4">
          <h2 id="quick-quiz" className="font-display text-3xl">Quick quiz and true or false</h2>
          {checked ? (
            <p className="font-display text-xl text-cyan">
              Score {correctCount}/{quizQuestions.length}
            </p>
          ) : null}
        </div>
        <ol className="space-y-5">
          {quizQuestions.map((question, index) => {
            const result = resultFor(question.id, question.answer);
            return (
              <li key={question.id} className="exhibit-card rounded-3xl border border-white/10 p-5">
                <p className="text-xs tracking-[0.14em] text-silver uppercase">
                  {question.kind === "boolean" ? "True or false" : "Multiple choice"} · {index + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-snug">{question.prompt}</h3>
                <div className="mt-4 grid gap-2">
                  {(question.kind === "boolean" ? ["true", "false"] : question.choices ?? []).map((choice) => {
                    const selected = picked[question.id] === choice;
                    const label = choice === "true" ? "True" : choice === "false" ? "False" : choice;
                    return (
                      <button
                        key={choice}
                        type="button"
                        disabled={checked}
                        aria-pressed={selected}
                        onClick={() => setPicked((current) => ({ ...current, [question.id]: choice }))}
                        className={`rounded-2xl border px-4 py-3 text-left ${
                          selected ? "border-cyan bg-cyan/10" : "border-white/10 hover:border-white/30"
                        } disabled:cursor-default`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                {checked ? (
                  <p className={`mt-4 text-sm leading-6 ${result === "correct" ? "text-cyan" : "text-[#ffb59a]"}`}>
                    {result === "correct" ? "Correct. " : "Not quite. "}
                    {question.explanation}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={checkQuiz}
            className="rounded-full bg-star px-5 py-2.5 font-medium text-space"
          >
            Check answers
          </button>
          <button type="button" onClick={retry} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5">
            <RotateCcw aria-hidden="true" size={16} />
            Try again
          </button>
          {quizHint ? <p className="text-sm text-sand">{quizHint}</p> : null}
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="matching">
        <div className="text-card rounded-3xl border border-white/10 px-5 py-4">
          <h2 id="matching" className="font-display text-3xl">Match the machine to its mission</h2>
          <p className="mt-2 text-sm text-silver">Each mission is used once. A mission leaves the list after you choose it.</p>
        </div>
        <ul className="space-y-3">
          {matchPairs.map((pair) => {
            const right = matchChecked && matches[pair.id] === pair.mission;
            const wrong = matchChecked && matches[pair.id] !== pair.mission;
            return (
              <li key={pair.id} className="text-card grid min-w-0 items-center gap-3 rounded-2xl border border-white/10 p-4 sm:grid-cols-[1fr_1fr]">
                <label htmlFor={`match-${pair.id}`} className="font-display text-lg">{pair.hardware}</label>
                <select
                  id={`match-${pair.id}`}
                  className="w-full min-w-0 rounded-xl border border-white/15 bg-space px-3 py-3 text-base"
                  value={matches[pair.id] ?? ""}
                  disabled={matchChecked}
                  onChange={(event) => chooseMatch(pair.id, event.target.value)}
                >
                  <option value="">Choose a mission</option>
                  {missions.filter((mission) => {
                    const owner = Object.entries(matches).find(([, value]) => value === mission)?.[0];
                    return !owner || owner === pair.id;
                  }).map((mission) => (
                    <option key={mission} value={mission}>{mission}</option>
                  ))}
                </select>
                {right ? <p className="text-sm text-cyan sm:col-span-2">Correct.</p> : null}
                {wrong ? (
                  <p className="text-sm text-[#ffb59a] sm:col-span-2">
                    Not quite. {pair.hardware} belongs with {pair.mission}.
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
        {matchChecked ? (
          <p className="font-display text-xl text-cyan">Score {matchScore}/{matchPairs.length}</p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={checkMatches}
            className="rounded-full bg-star px-5 py-2.5 font-medium text-space"
          >
            Check matches
          </button>
          <button
            type="button"
            onClick={() => {
              setMatches({});
              setMatchChecked(false);
              setMatchHint("");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5"
          >
            <RotateCcw aria-hidden="true" size={16} />
            Try again
          </button>
          {matchHint ? <p className="text-sm text-sand">{matchHint}</p> : null}
        </div>
      </section>
    </div>
  );
}
