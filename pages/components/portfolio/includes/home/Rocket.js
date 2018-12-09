import React, {
  useState,
  useEffect,
} from "react";

const Rocket = function() {

  useEffect(
    () => {
      // a few helper functions...
      // for creating the inner elements of an SVG, https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
      const createSVGElement = s =>
        document.createElementNS("http://www.w3.org/2000/svg", s);

      // alias the querySelector
      const $ = s => document.querySelector(s);

      // used to easily give a number between x and y
      const randomRange = (min, max) => Math.random() * (max - min) + min;

      // generate a <circle> element with a random radius and x and y position
      const createCircle = () => {
        const $circle = createSVGElement("circle");
        $circle.setAttribute("r", randomRange(0.5, 2));
        $circle.setAttribute("fill", "#AAB7C4");
        $circle.setAttribute("cx", randomRange(0, 75));
        $circle.setAttribute("cy", randomRange(0, 75));
        return $circle;
      };

      // grab some of the DOM elements needed
      const $rocket = $("#rocket-icon");
      const $top = $rocket.querySelector("*");
      const $flame = $(".flame");

      // generate a set of a transforms that randomly scales the width and height
      // of the rocket’s flame
      const flicker = Array.from({ length: 20 }).map(() => ({
        transform: `scale(${randomRange(0.9, 1.2)}, ${randomRange(0.9, 1.2)})`,
      }));
      $flame.animate(flicker, { duration: 750, iterations: Infinity });

      // create and insert the stars (circles) to the SVG
      const $stars = Array.from({ length: 10 }).map(() => createCircle());
      $stars.forEach($star =>
        $rocket.insertBefore($star, $top)
      );

      // animate the stars
      const across = [
        { cx: "75px", fillOpacity: 0 },
        { fillOpacity: 1 },
        { cx: "0", fillOpacity: 0 },
      ];
      $stars.forEach($star => {
        const duration = randomRange(1000, 2000);
        $star.animate(across, { duration, iterations: Infinity });
      });
    }, []
  );



  return (
    <div id="rocket">
      <svg id="rocket-icon" viewBox="0 0 75 75"><polygon fill="#3271A7" points="18 21 35 21 44 30 27 30"/><polygon fill="#3271a7" points="27 45 44 45 35 54 18 54"/><path fill="#3271a7" d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z"/><path fill="#6694BD" d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z"/><path fill="#3271a7" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z"/><path fill="#6694BD" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z"/><path fill="#ECFAFF" d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z"/><path fill="#FCFEFF" d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z"/><circle cx="49.5" cy="37.5" r="3.5" fill="#3271a7"/><path fill="#6694BD" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z"/><path fill="orange" d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z" className="flame"/></svg>

      <style jsx global>{`
        #rocket {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(20,20,20,1);
        }

        #rocket-icon {
          width: 100px;
          transform: rotate(-45deg);
        }

        .flame {
          transform-origin: 15px 37.5px;
        }

        a {
          color: rgb(104, 212, 248);
        }

      `}</style>
    </div>
  )
}

export default Rocket
