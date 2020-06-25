import styled from 'styled-components'

const LoginContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(82, 80, 80, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
 
  .show{
      visibility:visible;
  }
`

export const SignupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(82, 80, 80, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .showSignup{
    visibility:visible;
  }
`

export const Newspan = styled.span`
.li-style{
  text-decoration: none;
  list-style: none;
  padding-bottom: 0.3rem;
  cursor: pointer;
  font-weight: 100;
  color: var(--lightestBlue);
}
.border-line{
  border-bottom: solid var(--lightOrange) 1px;
  text-decoration: none !important;
  list-style: none !important;
  padding-top:0.2rem
}
.li-style:hover{
  text-decoration: none;
  list-style: none;
  padding-top: -10rem !important;
  color:var(--darkBlue);
  font-weight: 600;
  text-shadow: 2px 2px 16px #ccc;
}

`

export {LoginContainer}