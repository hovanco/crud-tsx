import React from "react";
import { IUser } from "./interface";

// interface BudgetProps {
//     budgets: Budget[];
// }

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}
// export const BudgetOverview: React.FC<BudgetProps> = ({budgets}: BudgetProps) => {
const userTable: React.FunctionComponent<IProps> = (props) => {
  return (
    <section>
      <div className="tbl-header">
        <table style={{ border: 0 }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Company</th>
              <th>Price</th>
              <th colSpan={2} style={{ textAlign: "center" }}>
                Change
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="tbl-header">
        <table style={{ border: 0 }}>
          <thead>
            {props.users.length > 0 ? (
              props.users.map((i) => (
                <tr key={i.id}>
                  {/* <td>{i["name"]}</td>
                    <td>{i["age"]}</td>
                    <td>{i["profession"]}</td> */}
                  <th>{i.name}</th>
                  <th>{i.age}</th>
                  <th>{i.profession}</th>
                  <th colSpan={2} style={{ textAlign: "center" }}>
                    <button onClick={() => props.onEdit(i)}>edit</button>
                    <button onClick={() => props.onDelete(i)}>delete</button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>no users</td>
              </tr>
            )}
          </thead>
        </table>
      </div>

      <div className="tbl-header">
        <table style={{ border: 0 }}>
          <thead>
            <tr></tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default userTable;
