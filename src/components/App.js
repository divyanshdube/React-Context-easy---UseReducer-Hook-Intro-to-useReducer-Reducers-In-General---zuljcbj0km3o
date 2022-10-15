import React, { createContext } from "react";
import "../styles/App.css";
import { UserProfile } from "./UserProfile";

const UserContext = createContext();

const App = () => {
  let obj = {
    name: "Newton",
    age: "3",
  };

  return (
    <div id="main">
      <UserContext.Provider value={obj}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };
