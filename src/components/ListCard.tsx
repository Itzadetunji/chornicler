import { getCollectionIcon } from "@/utils/general";
import { NextPage } from "next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CollectionType } from "@/utils/constants";
import { format } from "date-fns";

const ListCard: NextPage<{
	collection: CollectionType;
}> = ({ collection }) => {
	return (
		<Card className="w-full bg-slate-100 shadow-none">
			<CardHeader className="py-3 px-2.5 flex-row items-center gap-3">
				{getCollectionIcon(collection.name)}
				<div className="flex flex-col gap-2">
					<CardTitle>{collection.name}</CardTitle>
					<CardDescription>
						{format(new Date(collection.time_created), "h:mma")}
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
};

export default ListCard;
