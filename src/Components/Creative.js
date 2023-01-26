import React, { useState } from "react";

const Creative = () => {
  const prompts = [
    "Summarize - Summarize a plot or story",
    "Compare - Compare different characters or themes",
    "Contrast - Contrast different genres or styles of",
    "Analyze - Analyze a piece of literature or film",
    "Evaluate - Evaluate the quality of a work of art about",
    "Explain a literary device or technique",
    "Describe - Describe a setting or character",
    "Define - Define a literary term or concept about",
    "Classify - Classify different types of literature or film",
    "Create - Create a story or poem about..",
    "Generate - Generate new ideas or plot twists about..",
    "Invent - Invent a new character or world where..",
    "Produce - Produce a script or screenplay for",
    "Develop - Develop a character or plot for",
    "Design - Design a book cover or movie poster",
    "Build - Build a world or universe",
    "Construct - Construct a plot or storyline",
    "Compose - Compose a song or score for",
    "Write - Write a novel or play about",
    "Author - Author a biography or memoir for",
    "Draft - Draft a short story or script about",
    "Formulate - Formulate a creative concept or idea about..",
    "Propose - Propose a new project or collaboration",
    "Conceptualize - Conceptualize a new story or film about",
    "Imagine - Imagine new worlds or characters",
    "Visualize - Visualize a scene or setting about",
    "Form - Form a band or ensemble",
    "Shape - Shape a character's personality or backstory",
  ];

  const [prompt, setPrompt] = useState(prompts[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <div>
      <div className="bodyCreative custom-flex flex-column">
        <div className="custom-flex inner-body">
          <section className="form-body custom-flex">
            <div className="card">
              <div className="p-8"></div>
              <label className="cat">Creative</label>
              <div></div>
              <p className="pro">{prompt}</p>
              <button className="button" onClick={handleClick}>
                💡Generate
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Creative;
