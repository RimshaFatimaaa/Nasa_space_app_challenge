"use client";

import { getAnatomy } from "@/data/anatomy";
import { useMemo, useState } from "react";

function Wheel({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#071426" stroke={color} strokeWidth={r > 24 ? 6 : 4} />
      <circle cx={cx} cy={cy} r={r * 0.38} fill="none" stroke={color} strokeWidth="3" />
    </g>
  );
}

function RoverDrawing({ selected, nuclear }: { selected: string; nuclear: boolean }) {
  const glow = (id: string) => (selected === id ? "#54C7E8" : "#C8D0D9");
  const panel = glow("power");
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Simplified three-quarter view of a six-wheeled Mars rover" className="h-auto w-full">
      <rect width="720" height="380" fill="#0c1e36" rx="24" />
      <path d="M36 318 H684" stroke="#12365A" strokeWidth="4" />
      <path d="M210 188 L250 150 H500 L530 188 Z" fill="#10243f" stroke={glow("body")} strokeWidth="4" />
      <rect x="210" y="188" width="320" height="72" rx="10" fill="#12365A" stroke={glow("body")} strokeWidth="4" />
      <g>
        <path d="M230 156 H320 L390 132 H470 L520 156" fill="none" stroke={glow("wheels")} strokeWidth="3" />
        <Wheel cx={230} cy={168} r={16} color={glow("wheels")} />
        <Wheel cx={320} cy={168} r={16} color={glow("wheels")} />
        <Wheel cx={520} cy={168} r={16} color={glow("wheels")} />
      </g>
      <g>
        <path d="M188 254 H292 L360 230 H470 L548 254" fill="none" stroke={glow("wheels")} strokeWidth="4" />
        <Wheel cx={188} cy={286} r={32} color={glow("wheels")} />
        <Wheel cx={292} cy={286} r={32} color={glow("wheels")} />
        <Wheel cx={548} cy={286} r={32} color={glow("wheels")} />
      </g>
      {nuclear ? (
        <g>
          <rect x="530" y="196" width="78" height="52" rx="26" fill="#1a120e" stroke={panel} strokeWidth="4" />
          {[548, 564, 580, 596].map((x) => (
            <path key={x} d={`M${x} 188 V256`} stroke={panel} strokeWidth="3" />
          ))}
          <path d="M530 222 H608" stroke={panel} strokeWidth="2" />
        </g>
      ) : (
        <g>
          <path d="M250 150 L150 92 H250 L310 150 Z" fill="#3d3420" stroke={panel} strokeWidth="4" />
          <path d="M310 150 L360 78 H560 L500 150 Z" fill="#3d3420" stroke={panel} strokeWidth="4" />
          <path d="M176 108 H236 M168 122 H228 M360 100 H520 M360 118 H500" stroke={panel} strokeWidth="2" />
        </g>
      )}
      <path d="M330 150 C350 92 390 78 410 72" fill="none" stroke={glow("mast")} strokeWidth="6" />
      <rect x="392" y="46" width="52" height="34" rx="6" fill="#071426" stroke={glow("mast")} strokeWidth="4" />
      <path d="M250 220 C210 236 170 228 148 258" fill="none" stroke={glow("arm")} strokeWidth="6" />
      <circle cx="140" cy="264" r="12" fill="none" stroke={glow("arm")} strokeWidth="4" />
      <path d="M470 150 L520 96 H575" fill="none" stroke={glow("antenna")} strokeWidth="4" />
      <ellipse cx="582" cy="94" rx="22" ry="12" fill="none" stroke={glow("antenna")} strokeWidth="4" />
    </svg>
  );
}

function LanderDrawing({ selected }: { selected: string }) {
  const glow = (id: string) => (selected === id ? "#54C7E8" : "#C8D0D9");
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="Simplified Apollo lunar module" className="h-auto w-full">
      <rect width="640" height="340" fill="#0c1e36" rx="24" />
      <path d="M70 280 H570" stroke="#12365A" strokeWidth="4" />
      <path d="M230 230 L180 270 H250" fill="none" stroke={glow("legs")} strokeWidth="5" />
      <path d="M410 230 L460 270 H390" fill="none" stroke={glow("legs")} strokeWidth="5" />
      <rect x="230" y="175" width="180" height="60" fill="#12365A" stroke={glow("descent")} strokeWidth="4" />
      <path d="M250 175 L280 120 H360 L390 175" fill="#10243f" stroke={glow("ascent")} strokeWidth="4" />
      <rect x="300" y="136" width="28" height="16" fill="#54C7E8" opacity="0.35" />
      <circle cx="455" cy="150" r="16" fill="none" stroke={glow("antenna-lm")} strokeWidth="4" />
      <path d="M410 150 H439" stroke={glow("antenna-lm")} strokeWidth="3" />
      <rect x="250" y="210" width="36" height="18" fill="none" stroke={glow("science")} strokeWidth="3" />
    </svg>
  );
}

export function AnatomyExplorer({
  id,
  initialPower = "solar",
}: {
  id: "mars-rover" | "lunar-module";
  initialPower?: "solar" | "nuclear";
}) {
  const diagram = getAnatomy(id);
  const [selected, setSelected] = useState(diagram?.parts[0]?.id ?? "");
  const [power, setPower] = useState<"solar" | "nuclear">(initialPower);
  const part = useMemo(() => diagram?.parts.find((item) => item.id === selected), [diagram, selected]);

  if (!diagram || !part) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.8fr]">
      <div className="space-y-4">
        {id === "mars-rover" ? (
          <div className="relative z-20 flex gap-2" role="group" aria-label="Power source shown on the diagram">
            {(["solar", "nuclear"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                aria-pressed={power === mode}
                onClick={() => {
                  setPower(mode);
                  setSelected("power");
                }}
                className={`rounded-full px-4 py-2 text-sm ${power === mode ? "bg-cyan text-space" : "border border-white/15 bg-[#071426] text-silver"}`}
              >
                {mode === "solar" ? "Solar rover" : "Nuclear rover"}
              </button>
            ))}
          </div>
        ) : null}
        {id === "mars-rover" ? <RoverDrawing selected={selected} nuclear={power === "nuclear"} /> : <LanderDrawing selected={selected} />}
        <p className="text-card rounded-2xl border border-white/10 px-4 py-3 text-sm leading-6 text-silver">{diagram.note}</p>
      </div>
      <div>
        <div className="relative z-30 flex flex-wrap gap-2 rounded-2xl bg-[#071426] p-2" role="tablist" aria-label="Rover parts">
          {diagram.parts.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === selected}
              onClick={() => setSelected(item.id)}
              className={`rounded-full px-3 py-1.5 text-sm ${
                item.id === selected ? "bg-cyan text-space" : "border border-white/15 bg-[#0e2036] text-silver"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <article className="exhibit-card mt-4 rounded-3xl border border-white/10 p-5" aria-live="polite">
          <p className="text-xs tracking-[0.16em] text-cyan uppercase">In simple words</p>
          <h2 className="mt-2 font-display text-3xl">{part.name}</h2>
          <p className="mt-3 leading-7">{part.explanation}</p>
          <p className="mt-4 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-silver">
            <span className="text-sand">Did you know? </span>
            {part.fact}
          </p>
        </article>
      </div>
    </div>
  );
}
