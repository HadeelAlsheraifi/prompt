import React from "react";

const Home = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-text">
        <div className="form-container">
          <form>
            <label>
              Name:
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
