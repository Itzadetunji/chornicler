"use client";

import GridCard from "@/components/GridCard";
import ListCard from "@/components/ListCard";
import Loader from "@/components/Loader";
import TableView from "@/components/TableCard";
import { Button } from "@/components/ui/button";
import { useAddCollections, useGetCollections } from "@/http/collectionQueries";
import {
	CollectionType,
	DisplayEnum,
	displayVariables,
} from "@/utils/constants";
import React from "react";
import { GoPlus } from "react-icons/go";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import { NextPage } from "next";

const Home: NextPage = () => {
	const getCollectionsQuery = useGetCollections();
	const addCollectionMutation = useAddCollections();
	const [displayType, setDisplayType] = React.useState<DisplayEnum>("Table");
	const [collections, setCollections] = React.useState<CollectionType[]>([]);

	React.useEffect(() => {
		if (getCollectionsQuery.data && getCollectionsQuery.isSuccess)
			setCollections(getCollectionsQuery.data?.data || []);
	}, [getCollectionsQuery.data]);
	return (
		<main className="px-4 bg-white flex flex-col gap-6">
			<div>
				<h1 className="mt-4 text-black font-semibold text-2xl">Collections</h1>
				<p className="text-xs">
					Combined documents that have a similar subject matter.
					<br />
					Collections consist of one or more documents
				</p>
			</div>
			<section className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<Select
						value={displayType}
						onValueChange={(value: DisplayEnum) => setDisplayType(value)}
					>
						<SelectTrigger className="border-none p-1 shadow-none drop-shadow-none w-fit">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Display Type</SelectLabel>
								{displayVariables.map((variable, idx) => (
									<SelectItem
										key={idx}
										value={variable}
									>
										{variable}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Button
						onClick={() => {
							addCollectionMutation.mutate();
						}}
						disabled={addCollectionMutation.isPending}
					>
						<GoPlus size={24} />
						<p>Add New Collection</p>
					</Button>
				</div>

				{getCollectionsQuery.isPending ? (
					<Loader size={24} />
				) : (
					<>
						{displayType === "List" && (
							<div className="flex flex-col items-stretch gap-3">
								{collections.map((collection, idx) => (
									<ListCard
										key={idx}
										collection={collection}
									/>
								))}
							</div>
						)}
						{displayType === "Grid" && (
							<div className="grid grid-cols-2 place-content-stretch gap-3">
								{collections.map((collection, idx) => (
									<GridCard
										key={idx}
										collection={collection}
									/>
								))}
							</div>
						)}
						{displayType === "Table" && <TableView collections={collections} />}
					</>
				)}
			</section>
		</main>
	);
};

export default Home;
