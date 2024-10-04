import fern from "@/assets/fern.svg";
import heart from "@/assets/heart.svg";

export function BgLights() {
  return (
    <div
      aria-hidden="true"
      className="
        absolute inset-0 pointer-events-none max-h-full overflow-x-hidden overflow-y-visible
        "
    >
      <img
        src={heart.src}
        alt=""
        aria-hidden="true"
        className="absolute -top-60 -right-60"
      />
      <img
        src={fern.src}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 -left-60"
      />
    </div>
  );
}
