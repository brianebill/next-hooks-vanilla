function HomeSpacer(props) {
  return (
    <div
      id="home-spacer"
      style={{ "height" : "500px" }}
    >
      <style jsx global>{`
        #home-spacer {
          position: relative;
          overflow: hidden;
          z-index: 1;
          max-width: 1px;
        }
      `}</style>
    </div>
  )
}

export default HomeSpacer
