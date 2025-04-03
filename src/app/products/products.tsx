import React from 'react'
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function products() {
	const cards = [
		{
			id: 1,
			title: "Chair",
			description: "Deploy your new project in one-click.",
			image: "https://via.placeholder.com/150", // Replace with your image URL
		},
		{
			id: 2,
			title: "Table",
			description: "Collaborate with your team effectively.",
			image: "https://via.placeholder.com/150", // Replace with your image URL
		},
		{
			id: 3,
			title: "Shoe Rack",
			description: "Monitor your project's progress in real-time.",
			image: "https://via.placeholder.com/150", // Replace with your image URL
		},
		];
	return (
		<div>
			<h1 className="text-xl">Products</h1>
			<div className="flex flex-wrap gap-6 ">
			{cards.map((card) => (
				<Card key={card.id} className="w-[300px]">
				<CardHeader>
				<img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-t-md" />
				</CardHeader>
				<CardContent>
				<CardTitle>{card.title}</CardTitle>
				<CardDescription>{card.description}</CardDescription>
				</CardContent>
				<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
				</CardFooter>
				</Card>
			))}
			</div>
		</div>
	)
	}

export default products
