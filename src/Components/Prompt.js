import React, { useState } from "react";
// import img4 from "../../assets/img4";
// import img5 from "../assets/img5";
// import img6 from "../assets/img6";

function PromptGenerator() {
  const categories = {
    Creative: [
      "write a story",
      "create a new recipe",
      "design a logo",
      "write a poem",
      "make a vision board",
    ],
    Productivity: [
      "make a to-do list",
      "make a budget",
      "create a workout plan",
    ],
    Planning: ["plan a vacation", "plan a party"],
  };
  const [selectedPrompts, setSelectedPrompts] = useState({});

  function generatePrompts() {
    const allPrompts = Object.values(categories).flat();
    let newPrompts = {};
    Object.keys(categories).forEach((category) => {
      newPrompts[category] = [];
      while (newPrompts[category].length < 1) {
        let randomIndex = Math.floor(Math.random() * allPrompts.length);
        if (!newPrompts[category].includes(allPrompts[randomIndex])) {
          newPrompts[category].push(allPrompts[randomIndex]);
        }
      }
    });
    setSelectedPrompts(newPrompts);
  }

  return (
    <div className="body custom-flex flex-column">
      <div className="custom-flex inner-body">
        <section className="form-body custom-flex">
          <div className="card">
            <div className="p-8">
              {Object.keys(selectedPrompts).map((category) => (
                <div key={category}>
                  <label className="cat">{category}</label>
                  <div>
                    {selectedPrompts[category].map((prompt) => (
                      <h3 key={prompt}>{prompt}</h3>
                    ))}
                  </div>
                </div>
              ))}

              <div className="button" onClick={generatePrompts}>
                Generate Prompts
              </div>
              {/* <div> */}
              {/* <img
                  className="inner-body"
                  id="img4"
                  src="assets/img4.png"
                  alt=""
                /> */}
              {/* <img id="img5" src={img5} alt="" />
                <img id="img6" src={img6} alt="" /> */}
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PromptGenerator;

// import React, { useState } from "react";

// function PromptGenerator() {
//   const categories = {
//     creative: [
//       "write a story",
//       "create a new recipe",
//       "design a logo",
//       "write a poem",
//       "make a vision board",
//     ],
//     productivity: [
//       "make a to-do list",
//       "make a budget",
//       "create a workout plan",
//     ],
//     planning: ["plan a vacation", "plan a party"],
//   };

//   const [selectedPrompts, setSelectedPrompts] = useState([]);

//   function generatePrompts() {
//     const allPrompts = Object.values(categories).flat();
//     let newPrompts = [];
//     while (newPrompts.length < 10) {
//       let randomIndex = Math.floor(Math.random() * prompts.length);
//       if (!newPrompts.includes(prompts[randomIndex])) {
//         newPrompts.push(prompts[randomIndex]);
//       }
//     }
//     setSelectedPrompts(newPrompts);
//   }

//   return (
//     <div>
//       {Object.keys(categories).map((category) => (
//         <div key={category}>
//           <h2>{category}</h2>
//           <ul>
//             {categories[category].map((prompt) => (
//               <li key={prompt}>{prompt}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={generatePrompts}>Generate Prompts</button>
//     </div>
//   );
// }

// export default PromptGenerator;
