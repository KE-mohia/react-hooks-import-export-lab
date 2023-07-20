import react from "react";
import {username,city }from "../data/user";

console.log(username)
console.log(city)

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
