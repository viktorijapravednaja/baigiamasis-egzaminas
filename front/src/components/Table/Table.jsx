import React from "react";

// Styles
import { StyledTable, StyledTd, StyledTh } from "./Table.style";

// Components
import { Button } from "../Button/Button";

export const Table = () => {
  return (
    <StyledTable>
      <tr>
        <StyledTh> Full Name</StyledTh>
        <StyledTh>Email</StyledTh>
        <StyledTh>Date</StyledTh>
        <StyledTh>Time</StyledTh>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Johnny Depp</StyledTd>
        <StyledTd>69699@gmail.com</StyledTd>
        <StyledTd>2010-22-22</StyledTd>
        <StyledTd>16:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
      <tr>
        <StyledTd>Brad Pitt</StyledTd>
        <StyledTd>cool@gmail.com</StyledTd>
        <StyledTd>2010-20-20</StyledTd>
        <StyledTd>10:45</StyledTd>
        <td>
          <Button text="Update" color={"#00674C"} />
        </td>
        <td>
          <Button text="Delete" color={"#7D1713"} />
        </td>
      </tr>
    </StyledTable>
  );
};
