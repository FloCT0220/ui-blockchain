'use client';

import React from "react";
import Materials from "./materials"; 
import Products from "./products"; 

function buy() {

	return (
		<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<Materials />
		<Products />
		</main>
		
	);
}

export default buy;