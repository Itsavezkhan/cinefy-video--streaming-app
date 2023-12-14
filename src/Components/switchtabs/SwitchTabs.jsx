import React from 'react'
import { useState } from 'react'




const SwitchTabs = ({data, onTabChange}) => {

    const [selectedTab, setSelectedTab] = useState(0)

    const ActionTab = (tab, index) =>{
        setSelectedTab(index);
        onTabChange(tab, index)
    }
   
  return (
    <>
     <div className='bg-white p-1 rounded-xl '>
        <div className='flex gap-2'>
            {data?.map((tab, index) => (
                <span onClick={()=> ActionTab(tab,index)} className={selectedTab === index ? "bg-blue-700 ease-in duration-200 rounded-lg px-2 py-1 text-slate-100" : "md:px-2 py-1"} key={index}>{tab}</span>
            ))}
        </div>
     </div>
      
    </>
  )
}

export default SwitchTabs
