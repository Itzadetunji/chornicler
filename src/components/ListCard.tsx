"use client";

import { getCollectionIcon } from "@/utils/general";
import { NextPage } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CollectionType } from "@/utils/constants";

const ListCard: NextPage<{
	collection: CollectionType;
}> = ({ collection }) => {
	console.log(collection);
	return (
		<Card className="w-full bg-slate-100 shadow-none">
			<CardHeader className="py-3 px-2.5 flex-row items-center gap-3">
				{getCollectionIcon(collection.name)}
				{/* <FaRegCalendarCheck size={24} /> */}
				{/* <div className="bg-black size-6" /> */}
				<div className="flex flex-col gap-2">
					<CardTitle>{collection.name}</CardTitle>
					<CardDescription>{collection.description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
};

export default ListCard;
