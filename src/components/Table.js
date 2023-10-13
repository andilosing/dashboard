import React from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";

function Table() {
  return (
    <div className="tableContainer">
      <div className="tableTopic">
        <div className="tableHeader">
          <h2>Recent Orders</h2>
          <a href="#" className="btn">View all</a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td>Star Refigeratio</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Alpha Cooling</td>
              <td>$1500</td>
              <td>Unpaid</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>Omega Heating</td>
              <td>$800</td>
              <td>Paid</td>
              <td><span className="status return">In Return</span></td>
            </tr>
            <tr>
              <td>Gamma HVAC</td>
              <td>$1900</td>
              <td>Unpaid</td>
              <td><span className="status progress">In Progress</span></td>
            </tr>
            <tr>
              <td>Delta Appliances</td>
              <td>$700</td>
              <td>Paid</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>Epsilon Freeze</td>
              <td>$1100</td>
              <td>Unpaid</td>
              <td><span className="status progress">In Progress</span></td>
            </tr>
            <tr>
              <td>Zeta Heat</td>
              <td>$950</td>
              <td>Paid</td>
              <td><span className="status progress">In Progress</span></td>
            </tr>
            <tr>
              <td>Eta Comfort</td>
              <td>$1000</td>
              <td>Unpaid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Theta Air</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
          </tbody>
          </table>
      </div>

      <div className="recentCustomers">
      <div className="tableHeader">
          <h2>Recent Customers</h2>
          </div>
          <table>
          <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            <tr>
                <td width="60px"><div className="userTd">AL</div></td>
                <td><h4>Andreas<br/><span>Losing</span></h4></td>
            </tr>
            
          </table>
      </div>
    </div>
  );
}

export default Table;
