import React, { useState } from "react";

const Business = () => {
  const prompts = [
    "Summarize financial reports or market trends",
    "Compare different products or competitors in [industry]",
    "Contrast different business strategies",
    "Analyze market data or customer behavior",
    " Evaluate the effectiveness of a marketing campaign",
    "Explain a business concept or process",
    "Describe a business model or product",
    "Define key terms or concepts in business",
    "Classify different types of businesses or industries",
    "Create a business plan or strategy",
    "Generate sales leads or revenue",
    "Invent a new product or service",
    "Produce a financial forecast",
    "Develop a marketing strategy",
    "Design a new organizational structure",
    "Build a team or department",
    "Construct a budget or financial plan",
    " Compose a business proposal",
    "Write a business report or memo",
    "Author a white paper or research report",
    "Write a business letter or email",
    "Draft a contract or agreement for ..",
    "Formulate a business plan or proposal",
    "Propose a new project or initiative for..",
    "Conceptualize a new business idea",
    "Imagine new business opportunities in [indusrty]",
    "Visualize a new product or service in..",
    "Form a partnership or alliance with...",
    "Shape a company's culture or values..",
    "Mold a company's image or branding for..",
    "Craft a company's mission or vision statement for..",
    "Assemble a team or department for ..",
    "Construct a budget or financial plan..",
    "Engineer a new product or process for..",
    "Manufacture a product or service in ..",
    "Synthesize market data or customer feedback..",
    "Combine different products or services using..",
    "Integrate different systems or processes in [sector]..",
    "Mix different marketing techniques..",
    "Merge two companies or departments..",
    "Consolidate resources or operations..",
    "Translate / analyze financial data or market trends..",
    "Convert leads or prospects into customers..",
    "Transform a company or industry..",
    "Adapt to a changing market or environment..",
    "Modify a product or service..",
    "Alter a business model or strategy..",
    "Change a company's direction or focus..",
    "Adjust a budget or forecast..",
    "Improve customer service or satisfaction..",
    "Optimize a website or marketing campaign using..",
    "Enhance a product or service..",
    "Upgrade technology or equipment..",
    "Amplify a company's message or brand..,",
    "Magnify a company's reach or impact..,",
    "Increase sales or revenue..",
    "Expand a market or customer base..",
    "Develop new markets or products",
    "Progress towards goals or objectives",
    "Advance a company's position or status..",

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
