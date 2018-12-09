import { useState, useEffect } from "react";
import Circle from './Circle';
import useProgress from '../../hooks/useProgress'
import posed from "react-pose";

const ButtonWrapper = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.01 },
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.99 }
});

 const Button = function(props) {
  // let position = useProgress(props.start,props.end,props.duration)
  const [hovering, setHovering] = useState(false);

  return (
    <ButtonWrapper
      className='button-wrapper'
      style={{
        "opacity": props.opacity,
        "zIndex": props.zIndex,
        "cursor": "pointer"
      }}
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={props.action}
    >
      <div
        className='button'
        style={{
          opacity: props.opacity,
          position: 'absolute',
          bottom: props.bottom,
          left: props.left,
          top: props.top,
          marginTop: props.marginTop
        }}
      >
        <Circle {...props}/>
      </div>
    </ButtonWrapper>
  )
}

export default Button
