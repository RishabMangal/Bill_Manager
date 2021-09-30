import React, { useState } from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
const Bills = (props) => {
  const [category, setCat] = useState("");
  const [billsList, setBills] = useState([...props.billsList]);
  const filterBills = () => {
    if (category) {
      let temp = props.billsList.filter((bill) => bill.category === category);
      setBills([...temp]);
    } else setBills([...props.billsList]);
  };
  return (
    <div>
      <div className="m-4">
        <div>Filter By : </div>
        <div>
          <input
            value={category}
            onChange={(e) => setCat(e.target.value)}
            placeholder={"Category"}
          ></input>
          <button className="btn btn-primary" onClick={filterBills}>
            Filter
          </button>
        </div>
      </div>
      <table className="table">
        <tbody>
          {billsList?.map((bill, i) => (
            <tr key={bill.id}>
              <Bill {...bill} {...props}></Bill>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    billsList: state.bills.billsList,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addBill: (data) => dispatch(AC.addBill(data)),
//   };
// }
export default connect(mapStateToProps)(Bills);
