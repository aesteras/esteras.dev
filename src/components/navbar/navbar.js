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
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 5rem;
  left: ${props => (props.open ? "0" : "-100%")};
  transition: all .1s linear;
  @media (min-width: 50em) {
    flex-flow: row nowrap;
    position: inherit;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 1.5rem;
  height: .15rem;
  transition: all .1s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 1.5rem;
    height: .15rem;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all .1s linear;
  }

  ::before {
    transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div style={{ display: `flex`, flexFlow: `row`, justifyContent: `space-between`, marginBottom: `2rem` }}>
      <Logo style={{ justifyContent: `flex-start`, marginBottom: `2rem` }}/>
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
    </div>
  )
}

export default Navbar