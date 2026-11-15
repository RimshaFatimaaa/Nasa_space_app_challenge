"use client";

import { badges, quizQuestions, type BadgeId } from "@/data/quizzes";
import { allHardware } from "@/data/catalog";

const STORAGE_KEY = "beyond-earth-progress";

export interface ProgressState {
  visited: string[];
  timelineOpens: string[];
  correctIds: string[];
  earned: BadgeId[];
}

const emptyProgress = (): ProgressState => ({
  visited: [],
  timelineOpens: [],
  correctIds: [],
  earned: [],
});

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      visited: Array.isArray(parsed.visited) ? parsed.visited : [],
      timelineOpens: Array.isArray(parsed.timelineOpens) ? parsed.timelineOpens : [],
      correctIds: Array.isArray(parsed.correctIds) ? parsed.correctIds : [],
      earned: Array.isArray(parsed.earned) ? (parsed.earned as BadgeId[]) : [],
    };
  } catch {
    return emptyProgress();
  }
}

function saveProgress(next: ProgressState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("beyond-earth-progress"));
}

function withBadges(progress: ProgressState, roverRoundClear = false): ProgressState {
  const earned = new Set(progress.earned);
  const moonIds = allHardware.filter((item) => item.destination === "Moon").map((item) => item.id);
  const marsIds = allHardware.filter((item) => item.destination === "Mars").map((item) => item.id);
  const correct = new Set(progress.correctIds);

  const topicClear = (topic: "moon" | "mars" | "rover" | "history") =>
    quizQuestions
      .filter((question) => question.topics.includes(topic))
      .every((question) => correct.has(question.id));

  if (moonIds.every((id) => progress.visited.includes(id)) || topicClear("moon")) {
    earned.add("moon-explorer");
  }
  if (marsIds.every((id) => progress.visited.includes(id)) || topicClear("mars")) {
    earned.add("mars-detective");
  }
  if (roverRoundClear || progress.earned.includes("rover-expert")) earned.add("rover-expert");
  if (progress.timelineOpens.length >= 4 && topicClear("history")) {
    earned.add("space-historian");
  }

  return { ...progress, earned: badges.map((badge) => badge.id).filter((id) => earned.has(id)) };
}

export function markVisited(id: string) {
  const progress = loadProgress();
  if (progress.visited.includes(id)) return progress;
  const next = withBadges({ ...progress, visited: [...progress.visited, id] });
  saveProgress(next);
  return next;
}

export function markTimeline(id: string) {
  const progress = loadProgress();
  if (progress.timelineOpens.includes(id)) return progress;
  const next = withBadges({ ...progress, timelineOpens: [...progress.timelineOpens, id] });
  saveProgress(next);
  return next;
}

export function recordQuiz(correctIds: string[]) {
  const progress = loadProgress();
  const roverRoundClear = quizQuestions
    .filter((question) => question.topics.includes("rover"))
    .every((question) => correctIds.includes(question.id));
  const merged = Array.from(new Set([...progress.correctIds, ...correctIds]));
  const next = withBadges({ ...progress, correctIds: merged }, roverRoundClear);
  saveProgress(next);
  return next;
}
