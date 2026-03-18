import { useState } from "react";

import React from 'react';

function About() {
    const[Show, setShow] = useState(false);
  return (
    <>
    <div>
        <p>Hello my name is Linkon <br/>
            {Show && "And am a frontend developer"}
        </p>
        <button onClick={() => setShow(!Show)}>Read More</button>
    </div>
    </>
  );
}

export default About