const Project = function({ isCurrent, img, bg, description, technology, id, marginTop}) {
  if (isCurrent) {
    return (
      <div
        id='holder'
        style={{
          "height" : "520px",
          "boxShadow" : "rgba(0,0,0,.24) 0px 2px 6px 0px",
          "background" : bg,
          "overflow": "visible",
          "opacity" : isCurrent ? 1 : 0,
          "zIndex" : isCurrent ? 1 : -1,
          "width": "100%",
        }}
      >
        <div
          className='project'
          id={id}
          style={{
            "width" : '100%',
            "top": 0,
            "left": 0,
            "zIndex": '0',
          }}
        >
          <div className='project-description'>
            <div className='project-description-text'>
              <h2>{description}</h2>
              <p>{technology}</p>
            </div>
          </div>
          <div
            className='project-image-container'
            style={{ "textAlign" : "center" }}
          >
            <img
              className='project-image'
              src={img}
              style={{
                "maxWidth" : "100%",
                "maxHeight" : "100%",
                "marginTop" : marginTop
              }}
            />
          </div>
        </div>

        <style jsx global>{`
          .project {
            height: 640px;
            overflow: hidden;
            transition: opacity 1s;
          }
          .project-description {
            width: 32%;
            padding-right: 2%
            height: 640px;
            color: rgba(255,255,255,.65);
            position: absolute;
            left: 0;
            vertical-align: top;
          }
          .project-description-text {
            top: 140px;
            padding-left: 20%;
            padding-right: 5%;
            position: absolute;
            width: 100%;
          }
          .project-image-container {
            width: 60%;
            position: absolute;
            left: 35%;
            height: 640px;
          }
          .project-image
            display: block;
            vertical-align: middle;
            border: 0;
          }
        `}</style>
      </div>
    )
  } else { return false }
}

export default Project
