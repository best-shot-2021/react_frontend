import React from "react";
import './Component.css';

const Navbar = () => {
  let logoUrl =
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fv9aC8%2Fbtrq4qrWcsk%2FozICp3K9svRMPLF2G09jS1%2Fimg.png"
  return (
    <nav>
      <img alt="Result logo" className="resultLogo" src={logoUrl} />
      {/* <h1 className="navlogo">Movie Guide</h1> */}
    </nav>
  )
}

export default Navbar
