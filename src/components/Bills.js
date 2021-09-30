import React from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
const Bills = (props) => {
  return (
    <div>
      <table className="table">
        <tbody>
          {props.billsList?.map((bill, i) => (
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
