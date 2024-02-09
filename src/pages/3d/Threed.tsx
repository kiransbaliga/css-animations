import "./threed.css";
const Threed = () => {
  return (
    <div className="threed-card">
      <div className="threed-text-content">
        {/* shopping cart item ui - heading, text, colour options, buy button */}

        <h2>Nike P160</h2>
        <div className="threed-image-space">
          <div className="threed-image">
            <img src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png" alt="" />
          </div>
        </div>
        <p>The stylish new sleeky design thats gonna rock the planet
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates quisquam sed id sint quam excepturi cupiditate, exwdawdaut repudiandae corrupti 
        </p>
        <div className="threed-colours">
          <div className="threed-colour threed-colour-1"></div>
          <div className="threed-colour threed-colour-2"></div>
          <div className="threed-colour threed-colour-3"></div>
          <div className="threed-colour threed-colour-4"></div>
        </div>
        <button className="threed-buy-btn">Buy</button>
      </div>
    </div>
  );
};

export default Threed;
