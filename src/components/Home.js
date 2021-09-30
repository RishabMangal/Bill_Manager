import React from "react";
import Bills from "./Bills";

const Home = (props) => {
  return (
    <div className="p-4">
      <button
        className="btn btn-primary m-4"
        onClick={() => props?.history.push("/add-bill")}
      >
        Add Bill
      </button>
      <Bills {...props}></Bills>
    </div>
  );
};

export default Home;
