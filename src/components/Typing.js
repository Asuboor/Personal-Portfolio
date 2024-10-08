import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Typing = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'I am a Full Stack Developer',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
     
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '2em', display: 'inline-block', }}
    repeat={Infinity}
  />
  )
}

export default Typing
