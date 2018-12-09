let { useState, useEffect } = require('react')
let _ = require('lodash')

let supportsPassive = false

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true
    },
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {}



let defaultOptions = { throttle: 100 }

function useWindowScrollPosition(options) {
  let opts = Object.assign({}, defaultOptions, options)

  let [position, setPosition] = useState({})

  useEffect(() => {

    let handleScroll = _.throttle(() => {
      setPosition({x: window.pageXOffset, y: window.pageYOffset})
    }, opts.throttle)

    window.addEventListener(
      'scroll',
      handleScroll,
      supportsPassive ? { passive: true } : false
    )

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export default useWindowScrollPosition
