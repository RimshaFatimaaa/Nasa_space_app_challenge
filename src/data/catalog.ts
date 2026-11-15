import { marsHardware } from "@/data/mars";
import { moonHardware } from "@/data/moon";
import type { Destination, Hardware } from "@/types/hardware";

export const allHardware: Hardware[] = [...moonHardware, ...marsHardware];

export function getHardware(id: string): Hardware | undefined {
  return allHardware.find((item) => item.id === id);
}

export function hardwareByDestination(destination: Destination): Hardware[] {
  return allHardware.filter((item) => item.destination === destination);
}

export function mustGetHardware(id: string): Hardware {
  const item = getHardware(id);
  if (!item) {
    throw new Error(`Unknown hardware id: ${id}`);
  }
  return item;
}

export const destinationCount = 2;

export const instrumentCount = allHardware.reduce(
  (total, item) => total + item.instruments.length,
  0,
);
