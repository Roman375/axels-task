import styled from 'styled-components'

export const Container = styled.section `
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
  a {
    text-decoration: none;
    background-color: #AC1D00;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
  }
  a:hover {
    background-color: black
  }
`

export const Text = styled.h1 `
  display: flex;
  justify-content: center;
`
