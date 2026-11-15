import type { HardwareStatus } from "@/types/hardware";
import { statusTone } from "@/lib/utils";
import { CheckCircle2, Landmark, Radio } from "lucide-react";

const icons = {
  "Still working": Radio,
  "Mission ended": CheckCircle2,
  "Left behind": Landmark,
} satisfies Record<HardwareStatus, typeof Radio>;

export function StatusBadge({ status }: { status: HardwareStatus }) {
  const Icon = icons[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${statusTone(status)}`}>
      <Icon aria-hidden="true" size={14} />
      {status}
    </span>
  );
}
