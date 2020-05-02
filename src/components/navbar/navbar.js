import React, { useState } from "react"
import Logo from "./logo"
import styled from "styled-components"
import NavLinks from "./navlinks"

const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  
  @media (min-width: 50em) {
    display: none;
}
`

const Navbox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 3rem;
  left: ${props => (props.open ? "0" : "-100%")};
  transition: all .1s linear;
  z-index: 99;
  
  @media (min-width: 50em) {
    justify-content: flex-end;
    flex-flow: row nowrap;
    position: inherit;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 1rem;
  height: .1rem;
  transition: all .1s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  
  ::before,
  ::after {
    width: 1rem;
    height: .1rem;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all .1s linear;
  }
  
  ::before {
    transform: ${props => props.open ? "rotate(-90deg) translate(-.4rem, 0)" : "rotate(0deg)"};
    top: -.4rem;
  }
  
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: .4rem;
  }
`

const Bar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  z-index: 999;
  
  @media (min-width: 50em) {
    margin-bottom: 0;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Bar>
      <Logo style={{ justifyContent: `flex-start`, marginBottom: `1rem` }}/>
      <Toggle style={{ justifyContent: `center`, alignItems: `center` }} navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open/> : <Hamburger/>}
      </Toggle>
      {navbarOpen ? (
        <Navbox open onClick={() => setNavbarOpen(!navbarOpen)}>
          <NavLinks/>
        </Navbox>
      ) : (
        <Navbox>
          <NavLinks/>
        </Navbox>
      )}
    </Bar>
  )
}

export default Navbar