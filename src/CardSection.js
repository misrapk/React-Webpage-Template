import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>{" "}
        <div className="row">
          <div className="col-4">
            <Card
              title="LearningPhase"
              buttonText="Click Here"
              caption="A free learning Website for all the learners out there"
              imgUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>{" "}
          <div className="col-4">
            <Card
              title="Long Hall"
              buttonText="Know More"
              caption="Know more about this long Ancient Hall"
              imgUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>{" "}
          <div className="col-4">
            <Card
              title="Monument"
              buttonText="About This"
              caption="Know about more such Ancient Monuments around globe"
              imgUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default CardSection;
