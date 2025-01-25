import { CollectionType } from "@/utils/constants";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export interface ApiResponse<T> {
	status: number;
	data: T | null;
	message: string;
}

// File path for storing collections
const COLLECTIONS_FILE_PATH = path.join(
	process.cwd() + "/src/app/api/collections/",
	"collections.json"
);

const readCollections = async (): Promise<CollectionType[]> => {
	try {
		const data = await fs.readFile(COLLECTIONS_FILE_PATH, "utf8");
		return JSON.parse(data);
	} catch (error) {
		console.log(error);

		const initialCollections = [
			{ name: "Recipes", time_created: new Date().getTime(), docs: "5" },
			{ name: "Meal Planning", time_created: new Date().getTime(), docs: "3" },
			{ name: "Work Projects", time_created: new Date().getTime(), docs: "3" },
			{ name: "Fitness Goals", time_created: new Date().getTime(), docs: "3" },
			{ name: "Cooking dinner", time_created: new Date().getTime(), docs: "3" },
		];

		try {
			await fs.writeFile(
				COLLECTIONS_FILE_PATH,
				JSON.stringify(initialCollections, null, 2)
			);
		} catch (writeError) {
			console.error("Could not create collections file:", writeError);
		}

		return initialCollections;
	}
};

// Utility function to write collections to file
const writeCollections = async (collections: CollectionType[]) => {
	await fs.writeFile(
		COLLECTIONS_FILE_PATH,
		JSON.stringify(collections, null, 2)
	);
};

// GET endpoint to retrieve collections
export const GET = async () => {
	try {
		const collections = await readCollections();
		const response: ApiResponse<CollectionType[]> = {
			status: 200,
			data: collections,
			message: "Collections retrieved successfully",
		};
		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.log(error);

		const response: ApiResponse<null> = {
			status: 500,
			data: null,
			message: "Failed to fetch collections",
		};
		return NextResponse.json(response, { status: 500 });
	}
};

// POST endpoint to create a new collection
export const POST = async () => {
	try {
		const collections = await readCollections();

		const createdCollection = {
			name: "New Collection " + (collections.length + 1),
			time_created: new Date().getTime(),
			docs: Math.floor(Math.random() * 10).toString(),
		};

		collections.push(createdCollection);

		// Write updated collections back to file
		await writeCollections(collections);

		const response: ApiResponse<CollectionType> = {
			status: 201,
			data: createdCollection,
			message: "Collection created successfully",
		};

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		console.log(error);
		const response: ApiResponse<null> = {
			status: 500,
			data: null,
			message: "Failed to create collection",
		};
		return NextResponse.json(response, { status: 500 });
	}
};
