import React from 'react'
import { Link } from 'react-router-dom'
import works from '../../data/works'

export default function Works() {
  return (
  <div className='container w-2/4 mx-auto mt-16 bg-slate-400  dark:bg-slate-800 rounded-lg'>
		<div className="flex-col text-slate-900 dark:text-slate-200">
			<h3 className='text-2xl font-semibold p-5'>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
			<p className='p-3 text-lg bg-slate-300 dark:bg-slate-600 '>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <div className='flex flex-col py-3'>
        { works.map((work) => (
          <Link to={`/works/${work.slug}`} key={work.slug} className='hover:text-blue-400 ml-10 m-1'>&#8680; {work.title}</Link>
        ))}
      </div>
		</div>
	</div>
  )
}
