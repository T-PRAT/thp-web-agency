import React from 'react'

export default function Navbar() {
  return (
	<div className='w-100 bg-slate-800 h-16 px-10 flex justify-between'>
		<div className='flex w-1/4 justify-evenly'>
			<svg className="w-10 h-10 my-3" fill="#60a5fa" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
			<a href="" className='my-4 font-sans font-medium text-lg text-slate-100 hover:text-blue-400'>Web Agency</a>
			<a href="" className='my-4 font-sans font-medium text-lg text-slate-100 hover:text-blue-400'>About</a>
			<a href="" className='my-4 font-sans font-medium text-lg text-slate-100 hover:text-blue-400'>works</a>
		</div>
		<div className=' h-10 w-10 m-3 rounded-full'>
			<svg className="w-9 h-9 bg-center hover:text-slate-100 text-blue-400" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
		</div>
	</div>
  )
}
