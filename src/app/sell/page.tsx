'use client'
import React from 'react'
import Supplier from "./supplier"; 
import Manufacturer from "./manufacturer"; 
import Trading from "./trading"; 


function sell() {
  
	return (
		<main>
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				{/* <Supplier />
				<Manufacturer /> */}
				<Trading />
			</div>
		</main>
	)
}

export default sell
