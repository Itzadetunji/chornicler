import axios from "axios";
import { CollectionType } from "../utils/constants";

export const API1GetCollections = async (): Promise<{
	status: boolean;
	message: string;
	data: CollectionType[];
}> =>
	axios.get("/api/collections").then((res) => {
		return res.data;
	});


export const API1AddCollection = async (): Promise<{
	status: boolean;
	message: string;
	data: CollectionType[];
}> =>
	axios.post("/api/collections").then((res) => {
		return res.data;
	});

