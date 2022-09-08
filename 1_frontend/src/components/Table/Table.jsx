import axios from "axios";
import { useState, useEffect } from "react";

// Styles
import { StyledTable, StyledTd, StyledTh } from "./Table.style";

// Components
import { Button } from "../Button/Button";

export const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/customers").then((res) => {
      if (!res.data) {
        setError("An error have occured.");
      }
      return setData(res.data.customer);
    });

    console.log(data);
  }, []);

  const deleteCustomer = (id) => {
    axios.delete("http://localhost:5000/delete", { id }).then((res) => {
      alert(res.data);
    });
  };
  return (
    <StyledTable>
      <tbody>
        <tr>
          <StyledTh> Full Name</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Date</StyledTh>
          <StyledTh>Time</StyledTh>
        </tr>
        {data &&
          data.map((d) => {
            return (
              <tr key={d._id}>
                <StyledTd>{d.name}</StyledTd>
                <StyledTd>{d.email}</StyledTd>
                <StyledTd>{d.date}</StyledTd>
                <StyledTd>{d.time}</StyledTd>
                <td>
                  <Button text="Update" color={"#00674C"} />
                </td>
                <td>
                  <Button
                    onCLick={deleteCustomer(d._id)}
                    text="Delete"
                    color={"#7D1713"}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </StyledTable>
  );
};
