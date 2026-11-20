import Typewriter from "typewriter-effect";

export default function Header({ directory, description }) {
  return (
    <header className="flex ver">
      <h1>
        <span>./</span>
        <Typewriter
          key={directory}
          options={{
            strings: [directory],
            autoStart: true,
            keepLastString: true,
            cursor: "_",
            cursorBlink: false,
            loop: true,
            pauseFor: 4500,
          }}
        />
      </h1>

      <p>{description}</p>
    </header>
  );
}
