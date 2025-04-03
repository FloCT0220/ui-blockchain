import React from 'react'
import { usePrivy } from "@privy-io/react-auth";



function userObject() {
	const { user } = usePrivy();
	return (
		<div>
			<p className="mt-6 font-bold uppercase text-sm text-gray-600">
				User object
			</p>
			<pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
				{JSON.stringify(user, null, 2)}
			</pre>
		</div>
	)
}

export default userObject
