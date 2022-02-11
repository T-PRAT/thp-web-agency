import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import works from '../../data/works';

export default function StudyCase() {
  const [currentWork, setCurrentWork] = useState(undefined);
  const {workSlug} = useParams();

  useEffect(() => {
    console.log(workSlug);
    const foundWork = works.find((work) => work.slug === workSlug);
    setCurrentWork(foundWork);
  }, [workSlug]);


  if (currentWork) return (
    <div className='container w-2/4 mx-auto flex mt-16 justify-end bg-slate-400  dark:bg-slate-800 rounded-lg'>
	  	<div className="flex-col text-slate-900 dark:text-slate-200">
	  		<h3 className='text-2xl font-semibold font-serif m-5'>{currentWork.title}</h3>
	  		<p className='p-7 text-lg font-light bg-slate-300 dark:bg-slate-600 '>{currentWork.content}</p>
	  		<h3 className='text-xl font-semibold font-serif m-5 text-right'>{currentWork.slug}</h3>
	  	</div>
	  </div>
  )
  else return (
    <div>Pas trouvé</div>
  )
}
