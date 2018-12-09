import Social from './Social';
import social from "../../data/social";

export default function Header (props) {
  return (
    <nav id='nav' style={{ "top": "0px", "boxShadow" : "rgba(0,0,0,.24) 0px 2px 6px 0px" }}>
      <a
        id="logo"
        href="#home"
        onClick={(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }
        )}
      >
        <img src="https://s3-us-west-2.amazonaws.com/beb-ui/helmet.gif" style={{ "width" : "100%", "height" : "100%" }}/>
      </a>

      <div className='social'>
        {social.map((social, index) => (
          <Social
            key={index}
            link={social.link}
            svg={social.svg}
            marginRight={social.marginRight}
            marginTop={social.marginTop}
          />
        ))}
      </div>

      <style jsx global>{`
        #nav {
          display: block;
          position: fixed;
          height: 70px;
          z-index: 7;
          width: 100%;
          clear: both;
          background: #212121;
        }
        #logo {
          height: 40px;
          width: 40px;
          display: block;
          position: absolute;
          left: 20px;
          padding: 15px;
        }
        .social {
          float: right;
          padding-right: 40px;
          padding-top: 10px;
          height: 35px;
          width: 250px;
        }
      `}</style>
    </nav>
  )
}
