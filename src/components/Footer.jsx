import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 px-2 md:px-6 bg-blue-600 text-white flex justify-center items-center gap-4">
      <p>Copyright &copy; {new Date(Date.now()).getFullYear()}</p>
    </footer>
  );
};

export default Footer;
