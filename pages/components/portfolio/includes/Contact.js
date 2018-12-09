export default function Contact ({ headline, subheadline, phone, email, resume, code }) {
  return (
    <div id='contact'>

      <div className="text">
        <h2>{headline}</h2>
        <h3 style={{ "marginTop": "-15px"}}>
          {subheadline}
        </h3>

        <p>{phone}</p>
        <p>{email}</p>
        <a href={resume.link} download target="_blank">{resume.text}</a>
        <p style={{
          "paddingTop": "200px", 
          "maxWidth" : "90%",
          "margin" : "auto" }}
          >
          <a href={code.link} target="_blank">{code.text}</a>
        </p>
      </div>

      <div className="stars"></div>
      <div className="twinkling"></div>

      <style jsx global>{`
        #contact {
          z-index: 3;
          height: 500px;
          width: 100%;
          color: rgba(255,255,255,1);
          text-align: center;
          padding-top: 170px;
          margin-top: -20px;
          position: relative;
          background-color: rgba(0,0,0,1);
        }

        .text {
          position: absolute;
          top: 170px;
          z-index: 4;
        }

        @keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        @-webkit-keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        @-moz-keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        @-ms-keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }

        @keyframes move-clouds-back {
            from {background-position:0 0;}
            to {background-position:10000px 0;}
        }
        @-webkit-keyframes move-clouds-back {
            from {background-position:0 0;}
            to {background-position:10000px 0;}
        }
        @-moz-keyframes move-clouds-back {
            from {background-position:0 0;}
            to {background-position:10000px 0;}
        }
        @-ms-keyframes move-clouds-back {
            from {background-position: 0;}
            to {background-position:10000px 0;}
        }

        .stars, .twinkling, .clouds {
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          width:100%;
          height:100%;
          display:block;
          z-index: 3;
        }

        .stars {
          background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
          z-index:0;
        }

        .twinkling{
          background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
          z-index:1;

          -moz-animation:move-twink-back 200s linear infinite;
          -ms-animation:move-twink-back 200s linear infinite;
          -o-animation:move-twink-back 200s linear infinite;
          -webkit-animation:move-twink-back 200s linear infinite;
          animation:move-twink-back 200s linear infinite;
        }

      `}</style>
    </div>
  )
}
