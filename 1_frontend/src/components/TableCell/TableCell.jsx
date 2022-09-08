import axios from "axios";
import { useState } from "react";

// Styles
import { StyledTd, StyledButton } from "./TableCell.style";

export const TableCell = ({ name, email, date, time, id }) => {
  const [newTime, setNewTime] = useState("");

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:5000/customer/${id}`)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const updateCustomer = () => {
    const updateData = prompt("Enter new time: ");
    axios
      .put(`http://localhost:5000/customer/`, {
        id: id,
        updateData: updateData,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <StyledTd>{name} </StyledTd>
      <StyledTd>{email}</StyledTd>
      <StyledTd>{date}</StyledTd>
      <StyledTd>{time}</StyledTd>
      <td>
        <StyledButton id={id} color={"#cf578a"} onClick={updateCustomer}>
          Update
        </StyledButton>
      </td>
      <td>
        <StyledButton id={id} color={"#d3d3d3"} onClick={deleteCustomer}>
          Delete
        </StyledButton>
      </td>
    </>
  );
};
