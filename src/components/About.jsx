import { useState } from "react";

import React from 'react';

function About() {
    const[Show, setShow] = useState(false);
    const[like, setlike] = useState(0);
  return (
    <>
    <div className="text-center">
        <p>Hello my name is Linkon <br/>
            {Show && "And am a frontend developer"}
        </p>
        <button onClick={() => setShow(!Show)} className="bg-amber-400 px-5 py-3 text-white">Read More</button>
    </div>

    {/*plus 1 like */}
    <div>
      <p>hello, please like my page </p>
      <button onClick={() => setlike(like + 1)}>HEART{like}</button>
    </div>
    </>
  );
}

export default About