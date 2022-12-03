
import Nav from "./Nav";
import Home from "./Home";

// function App() {
//   // ei jaigai javascript code likhty hobe

//   const title = "welcome to the joy's blog";

//   let owner = {
//     name: "joy",
//   };
//   const link = "https://github.com/joy-adhikary/";

//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       {/*javascript use korty caile ei jaigai { } use korty hobe */}
//       <div className="Content">
//         <p>Owner name is : {owner.name}</p>
//         <a href={link}>this one is dynamic link</a>
//       </div>
//     </div>
//   );
// }

function App() {
  //js code 
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// export default er por jei function ke index.js theke access kortyci seita return korbe ei jaiga theke.
// R ei page er main kaj e hocche akta default funciton run kore seita ke return kore deya
//first latter capital hobe sob somoi App , Joy , Exx etc.

// ei app er moddhe e sob file thakbe akta web site er 
//likha hobe onno jaigai kintu import kore ei jaigai use kora hbe like Nav & Home 
