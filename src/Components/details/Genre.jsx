import React from 'react'

const Genre = ({genres}) => {
  return (
    <>
     <div className='gap-x-1 flex flex-row wrap'>
     {genres?.map((g) => <p key={g.id} className='text-slate-300 font-normal px-2 py-1 bg-pink-500 items-center rounded-[10px]'>{g.name}</p>)}
     </div>
      
    </>
  )
}

export default Genre
