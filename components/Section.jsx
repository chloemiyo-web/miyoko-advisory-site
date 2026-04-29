export default function Section({
  children,
  className = "",
  width = "wide", // "wide" | "text" | "narrative"
  py = "lg", // "lg" (120-160) | "md" (80-100) | "sm" (48-64)
  bg = "bone", // "bone" | "mist"
  id,
}) {
  const widthMap = {
    wide: "max-w-wide",
    text: "max-w-text",
    narrative: "max-w-narrative",
  };
  const pyClass =
    py === "lg"
      ? "py-20 md:py-32"
      : py === "md"
      ? "py-16 md:py-24"
      : "py-12 md:py-16";
  const bgStyle =
    bg === "mist"
      ? { backgroundColor: "var(--mist)" }
      : { backgroundColor: "var(--bone)" };

  return (
    <section id={id} style={bgStyle} className={pyClass}>
      <div className={`mx-auto ${widthMap[width]} px-6 md:px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
