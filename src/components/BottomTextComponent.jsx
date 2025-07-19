import React from 'react'

const 
BottomTextComponent = ({text,color=0}) => {
  return (
    <div className={`z-50 h-[5vh] flex w-full text-[0.8vw] font-gmrkM px-[5vw]  ${color === 0 ? "text-white" : 'text-black'} justify-between `}>
        {text.map((i)=>(<p clas>{i}</p>))}
        

    </div>
  )
}

export default BottomTextComponent




