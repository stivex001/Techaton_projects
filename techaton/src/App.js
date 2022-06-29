import Box from "./components/box/Box";
import Jokes from "./components/Jokes";
import Practice from "./components/Practice";

const Array = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const obArr = [
    {
      name: 'Steve',
      age: 29,
      school: 'OAU'
    },

    {
      name: 'Tim',
      age: 23,
      school: 'UI'
    },

    {
      name: 'ighalo',
      age: 30,
      school: 'LASU'
    }
  ]
}



function App() {
  
  return (
    <div className="App">
      <Jokes />
      <Box
        header={"welcome to react course"}
        // width="50%"
        text1="welcome to Techathon"
        text2="I hope you like Reactjs like i do"
        
      />

      <Box
        border={"5px solid green"}
        // width="100%"
        header="components"
        text1="How to structure your files in React"
        text2="I hope you like Reactjs like i do"
        
      />

      <Box
        border={"5px solid red"}
        header="props"
        text1="The Importance of using props"
        text2="Sit back and relax your expectations and continue"
      />

      <Box
        border={"5px solid black"}
        header="states"
        text1="How to import React components"
        text2="I hope you like Reactjs like i do"
      />
      <Practice>
        <p>This is the childen props</p>
      </Practice>

      {Array}
    </div>
  );
}

export default App;
