import React from "react";
import { FaGithub as GithubLogo } from "react-icons/fa6";

function Logo() {
  return (
    <div className="absolute top-2">
      <a href="https://interview-task-sandy.vercel.app/" target="_blank">
        <GithubLogo size={50} color="white" className="cursor-pointer" />
      </a>
    </div>
  );
}

export default Logo;
