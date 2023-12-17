"use server"

import fs from 'fs'
import path from 'path';

export const getImages = async () => {

    const publicDirPath = path.join(process.cwd(), 'public', 'image'); // Adjust the 'images' folder as per your structure
    const images: any = [];

    try {
        const files = await fs.promises.readdir(publicDirPath);

        files.forEach(file => {
            // Check if the file is an image (you can modify this check based on your image extensions)
            if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
                images.push(`${file}`);
            }
        });

        return images;
    } catch (error) {
        console.error('Error reading public directory:', error);
        return [];
    }
}