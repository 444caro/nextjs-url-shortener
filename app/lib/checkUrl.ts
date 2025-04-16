"use server";

export default async function checkUrl(url: string): Promise<boolean> {
    try{
        const response = await fetch(url);
        return response.status >= 200 && response.status < 400;
    } catch (error) {
        console.error("Error validating URL:", error);
        return false;
    }
}