import styled from 'styled-components'

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const CardContainer=styled.div`
  background-image:linear-gradient(to bottom, #2b2c49,#b5b9ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`

export const Header=styled.h1`
  color:#ffffff;
  font-size: 40px;
  font-weight: bold;
`

export const Button=styled.button`
   background-color: #ffffff;
   padding: 10px;
   border-radius: 10px;
   color: #303150;
   font-size: 15px;
   font-weight: bold;
   border: 0px;
   cursor: pointer;
`