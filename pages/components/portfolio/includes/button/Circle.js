export default function Circle(props) {
  let h = props.scaleH;
  let v = props.scaleV;
  return (
    <div className='circle'>
      <div
        className={props.klass}
        style={{
          "transform" : `scale(${h},${v})`,
        }}
      >
        <a className='noselect'>{props.icon}</a>
      </div>
      <style jsx global>{`
        .circle {
          background: rgba(255,255,255,1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
          transition: box-shadow .3s;
          transition: opacity 0.5s;
        }
        .circle:hover {
          box-shadow: 0 2px 5px rgba(33,33,33,1);
        }
        .down-arrow {
          padding-top: 13px;
          padding-left: 1px;
          color: rgba(20,20,20,1);
          font-size: 30px;
          font-family: helvetica;
        }
        .right-arrow {
          padding-top: 11px;
          padding-left: 4px;
          color: rgba(20,20,20,1);
          font-size: 30px;
          font-family: helvetica;
          clear: both;
        }
        .left-arrow {
          padding-top: 11px;
          margin-left: -4px;
          color: rgba(20,20,20,1);
          font-size: 30px;
          font-family: helvetica;
          clear: both;
        }
        .up-arrow {
          padding: 10px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          font-family: helvetica;
        }
        .noselect {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  )
}
