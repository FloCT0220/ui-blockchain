import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useImageHandler } from "@/components/image";


import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
	weight: z .number().min(0, { 
		message: "Weight must be a positive number." 
	}),
	unit: z.string().min(1, {
		message: "Unit is required.",
	}),
});

function Supplier() {
	const { url, setUrl, uploadImage } = useImageHandler();

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		image: undefined,
		itemName: "",
		price: 0,
		weight: 0,
		unit: "",
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
			<h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Material</h1>
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
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
	
					{/* Price Field */}
					<div className="flex gap-8">
						<div className="flex-1">
							<FormField
								control={form.control}
								name="weight"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Weight</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter weight"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex-1">
							<FormField
								control={form.control}
								name="unit"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Unit</FormLabel>
										<FormControl>
											<Input placeholder="Enter unit (e.g., kg, lb)" {...field} />
										</FormControl>
										<FormMessage />
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

export default Supplier;