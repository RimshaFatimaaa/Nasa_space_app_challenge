"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SHAPE = 3200;
const STARS = 700;

type RGB = [number, number, number];

interface Cloud {
  positions: Float32Array;
  colors: Float32Array;
}

const silver: RGB = [0.78, 0.84, 0.9];
const cyan: RGB = [0.33, 0.78, 0.91];
const mars: RGB = [0.86, 0.4, 0.24];
const gold: RGB = [0.95, 0.76, 0.38];

function paint(colors: Float32Array, index: number, color: RGB, vary = 0.22) {
  const mix = 1 - vary + Math.random() * vary * 2;
  colors[index] = color[0] * mix;
  colors[index + 1] = color[1] * mix;
  colors[index + 2] = color[2] * mix;
}

function blank(): Cloud {
  return {
    positions: new Float32Array(SHAPE * 3),
    colors: new Float32Array(SHAPE * 3),
  };
}

function sphere(cloud: Cloud, start: number, count: number, radius: number, center: RGB, color: RGB) {
  for (let i = 0; i < count; i++) {
    const k = i + 0.5;
    const phi = Math.acos(1 - (2 * k) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * k;
    const shell = radius * (0.9 + Math.random() * 0.12);
    const index = (start + i) * 3;
    cloud.positions[index] = center[0] + shell * Math.sin(phi) * Math.cos(theta);
    cloud.positions[index + 1] = center[1] + shell * Math.cos(phi);
    cloud.positions[index + 2] = center[2] + shell * Math.sin(phi) * Math.sin(theta);
    paint(cloud.colors, index, i % 11 === 0 ? gold : color);
  }
}

function box(cloud: Cloud, start: number, count: number, size: RGB, center: RGB, color: RGB) {
  for (let i = 0; i < count; i++) {
    const index = (start + i) * 3;
    cloud.positions[index] = center[0] + (Math.random() - 0.5) * size[0];
    cloud.positions[index + 1] = center[1] + (Math.random() - 0.5) * size[1];
    cloud.positions[index + 2] = center[2] + (Math.random() - 0.5) * size[2];
    paint(cloud.colors, index, color);
  }
}

function wheel(cloud: Cloud, start: number, count: number, center: RGB) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.28 + Math.random() * 0.05;
    const index = (start + i) * 3;
    cloud.positions[index] = center[0] + (Math.random() - 0.5) * 0.12;
    cloud.positions[index + 1] = center[1] + Math.cos(angle) * radius;
    cloud.positions[index + 2] = center[2] + Math.sin(angle) * radius;
    paint(cloud.colors, index, silver);
  }
}

function buildStars() {
  const positions = new Float32Array(STARS * 3);
  const colors = new Float32Array(STARS * 3);
  for (let i = 0; i < STARS; i++) {
    const index = i * 3;
    positions[index] = (Math.random() - 0.5) * 14;
    positions[index + 1] = (Math.random() - 0.5) * 8;
    positions[index + 2] = (Math.random() - 0.5) * 8;
    paint(colors, index, Math.random() > 0.8 ? cyan : [0.9, 0.93, 0.96], 0.45);
  }
  return { positions, colors };
}

function buildDual(): Cloud {
  const cloud = blank();
  sphere(cloud, 0, 1300, 1.15, [-1.35, 0.1, 0], silver);
  sphere(cloud, 1300, 1900, 0.95, [1.45, -0.05, 0.2], mars);
  return cloud;
}

function buildMoon(): Cloud {
  const cloud = blank();
  sphere(cloud, 0, 2600, 1.7, [0.35, 0, 0], silver);
  sphere(cloud, 2600, 600, 0.18, [1.15, 0.7, 0.2], cyan);
  return cloud;
}

function buildMars(): Cloud {
  const cloud = blank();
  sphere(cloud, 0, SHAPE, 1.55, [0.4, 0, 0], mars);
  return cloud;
}

function buildRover(): Cloud {
  const cloud = blank();
  box(cloud, 0, 700, [1.7, 0.42, 0.85], [0.15, 0.05, 0], [0.25, 0.42, 0.62]);
  box(cloud, 700, 350, [1.15, 0.08, 0.7], [0, 0.32, 0], gold);
  box(cloud, 1050, 220, [0.08, 0.85, 0.08], [-0.15, 0.7, 0], cyan);
  box(cloud, 1270, 180, [0.28, 0.18, 0.22], [-0.15, 1.15, 0], silver);
  box(cloud, 1450, 280, [0.85, 0.08, 0.08], [0.45, 0.05, 0.48], gold);
  const wheels: RGB[] = [
    [-0.55, -0.32, 0.48],
    [0.1, -0.32, 0.48],
    [0.7, -0.32, 0.48],
    [-0.55, -0.32, -0.48],
    [0.1, -0.32, -0.48],
    [0.7, -0.32, -0.48],
  ];
  wheels.forEach((center, wheelIndex) => wheel(cloud, 1730 + wheelIndex * 180, 180, center));
  box(cloud, 2810, 390, [0.35, 0.45, 0.28], [0.95, 0.15, 0], mars);
  return cloud;
}

function buildLander(): Cloud {
  const cloud = blank();
  box(cloud, 0, 700, [1.15, 0.32, 1.15], [0.2, -0.15, 0], gold);
  box(cloud, 700, 650, [0.72, 0.72, 0.72], [0.2, 0.4, 0], silver);
  const feet: RGB[] = [
    [-0.55, -0.55, 0.55],
    [0.95, -0.55, 0.55],
    [-0.55, -0.55, -0.55],
    [0.95, -0.55, -0.55],
  ];
  feet.forEach((foot, footIndex) => {
    const start = 1350 + footIndex * 280;
    for (let i = 0; i < 280; i++) {
      const t = i / 279;
      const index = (start + i) * 3;
      cloud.positions[index] = 0.2 + (foot[0] - 0.2) * t;
      cloud.positions[index + 1] = 0.05 + (foot[1] - 0.05) * t;
      cloud.positions[index + 2] = foot[2] * t;
      paint(cloud.colors, index, silver);
    }
  });
  box(cloud, 2470, 730, [0.12, 0.7, 0.12], [0.85, 0.85, 0], cyan);
  return cloud;
}

const scenes = {
  dual: buildDual(),
  moon: buildMoon(),
  mars: buildMars(),
  rover: buildRover(),
  lander: buildLander(),
  stars: (() => {
    const cloud = blank();
    for (let i = 0; i < SHAPE; i++) {
      const index = i * 3;
      cloud.positions[index] = (Math.random() - 0.5) * 10;
      cloud.positions[index + 1] = (Math.random() - 0.5) * 6;
      cloud.positions[index + 2] = (Math.random() - 0.5) * 6;
      paint(cloud.colors, index, Math.random() > 0.75 ? cyan : silver, 0.5);
    }
    return cloud;
  })(),
};

const starField = buildStars();

type SceneName = keyof typeof scenes;

const storyOrder: SceneName[] = ["dual", "moon", "mars", "rover"];

const shapeSpan: Record<SceneName, [number, number]> = {
  dual: [-2.55, 2.5],
  moon: [-1.45, 2.15],
  mars: [-1.25, 2.05],
  rover: [-0.9, 1.3],
  lander: [-0.75, 1.2],
  stars: [-2.3, 2.3],
};

function sceneForPath(pathname: string): SceneName | "story" {
  if (pathname === "/") return "story";
  if (pathname === "/moon") return "moon";
  if (pathname === "/mars") return "mars";
  if (pathname === "/hardware/eagle" || pathname.startsWith("/anatomy/lunar-module")) return "lander";
  if (
    ["/hardware/sojourner", "/hardware/spirit", "/hardware/opportunity", "/hardware/curiosity", "/hardware/perseverance", "/hardware/lrv"].includes(
      pathname,
    ) ||
    pathname.startsWith("/anatomy")
  ) {
    return "rover";
  }
  if (pathname.startsWith("/hardware/")) return "moon";
  return "stars";
}

export function ParticleField() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(sceneForPath(pathname));
  const pathRef = useRef(pathname);
  modeRef.current = sceneForPath(pathname);
  pathRef.current = pathname;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (smallScreen) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 50);
    camera.position.z = 6.2;

    const shapeGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(scenes.dual.positions);
    const colors = new Float32Array(scenes.dual.colors);
    shapeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    shapeGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const shapeMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const shape = new THREE.Points(shapeGeometry, shapeMaterial);
    scene.add(shape);

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starField.positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starField.colors, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      }),
    );
    scene.add(stars);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const pointerLocal = new THREE.Vector3();
    let frame = 0;

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    }

    function pointer(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      mouse.tx = (event.clientX / width) * 2 - 1;
      mouse.ty = -((event.clientY / height) * 2 - 1);
    }

    function desiredScene(): { from: Cloud; to: Cloud; blend: number; left: number; right: number; roverWeight: number; dim: number } {
      const mode = modeRef.current;
      if (mode === "story") {
        const track = document.getElementById("story-track");
        let progress = 0;
        let pastRover = 0;
        if (track) {
          const total = Math.max(track.offsetHeight - window.innerHeight, 0);
          const scrolled = Math.max(-track.getBoundingClientRect().top, 0);
          progress = total > 0 ? Math.min(scrolled, total) / total : 0;
          pastRover = Math.min(Math.max(scrolled - total, 0) / Math.max(window.innerHeight, 1), 1);
        }
        if (pastRover > 0) {
          const fromSpan = shapeSpan.rover;
          const toSpan = shapeSpan.dual;
          return {
            from: scenes.rover,
            to: scenes.dual,
            blend: pastRover,
            left: fromSpan[0] + (toSpan[0] - fromSpan[0]) * pastRover,
            right: fromSpan[1] + (toSpan[1] - fromSpan[1]) * pastRover,
            roverWeight: 1 - pastRover,
            dim: pastRover,
          };
        }
        const scaled = progress * (storyOrder.length - 1);
        const index = Math.min(storyOrder.length - 2, Math.floor(scaled));
        const blend = scaled - index;
        const fromSpan = shapeSpan[storyOrder[index]];
        const toSpan = shapeSpan[storyOrder[index + 1]];
        return {
          from: scenes[storyOrder[index]],
          to: scenes[storyOrder[index + 1]],
          blend,
          left: fromSpan[0] + (toSpan[0] - fromSpan[0]) * blend,
          right: fromSpan[1] + (toSpan[1] - fromSpan[1]) * blend,
          roverWeight: index === storyOrder.length - 2 ? blend : 0,
          dim: 0,
        };
      }
      const cloud = scenes[mode];
      const [left, right] = shapeSpan[mode];
      return { from: cloud, to: cloud, blend: 0, left, right, roverWeight: 0, dim: 0 };
    }

    function tick() {
      const ease = reduce ? 0.25 : 0.075;
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;
      const { from, to, blend, left, right, roverWeight, dim } = desiredScene();
      const visibleHeight = 2 * Math.tan((50 * Math.PI) / 360) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;
      const wide = window.innerWidth >= 768;
      const half = visibleWidth / 2;
      const span = Math.max(right - left, 0.01);
      const centered = pathRef.current === "/moon" || pathRef.current === "/mars";
      let targetScale = 1;
      let targetX = 0;
      let targetY = 0;
      if (centered) {
        const copy = document.getElementById("destination-copy");
        const photo = document.getElementById("destination-photo");
        if (copy && photo) {
          const textBox = copy.getBoundingClientRect();
          const photoBox = photo.getBoundingClientRect();
          const sideBySide = photoBox.left >= textBox.right - 12;
          const gapPx = sideBySide
            ? Math.max(photoBox.left - textBox.right, 48)
            : Math.max(photoBox.top - textBox.bottom, 48);
          const gapWorld = sideBySide
            ? (gapPx / window.innerWidth) * visibleWidth
            : (gapPx / window.innerHeight) * visibleHeight;
          targetScale = Math.min(1, (gapWorld * 0.72) / span);
          const midX = sideBySide ? (textBox.right + photoBox.left) / 2 : (textBox.left + photoBox.right) / 2;
          const midY = sideBySide ? (textBox.top + photoBox.bottom) / 2 : (textBox.bottom + photoBox.top) / 2;
          const worldX = ((midX / window.innerWidth) - 0.5) * visibleWidth;
          targetX = worldX - ((left + right) / 2) * targetScale;
          targetY = -(((midY / window.innerHeight) - 0.5) * visibleHeight);
        } else {
          targetX = -((left + right) / 2);
        }
      } else {
        const rightLimit = half - Math.max(0.45, half * 0.055);
        const leftLimit = wide ? Math.max(0.25, half * 0.06) : 0.05;
        const room = Math.max(rightLimit - leftLimit, 0.01);
        targetScale = Math.min(1, room / span);
        targetX = rightLimit - right * targetScale - roverWeight * 1.05;
      }
      shape.position.x += (targetX - shape.position.x) * 0.08;
      shape.position.y += (targetY - shape.position.y) * 0.08;
      const nextScale = shape.scale.x + (targetScale - shape.scale.x) * 0.08;
      shape.scale.setScalar(nextScale);
      if (!reduce) {
        shape.rotation.y += 0.0018;
        shape.rotation.x += (mouse.y * 0.35 - shape.rotation.x) * 0.02;
        shape.rotation.z += (mouse.x * -0.12 - shape.rotation.z) * 0.02;
      }
      shape.updateMatrixWorld();
      pointerLocal.set(mouse.x * half, mouse.y * (visibleHeight / 2), 0);
      shape.worldToLocal(pointerLocal);
      const mx = pointerLocal.x;
      const my = pointerLocal.y;

      for (let i = 0; i < SHAPE; i++) {
        const index = i * 3;
        const dx = from.positions[index] + (to.positions[index] - from.positions[index]) * blend;
        const dy = from.positions[index + 1] + (to.positions[index + 1] - from.positions[index + 1]) * blend;
        const dz = from.positions[index + 2] + (to.positions[index + 2] - from.positions[index + 2]) * blend;
        positions[index] += (dx - positions[index]) * ease;
        positions[index + 1] += (dy - positions[index + 1]) * ease;
        positions[index + 2] += (dz - positions[index + 2]) * ease;
        colors[index] += (from.colors[index] + (to.colors[index] - from.colors[index]) * blend - colors[index]) * ease;
        colors[index + 1] +=
          (from.colors[index + 1] + (to.colors[index + 1] - from.colors[index + 1]) * blend - colors[index + 1]) * ease;
        colors[index + 2] +=
          (from.colors[index + 2] + (to.colors[index + 2] - from.colors[index + 2]) * blend - colors[index + 2]) * ease;

        if (!reduce) {
          const ox = positions[index] - mx;
          const oy = positions[index + 1] - my;
          const dist = Math.hypot(ox, oy);
          if (dist < 1.85 && dist > 0.001) {
            const push = ((1.85 - dist) / 1.85) * 0.09;
            positions[index] += (ox / dist) * push;
            positions[index + 1] += (oy / dist) * push;
          }
        }
      }

      const onAnatomy = pathRef.current.startsWith("/anatomy");
      shapeMaterial.opacity = onAnatomy ? 0 : 0.95 - dim * 0.78;
      (stars.material as THREE.PointsMaterial).opacity = onAnatomy ? 0.08 : 0.8 - dim * 0.62;
      shapeGeometry.attributes.position.needsUpdate = true;
      shapeGeometry.attributes.color.needsUpdate = true;
      if (!reduce) {
        stars.rotation.y += 0.0004;
        stars.position.x = mouse.x * 0.25;
        stars.position.y = mouse.y * 0.12;
      }
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointer);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
      shapeGeometry.dispose();
      shapeMaterial.dispose();
      starGeometry.dispose();
      (stars.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
