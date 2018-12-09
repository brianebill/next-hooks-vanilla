import Rocket from './Rocket';
import home from '../../data/home';

export default function Home ({ headline, subheadline, name}) {
  return (
    <section id='home' style={{ "height": "570px" }}>

      <div className='text' style={{ "top" : "171px"}}>

        <Rocket />

        <h1 className='headline'>{headline} <span className='name'>{name}</span></h1>
        <h4 className='subheadline'>{subheadline}</h4>

      </div>

      <style jsx global>{`
        #home {
          position: fixed;
          text-align: center;
          z-index:0;
          background: rgba(20,20,20,1);
          color: rgba(255,255,255,.9);
          width: 100%;
        }
        .name {
          color: #6694BD;
          font-weight: 200;
        }
        .text {
          margin: auto;
          position: absolute;
          width: 100%;
        }
        .headline {
          font-size: 26px;
          margin-top: 20px;
        }
        .subheadline {
          color: #3271A7;
          font-size: 16px;
          margin-top: -17px;
        }
      `}</style>
    </section>
  )
}
