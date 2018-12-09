import { useState, useEffect } from "react";
import Button from '../button/Button';

const SectionNav = function(props) {
  /* button top -> projects */
  /* button previous -> # */
  /* button next -> #projects */
  /* button bottom -> #contact */
  /* section contact */
  /* button bottom -> #home */

  return (
    <div
      className='nav-container'
      style={{
        "opacity" : props.opacity,
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
        top='70px'
        action={(() => {
            //position previous project to left
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
            //position next project to right
            //transition position between current project and next
            //transition bg color
          }
        )}
      />
      <Button
        opacity=".8"
        icon='&#708;'
        scaleH={1}
        scaleV={1.25}
        klass='right-arrow'
        top='125px'
        action={(() => {
            //position next project to right
            //transition position between current project and next
            //transition bg color
          }
        )}
      />
    </div>
  )
}

export default SectionNav
