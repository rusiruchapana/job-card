import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Photo />
      <Details />
      <SkillSet />
    </div>
  );
}

function Photo() {
  return <img src="photoes/me.jpg" alt="Rusiru chapana" />;
}

function Details() {
  return (
    <div>
      <h1>Rusiru chapana</h1>
      <p>
        Full-stack web developer and teacher at Udemy.When not coding or
        preparing a course.I like to play board games, to cook(and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillSet() {
  return (
    <div>
      <skills skill="HTML + CSS" emoji="emojies/arm.png" />
    </div>
  );
}

function skills(props) {
  return (
    <div>
      <p>{props.skill}</p>
      <img src={props.emoji} alt={props.skill} />
    </div>
  );
}

export default App;
