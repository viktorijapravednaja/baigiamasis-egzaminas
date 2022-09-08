import axios from "axios";
import { useState, useEffect } from "react";

// Styles
import { StyledTable, StyledTh, StyledTr } from "./Table.style";

// Components
import { TableCell } from "../TableCell/TableCell";

export const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/customers")
      .then((res) => {
        return setData(res.data.customer);
      })
      .catch((err) => {
        setError("An error has occured.");
      });
  }, []);

  return (
    <StyledTable>
      <tbody>
        <StyledTr>
          <StyledTh> Full Name</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Date</StyledTh>
          <StyledTh>Time</StyledTh>
        </StyledTr>
        {data &&
          data.map((d) => {
            return (
              <StyledTr key={d._id}>
                <TableCell
                  name={d.name}
                  email={d.email}
                  date={d.date}
                  time={d.time}
                  id={d._id}
                />
              </StyledTr>
            );
          })}
      </tbody>
    </StyledTable>
  );
};
