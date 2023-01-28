import React, { useState } from "react";

const Developer = () => {
  const prompts = [
    "Summarize - Summarize the functionality of a software where..",
    "Compare - Compare different software or technologies of",
    "Contrast - Contrast different programming languages or frameworks using",
    "Analyze - Analyze code or performance of ..",
    "Evaluate - Evaluate the effectiveness of a software..",
    "Explain - Explain a programming concept or algorithm of",
    "Describe - Describe a software feature or function",
    "Define - Define a programming term or concept",
    "Classify - Classify different types of software or platforms",
    "Create - Create a software program or application where the user can..[features]",
    "Generate - Generate code or documentation for ",
    "Invent - Invent a new software feature or tool",
    "Produce - Produce a software release or update",
    "Develop - Develop a software system or platform",
    "Design - Design a user interface or database that contains",
    "Build - Build a software module or component where the user can",
    "Construct - Construct a software architecture or design",
    "Compose - Compose a software script or command where",
    "Write - Write code or documentation for..",
    "Author - Author a software manual or tutorial",
  ];

  const [prompt, setPrompt] = useState(prompts[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <div>
      <div className="bodyDev custom-flex flex-column">
        <div className="custom-flex inner-body">
          <section className="form-body custom-flex">
            <div className="card">
              <div className="p-8"></div>
              <label className="cat">Developer</label>

              <p className="pro">{prompt}</p>
              <button className="button" onClick={handleClick}>
                🖥️Generate
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Developer;
