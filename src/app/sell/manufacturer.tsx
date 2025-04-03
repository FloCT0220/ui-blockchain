import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { useImageHandler } from "@/components/image";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
				{/* manufactor
		picture (Pinata)
		data table for materials 
		inputs for name, price, 
		*/}


const formSchema = z.object({
	image: z
		.instanceof(File)
		.optional()
		.refine((file) => file?.size !== undefined, {
			message: "Please upload an image.",
		}),
	itemName: z.string().min(2, {
		message: "Item name must be at least 2 characters.",
	}),
	price: z.number().min(0, { 
		message: "Price must be a positive number." 
	}),
	materials: z.array(z.string()).nonempty({
		message: "Please select at least one category.",
	}),
});

const OPTIONS: Option[] = [
	{ label: 'nextjs', value: 'Nextjs' },
	{ label: 'Vite', value: 'vite', disable: true },
	{ label: 'Nuxt', value: 'nuxt', disable: true },
	{ label: 'Vue', value: 'vue, disable: true', disable: true },
	{ label: 'Remix', value: 'remix' },
	{ label: 'Svelte', value: 'svelte', disable: true },
	{ label: 'Angular', value: 'angular', disable: true },
	{ label: 'Ember', value: 'ember', disable: true },
	{ label: 'React', value: 'react' },
	{ label: 'Gatsby', value: 'gatsby', disable: true },
	{ label: 'Astro', value: 'astro', disable: true },
  ];
  

function Manufacturer() {
	const { url, setUrl, uploadImage } = useImageHandler();

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			image: undefined,
			itemName: "",
			price: 0,
			materials: [],
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Check if an image file is selected
		if (!values.image) {
			alert("No file selected");
			return;
		}
	
		try {	
			const fileUrl = await uploadImage(values.image);
	
			// Update the state with the uploaded file URL
			setUrl(fileUrl);
		} catch (e) {
			console.error(e);
			alert("Trouble uploading file");
		}
	
		console.log(values);
	}

	// 3. Handle image preview.
	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setUrl(URL.createObjectURL(file)); // Generate a preview URL
			form.setValue("image", file); // Set the file in the form state
		}
	};

	return (
		<div className="pb-12">
			<h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Product</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border border-gray-900/10 p-5 rounded-3xl">
					{/* Image Upload Field */}
					<div className="flex gap-8">
						<div className="flex-1">
							<FormField
								control={form.control}
								name="image"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Upload Image</FormLabel>
										<FormControl>
											<Input
												type="file"
												accept="image/*"
												onChange={(event) => {
													handleImageChange(event);
													field.onChange(event.target.files?.[0]); // Update form state
												}}
											/>
										</FormControl>
										<FormDescription>
											Upload an image of the item you are selling.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex-1 flex items-center justify-center border border-gray-300 rounded-md">
							{url ? (
								<img
									src={url}
									alt="Preview"
									className="h-50 object-contain"
								/>
							) : (
								<div className="w-full h-full flex items-center justify-center text-gray-500">
									No image selected
								</div>
							)}
						</div>
					</div>
	
					{/* Item Name Field */}
					<div className="flex gap-8">
						<div className="flex-1">
							<FormField
								control={form.control}
								name="itemName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Item Name</FormLabel>
										<FormControl>
											<Input placeholder="Enter item name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex-1">
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Enter price"
											value={field.value} // Bind the value to the form state
											onChange={(event) => field.onChange(Number(event.target.value))} // Convert string to number
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						</div>
					</div>
					<div className="flex gap-8">
						<div className="flex-1">
							<FormField
								control={form.control}
								name="materials"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Select Materials</FormLabel>
										<FormControl>
											<MultipleSelector
												defaultOptions={OPTIONS}
												value={OPTIONS.filter((option) =>
													field.value.includes(option.value)
												)}
												onChange={(selected) =>
													field.onChange(selected.map((option) => option.value))
												}
												placeholder="Select materials..."
												emptyIndicator={
													<p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
														No results found.
													</p>
												}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</div>
	
	
					{/* Submit Button */}
					<div className="flex justify-end">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default Manufacturer;