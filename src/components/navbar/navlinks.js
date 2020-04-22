import React from "react"
import { Link } from "gatsby"

const CustLink = props => (<Link to={props.to} style={{ marginRight: `1rem`, marginBottom: `2rem` }}>{props.children}</Link>)

const NavLinks = () => {
  return (
    <>
      <CustLink to="/">Home</CustLink>
      <CustLink to="/about/">About</CustLink>
      <CustLink to="/contact/">Contact</CustLink>
    </>
  )
}

export default NavLinks