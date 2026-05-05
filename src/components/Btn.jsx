import React from 'react'

const Btn = ({children}) => {
  return (
    <button className="bg-primary px-6 py-3.5 font-bold leading-4 text-white rounded-full">
      {children}
    </button>

  )
}

export default Btn
