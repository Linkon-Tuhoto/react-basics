import { useEffect, useState } from "react";

import React from 'react';

function About(props) {
    const[Show, setShow] = useState(false);
    const[like, setlike] = useState(0);
    const[Clicking, setClicking] = useState(false);
    const[visible,setvisible] = useState(false);
    
    {/*useEffect(() => {
      function onScrolling(){
        const top = document.getElementById(id).getBoundingClientRect().top;
        if(top < window.innerHeight - 100)setvisible(true);
      }
      window.addEventListener("scroll", onScrolling);
      onScrolling();
      return () => 
        window.removeEventListener("scroll", onScrolling);
    }, [id]);*/}
  return (
    <>
    {/*<div id={id} className={`transition-all duration-700 ease-in-out transform ${visible ? "opacity-0 translate-y-0" : "opacity-100 translate-y-10"}`}>*/}
    <div className="text-center">
        <p>Hello my name is Linkon <br/>
            {Show && "And am a frontend developer"}
        </p>
        <button onClick={() => setShow(!Show)} className="bg-amber-400 px-5 py-3 text-white">Read More</button>
    </div>

    {/*plus 1 like  but stiil in useState*/}
    <div>
      <p>hello, please like my page </p>
      <button onClick={() => setlike(like + 1)}>HEART{like}</button>
    </div>

    {/*useState and props together*/}
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => setClicking(!Clicking)}>{ Clicking ? "opened" : "open it to read"}</button>
    </div>

    {/*useeffect*/}


    </>
  );
}

export default About