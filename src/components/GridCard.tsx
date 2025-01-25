import { format } from "date-fns";
import { NextPage } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getCollectionIcon } from "@/utils/general";
import { CollectionType } from "@/utils/constants";

const GridCard: NextPage<{
	collection: CollectionType;
}> = ({ collection }) => {
	return (
		<Card className="w-full bg-slate-100 shadow-none">
			<CardHeader className="py-2.5 px-2 items-start gap-1.5">
				{getCollectionIcon(collection.name)}
				
				<div className="flex flex-col gap-1.5">
					<CardTitle className="text-xl">{collection.name}</CardTitle>
					<CardDescription>
						{format(new Date(collection.time_created), "h:mma")}
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
};

export default GridCard;
