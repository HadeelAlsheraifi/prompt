import React, { useState } from "react";

const Business = () => {
  const prompts = [
    "Summarize - Summarize financial reports or market trends",
    "Compare - Compare different products or competitors in [industry]",
    "Contrast - Contrast different business strategies",
    "Analyze - Analyze market data or customer behavior",
    "Evaluate - Evaluate the effectiveness of a marketing campaign",
    "Explain - Explain a business concept or process",
    "Describe - Describe a business model or product",
    "Define - Define key terms or concepts in business",
    "Classify - Classify different types of businesses or industries",
    "Create - Create a business plan or strategy",
    "Generate - Generate sales leads or revenue",
    "Invent - Invent a new product or service",
    "Produce - Produce a financial forecast",
    "Develop - Develop a marketing strategy",
    "Design - Design a new organizational structure",
    "Build - Build a team or department",
    "Construct - Construct a budget or financial plan",
    "Compose - Compose a business proposal",
    "Write - Write a business report or memo",
    "Author - Author a white paper or research report",
    "Pen - Write a business letter or email",
    "Draft - Draft a contract or agreement for ..",
    "Formulate - Formulate a business plan or proposal",
    "Propose - Propose a new project or initiative for..",
    "Conceptualize - Conceptualize a new business idea",
    "Imagine - Imagine new business opportunities in [indusrty]",
    "Visualize - Visualize a new product or service in..",
    "Form - Form a partnership or alliance with...",
    "Shape - Shape a company's culture or values..",
    "Mold - Mold a company's image or branding for..",
    "Craft - Craft a company's mission or vision statement for..",
    "Assemble - Assemble a team or department for ..",
    "Construct - Construct a budget or financial plan..",
    "Engineer - Engineer a new product or process for..",
    "Manufacture - Manufacture a product or service in ..",
    "Synthesize - Synthesize market data or customer feedback..",
    "Combine - Combine different products or services using..",
    "Integrate - Integrate different systems or processes in [sector]..",
    "Mix - Mix different marketing techniques..",
    "Merge - Merge two companies or departments..",
    "Consolidate - Consolidate resources or operations..",
    "Translate - Translate / analyze financial data or market trends..",
    "Convert - Convert leads or prospects into customers..",
    "Transform - Transform a company or industry..",
    "Adapt - Adapt to a changing market or environment..",
    "Modify - Modify a product or service..",
    "Alter - Alter a business model or strategy..",
    "Change - Change a company's direction or focus..",
    "Adjust - Adjust a budget or forecast..",
    "Improve - Improve customer service or satisfaction..",
    "Optimize - Optimize a website or marketing campaign using..",
    "Enhance - Enhance a product or service..",
    "Upgrade - Upgrade technology or equipment..",
    "Amplify - Amplify a company's message or brand..,",
    "Magnify - Magnify a company's reach or impact..,",
    "Increase - Increase sales or revenue..",
    "Expand - Expand a market or customer base..",
    "Develop - Develop new markets or products",
    "Progress - Progress towards goals or objectives",
    "Advance - Advance a company's position or status..",

    // "Write a poem about nature",
    // "Describe your perfect day",
    // "Explain the meaning of life",
    // "Create a short story about a magical object",
    // "Write a letter to your future self",
    // "Describe a character from your favorite book",
    // "Write a persuasive essay on a current issue",
    // "Create a dialogue between two characters",
    // "Write a descriptive paragraph about a place you've visited",
    // "Make a list of your personal values",
  ];

  const [prompt, setPrompt] = useState(prompts[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <div>
      <div className="body custom-flex flex-column">
        <div className="custom-flex inner-body">
          <section className="form-body custom-flex">
            <div className="card">
              <div className="p-8"></div>
              <label className="cat">Business</label>
              <p className="pro">{prompt}</p>

              <button className="button" onClick={handleClick}>
                🚀 Generate
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Business;
