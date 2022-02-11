import React from 'react'
import web from '../../images/web.jpg'

export default function Home() {
  return (
	<div className='container mx-auto flex mt-24 justify-end bg-slate-300 dark:bg-slate-800 rounded-lg transition'>
		<img src={web} height="500" width="500" alt="web" className='rounded-lg'/>
		<div className="flex-col  text-center text-slate-900 dark:text-slate-200 m-5">
			<h3 className='text-4xl font-semibold font-serif'>Confiez vos rêves à des experts du Web</h3>
			<p className='mt-7 text-lg mx-5'>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO. Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
			<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12'>En savoir plus</button>
		</div>
	</div>
  )
}
