import React from "react";

const Button = ({ styles, link, content }) => (
  <a href={link}>
    <button type="button" className={`mt-[7rem] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {content}
    </button>
  </a >

);

export default Button;
