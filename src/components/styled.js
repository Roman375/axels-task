import styled from 'styled-components'

export const Container = styled.section `
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;

  a{
    text-decoration: none;
    background-color: #AC1D00;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
  }
  a:hover{
    background-color: black
  }
`


export const Wrapp = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #E6E4E4;
  border-radius: -8px;
  padding: 10px;
  align-items: center;
  
`

export const Search = styled.form `
  display: flex;
  justify-content: center;
  width: 50%
`