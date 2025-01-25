import { CollectionType } from "@/utils/constants";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export interface ApiResponse<T> {
	status: number;
	data: T | null;
	message: string;
}

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = process.env.NEXT_PUBLIC_MONGO_DB_NAME;
const COLLECTION_NAME = process.env.NEXT_PUBLIC_MONGO_DB_COLLECTION_NAME ?? "";

// Utility function to connect to MongoDB
const connectToDatabase = async () => {
	const client = new MongoClient(MONGO_URI);
	await client.connect();
	const db = client.db(DB_NAME);
	return { db, client };
};

// GET endpoint to retrieve collections
export const GET = async () => {
	try {
		const { db, client } = await connectToDatabase();
		const collections = await db
			.collection<CollectionType>(COLLECTION_NAME)
			.find()
			.toArray();
		client.close();

		const response: ApiResponse<CollectionType[]> = {
			status: 200,
			data: collections,
			message: "Collections retrieved successfully",
		};
		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.error("Error fetching collections:", error);

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
		const { db, client } = await connectToDatabase();
		const collections = await db
			.collection<CollectionType>(COLLECTION_NAME)
			.find()
			.toArray();

		const createdCollection: CollectionType = {
			name: "New Collection " + (collections.length + 1),
			time_created: new Date().getTime(),
			docs: Math.floor(Math.random() * 10).toString(),
		};

		await db
			.collection<CollectionType>(COLLECTION_NAME)
			.insertOne(createdCollection);
		client.close();

		const response: ApiResponse<CollectionType> = {
			status: 201,
			data: createdCollection,
			message: "Collection created successfully",
		};

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		console.error("Error creating collection:", error);

		const response: ApiResponse<null> = {
			status: 500,
			data: null,
			message: "Failed to create collection",
		};
		return NextResponse.json(response, { status: 500 });
	}
};
