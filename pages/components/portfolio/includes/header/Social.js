const Social = function({ link, svg, marginRight, marginTop }) {

  return (
    <div className='socials' style={{ "marginRight" : marginRight, "marginTop" : marginTop, "float" : "right" }}>
      <a href={link}>{svg}</a>

      <style jsx global>{`
        .socials { opacity: .5; }
        .socials:hover { opacity: 1; }
      `}</style>

    </div>
  )
}

export default Social
