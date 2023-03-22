import styled from 'styled-components';
import { colors } from "../config";
import { BiSearch } from "react-icons/bi"


export const SearchBarIcon = styled.div`
    background-color: ${colors.black};
    position: relative;
    left: -45%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchBarInput = styled.input`
    background-color: ${colors.white};
    width: 60rem;
    color: black;
    left: 5rem;
    border: 0;
    padding: 0 12%;
    font-size: 1rem;
`;

export const IconSearch = styled(BiSearch)`
    background-color: white;
    color: black;
    margin-left: 2rem;
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    position: absolute;
`

export const ResultsNotFound = styled.p`
    display: flex;
    background-color: black;
    flex-direction: column;
    position: fixed;
    margin-left: 50rem;
    top: 10%;

`

export const RecentSearch = styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
    position: fixed;
    padding-left: 20rem;
    padding-right: 20rem;
    margin-left: 40rem;
    top: 9%;

`

export const RecentSearchListContainer = styled.ul`
    display: flex;
    background-color: black;
`



export const RecentSearchListElements = styled.li`
    display: flex;
    background-color: black;
    flex-direction: column;

`



export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: 25%;
  height: 2rem;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 2px;
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  color: #606060;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 16px;
  color: #606060;
  background-color: white;

  &::placeholder {
    color: #a0a0a0;
  }
`;

export const ClearIcon = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 40px;
  height: 100%;
  color: #606060;
  background-color: black;
  border: none;
  outline: none;
  cursor: pointer;
`;
