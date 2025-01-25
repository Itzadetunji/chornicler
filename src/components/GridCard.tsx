import { NextPage } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getCollectionIcon } from "@/utils/general";
import { CollectionType } from "@/utils/constants";

const GridCard: NextPage<{
	collection: CollectionType;
}> = ({ collection }) => {
	console.log(collection);
	return (
		<Card className="w-full bg-slate-100 shadow-none">
			<CardHeader className="py-2.5 px-2 items-start gap-1.5">
				{getCollectionIcon(collection.name)}
				{/* <div className="bg-black size-6"/> */}
				<div className="flex flex-col gap-1.5">
					<CardTitle className="text-xl">{collection.name}</CardTitle>
					<CardDescription>{collection.description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
};

export default GridCard;
