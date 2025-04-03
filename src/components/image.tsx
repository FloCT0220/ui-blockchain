"use client";

import { useState } from "react";
import { pinata } from "@/utils/config";

export function useImageHandler() {
    const [url, setUrl] = useState<string>("");
    // Handle image upload
    const uploadImage = async (image: File) => {
        try {
            // Fetch the temporary upload URL
            const urlRequest = await fetch("/api/url");
            const urlResponse = await urlRequest.json();

            // Upload the file using the signed URL
            const upload = await pinata.upload.public.file(image).url(urlResponse.url);

            // Convert the CID to a public URL
            const fileUrl = await pinata.gateways.public.convert(upload.cid);

            return fileUrl; // Return the uploaded file URL
        } catch (error) {
            console.error(error);
            throw new Error("Trouble uploading file");
        }
    };

    return { url, setUrl, uploadImage };
}

