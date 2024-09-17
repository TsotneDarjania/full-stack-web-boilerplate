import { render } from "solid-js/web";
import "./global.css";

const App = () => {
  return (
    <div>
      <h1>This is Full Stack Web Boilerplate</h1>
      <p>made by Tsotne Darjania </p>
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
