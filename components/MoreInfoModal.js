import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'When is the conference holding?',
      des:'The conference holds from the 1st to 4th of June 2023'
    },
    {
      title:'How many speakers daily?',
      des:'Two catalysts will speak and share unconventional strategies for your growth journey daily'
    },
    {
      title:'How many days would the conference hold?',
      des:'The Growth conference would hold for 4 days. But it does not end there. Beyond the conference, you will get personalized guidance to monitor and help you grow faster.'
    },
     {
       title:'What time will it hold?',
       des:'7pm Daily'
    },
    {
      title:'Where will it hold?',
      des:'The Conference will hold on telegram'
    },
    {
      title:'Is registration mandatory?',
      des:'Yes it is.'
    },
  ]
  return (
    <div className="container mx-auto py-20" id='FAQ'>
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Common questions
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-[#0c442a] group-focus:bg-[#0c442a] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-[#0c442a] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal