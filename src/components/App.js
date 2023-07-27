import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import user from "./user";

function App() {
  return (
    <div>
      <NavBar />
      <Home
        color={user.color}
        username={user.name}
        city={user.city}
      />
      <About
        bio={user.bio}
        links={user.links}
      />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
