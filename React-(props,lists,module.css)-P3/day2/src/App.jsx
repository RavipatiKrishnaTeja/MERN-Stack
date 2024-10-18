// import React from "react";
// import Button from "./Button/Button";

// export const App = () => {
//   const yellowButton = () => {
//     alert("yellow button clicked");
//   };
//   const blueButton = () => {
//     alert("blue button clicked");
//   };

//   const redButton = () => {
//     alert("red button clicked");
//   };

//   return (
//     <>
//       <Button
//         buttonText="Try  this one!"
//         backGroundColor="yellow"
//         click={yellowButton}
//       />
//       <Button
//         buttonText="click me!"
//         backGroundColor="blue"
//         click={blueButton}
//       />
//       <Button buttonText="logout" backGroundColor="red" click={redButton} />
//     </>
//   );
// };

// // Button(button,bgcolor,onClick)

// //props-->properties
// // button Text,
// // bgcolor
// // onClick

// import React from "react";

// export const App = () => {
//   let isUserAuthenticated = true; //login
//   // another method but not recomanded
//   // if (isUserAuthenticated) {
//   //   return <h1>User Authenticated</h1>;
//   // } else {
//   //   return <h1>User not Authenticated</h1>;
//   // }

//   //recommanded way of using ternary  operator
//   return (
//     <div>
//       {isUserAuthenticated ? (
//         <h1>User Authenticated</h1>
//       ) : (
//         <h1>User Not Authenticated</h1>
//       )}
//     </div>
//   );
// };

//module css

import React from "react";
import { Greetings } from "./Greetings/Greetings";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Greetings />
    </div>
  );
};

//module.css allow you to scope your css classes to the component level, so that the styles you define for one component don't accidentally apply to other components in your project.
// when you import module.css file into react component, the styles defined in that file are automatically scope to that component
