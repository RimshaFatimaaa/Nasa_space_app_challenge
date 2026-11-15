import { BadgeShelf } from "@/components/BadgeShelf";
import { QuizBoard } from "@/components/QuizBoard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "Test what you learned about NASA’s Moon and Mars machines. No account required.",
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <p className="text-xs tracking-[0.18em] text-cyan uppercase">Knowledge challenge</p>
        <h1 className="mt-3 font-display text-5xl">Quiz</h1>
        <p className="mt-4 leading-7 text-silver">
          Answer every question, then check. You will see which answers are right, a short explanation, and your score. You can try again. Nothing is sent to a server.
        </p>
      </header>
      <div className="mt-8">
        <QuizBoard />
      </div>
      <div className="mt-14">
        <BadgeShelf />
      </div>
    </div>
  );
}
