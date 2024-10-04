import fern from "@/assets/fern.svg";
import heart from "@/assets/heart.svg";

export function BgLights() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
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
        className="absolute -bottom-60 -left-60"
      />
    </div>
  );
}
