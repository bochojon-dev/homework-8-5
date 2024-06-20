import React from "react";
import seed from "../../assets/seed.png";
import "../seedra/Seedra.css";

const Seedra: React.FC = () => {
  return (
    <div className="seedra">
      <div className="container">
        <div className="seedra_contents">
          <div className="seedra_texts">
            <h3>Seedra helps to grow fast and efficiant</h3>
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>
            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. <br />
              <span>
                {" "}
                Your easy growing experience is our guarantee Spinach commom
                culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
                risotto, and more
              </span>
            </p>
            <p>
              {" "}
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
          <div className="seedra_img">
            <img src={seed} alt="seed" width={466} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seedra;
