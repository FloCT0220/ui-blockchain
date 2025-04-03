import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { pinata } from "@/utils/config";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

function Trading() {
    const [files, setFiles] = useState<{ name: string; url: string }[]>([]);

    const [selectedMyNFT, setSelectedMyNFT] = useState<number | null>(null);

    const form = useForm({
        defaultValues: {
            price: "",
            walletAddress: "",
        },
    });

    const onSubmit = (data: { price: string; walletAddress: string }) => {
        if (!selectedMyNFT) {
            alert("Please select an NFT to trade.");
            return;
        }

        alert(
            `Trade submitted:\nNFT ID: ${selectedMyNFT}\nPrice: ${data.price}\nWhitelisted Wallet: ${data.walletAddress}`
        );
    };

    // Fetch NFTs from Pinata or your backend
    useEffect(() => {
        const fetchPinnedFiles = async () => {
            try {
                const response = await fetch("/api/getPinnedFiles");
                const data = await response.json();
                setFiles(data);
            } catch (error) {
                console.error("Error fetching pinned files:", error);
            }
        };

        fetchPinnedFiles();
    }, []);


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">NFT Transaction</h1>

            <div className="grid grid-cols-2 gap-8">
                {/* My NFTs */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">My NFTs</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg p-4 cursor-pointer ${
                                    selectedMyNFT === file.id ? "border-blue-500" : "border-gray-300"
                                }`}
                                onClick={() => setSelectedMyNFT(file.id)}
                            >
                                <img
                                    src={file.url}
                                    alt={file.name}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <p className="text-center">{file.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form for Transaction Details */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Update Price Field */}
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Update Price</FormLabel>
                                        <FormControl>
                                            <input
                                                {...field}
                                                type="number"
                                                placeholder="Enter price"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Wallet Address Field */}
                            <FormField
                                control={form.control}
                                name="walletAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wallet Address</FormLabel>
                                        <FormControl>
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter wallet address"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Submit Transaction
                                </button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Trading;