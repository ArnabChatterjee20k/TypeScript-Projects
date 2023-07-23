import TypeWriter from "./TypeWriter";
import "./style.css";

const typeWriter = new TypeWriter(document.body, {
  loop: false,
});

typeWriter
  .typeString("Hey Hi")
  .pauseFor(1000)
  .typeString("\n\nHeello")
  .deleteChars(10)
  .pauseFor(150)
  .typeString("\n\nHey HI")
  .pauseFor(1000)
  .deleteAll(10)
  .typeString("Bye Bye")
  .start()