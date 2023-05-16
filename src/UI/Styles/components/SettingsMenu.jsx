import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #e5e5e5;
  color: #333;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export  {DropdownMenuItem,  DropdownMenu, DropdownButton, DropdownContainer,  };