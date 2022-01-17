import React from "react"

const Navbar = () => {
  let logoUrl =
    "https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
  return (
    <nav>
      <img alt="Star Wars logo" className="logo" src={logoUrl} />
      <h1 className="navlogo">Movie Guide</h1>
    </nav>
  )
}

export default Navbar
