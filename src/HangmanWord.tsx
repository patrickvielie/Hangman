export function HangmanWord() {
    const word = "test"
    const guessedLetters = ["t"]
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
        {word.split("").map((letters, index) => (
            <span style={{ borderBottom: ".1em solid black"}}>
        <span style={{
            visibility: guessedLetters.includes(letters)
                ? "visible"
                : "hidden",
        }}
        >
         {letters}
        </span>
        </span>
        ))}
    </div>
  );
}
