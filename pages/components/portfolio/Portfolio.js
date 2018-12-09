import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";
// import useWindowScrollPosition from './hooks/useWindowScrollPosition'
import Home from './includes/home/Home';
import HomeSpacer from './includes/home/HomeSpacer';
import Project from './includes/project/Project';
import Button from './includes/button/Button';
import Header from './includes/header/Header';
import Contact from './includes/Contact';
import home from "./data/home";
import projects from "./data/projects";
import contact from "./data/contact";


const Portfolio = function() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
          return {
            ...state,
            currentIndex: (state.currentIndex + 1 + projects.length) % projects.length,
            // isPlaying: false
          };
          case "PREV":
            return {
              ...state,
              currentIndex: (state.currentIndex - 1 + projects.length) % projects.length,
              // isPlaying: false
            };
        default:
          return state;
      }
    },
    {
      currentIndex: 0
    }
  );

  return (
    <div id='app'>
      <Header />
      <Home
        headline={home.headline}
        subheadline={home.subheadline}
        name={home.name}
      />
      <HomeSpacer/>
      <section
        id='projects'
        style={{
          "height" : "680px",
          "zIndex": "1",
          "background": "rgba(255,255,255,1)",
          "position": "relative",
        }}
      >

        <Button
          opacity={1}
          id='button'
          start={0}
          end={50}
          duration={1000}
          icon='&#709;'
          scaleH={1.25}
          scaleV={1}
          klass='down-arrow'
          position='absolute'
          left='48.5%'
          zIndex={5}
          top="-45px"
          action={(() => {
              window.scrollTo({
                top: 500,
                left: 0,
                behavior: 'smooth'
              })
            }
          )}
        />

        {projects.map((project, index) => (
          <Project
            key={index}
            id={`project-${index}`}
            bg={project.bg}
            img={project.img}
            description={project.description}
            technology={project.technology}
            isCurrent={index === state.currentIndex}
            ariaHidden={(index != state.currentIndex).toString()}
            marginTop={project.marginTop}
          />
        ))}

        <div
          className='nav-container'
          style={{
            "zIndex" : "5",
            "position": "absolute",
            "right": "75px",
            "top": "120px"
          }}
        >
          <Button
            opacity=".8"
            icon='&#706;'
            scaleH={1}
            scaleV={1.25}
            klass='left-arrow'
            top='90px'
            action={(() => {
                dispatch({ type: "PREV" });
                //get index
                //position previous project (index-1 unless index === 0) to left
                //transition position between current project and previous
                //transition bg color
              }
            )}
          />
          <Button
            opacity=".8"
            icon='&#707;'
            scaleH={1}
            scaleV={1.25}
            klass='right-arrow'
            top='25px'
            action={(() => {
                dispatch({ type: "NEXT" });
                //get index
                //position next project to right
                //transition position between current project and next
                //transition bg color
              }
            )}
          />

          <Button
            opacity=".8"
            icon='&#709;'
            scaleH={1.25}
            scaleV={1}
            klass='down-arrow'
            top='280px'
            action={(() => {
                window.scrollTo({
                  top: 1090,
                  left: 0,
                  behavior: 'smooth'
                })
              }
            )}
          />
        </div>

      </section>
      <Contact
        headline={contact.headline}
        subheadline={contact.subheadline}
        phone={contact.phone}
        email={contact.email}
        resume={contact.resume}
        code={contact.code}
      />
      <style jsx global>{`
        #app {
          position: absolute;
          overflow: hidden;
          width:100%;
        }
      `}</style>
    </div>
  )
}

export default Portfolio
