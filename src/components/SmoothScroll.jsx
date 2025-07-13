import React from "react"

const SmoothScroll = ({ children }) => {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {children}
    </div>
  )
}

export default SmoothScroll
