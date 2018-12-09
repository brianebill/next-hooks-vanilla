import { useState, useEffect } from "react";

let useProgress = (start,end,duration) => {
  let [progress, setProgress] = useState(start);

  useEffect(
    () => {
      const getProgress = ({elapsed, total}) => Math.min(elapsed / total, 1);
      const easeOut = progress => Math.pow(--progress, 5) + 1;
      const time = {
        start: performance.now(),
        total: duration
      };
      const finalPosition = 47.5;
      let rafId = null;

      const step = now => {
         time.elapsed = now - time.start;
         const progress = getProgress(time);
         const easing = easeOut(progress);
         const position = easing * finalPosition;
         //element.style.transform = `translate(${position}px)`;
      // let step = timestamp => {
      //   if (!start) start = timestamp;
      //   let progress = timestamp - start;
        setProgress(position*1000);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    },
    [start,end,duration]
  );

  return Math.min(progress / duration, duration);
}

export default useProgress;
