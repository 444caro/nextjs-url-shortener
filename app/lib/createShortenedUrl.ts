"use server";
import { Url } from "@/types";
import getCollection, { URL_COLLECTION } from "@/db";
import getShortenedUrl from "./getShortenedUrl";

export default async function createShortenedUrl( originalUrl: string, aliasUrl: string): Promise<Url>{
    const ret = {
        originalUrl: originalUrl,
        aliasUrl: aliasUrl,
    };
    const checkShortenedUrl = await getShortenedUrl(aliasUrl);
    if (checkShortenedUrl) {
        throw new Error("Alias URL already exists");
    }
    const collection = await getCollection(URL_COLLECTION);
    const result = await collection.insertOne({...ret});
    if (!result.acknowledged) {
        throw new Error("Failed to create shortened URL");
    }
    return {...ret};
}