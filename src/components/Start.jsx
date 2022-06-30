import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <>
    <div className="start">
    <h1>CROREPATI CLONE</h1>
    <a href="https://www.linkedin.com/in/saurabh-yadav2003/" target="_blank" className="btn btn-primary"> - SAURABH YADAV </a>
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
    </>
  );
}