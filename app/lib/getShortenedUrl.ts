"use server";
import { Url } from "@/types";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function getShortenedUrl(aliasUrl: string,): Promise<string|null> {
    if (!aliasUrl) {
        return null;
    }
    const collection = await getCollection(URL_COLLECTION);
    const alias = await collection.findOne({ aliasUrl });
    if (!alias) {
        return null;
    }
    return alias.originalUrl;
}