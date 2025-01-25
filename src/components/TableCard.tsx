import { CollectionType } from "@/utils/constants";
import { getCollectionIcon } from "@/utils/general";
import { format } from "date-fns";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";
import { Button } from "./ui/button";

const TableView: React.FC<{ collections: CollectionType[] }> = ({
	collections,
}) => {
	return (
		<Table>
			<TableHeader className="[&_tr]:border-b-0">
				<TableRow>
					<TableHead className="text-slate-600">Name</TableHead>
					<TableHead className="text-slate-600">Created</TableHead>
					<TableHead className="text-slate-600">Docs</TableHead>
					<TableHead className="text-right text-slate-600"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="[&_tr:last-child]:border-b ">
				{collections.map((collection, idx) => (
					<TableRow
						key={idx}
						className="border-b-[1.5px] border-b-slate-200"
					>
						<TableCell className="font-semibold p-1.5">
							<div className="flex items-center space-x-1">
								{getCollectionIcon(collection.name, 18)}
								<p className="text-xs">{collection.name}</p>
							</div>
						</TableCell>
						<TableCell className="font-medium text-slate-600 p-1.5 text-xs">
							Today{" "}
							<p className="lowercase">
								{format(new Date(collection.time_created), "h:mma")}
							</p>
						</TableCell>
						<TableCell className="font-medium p-1.5">
							<p className="border w-fit p-1 text-slate-600">
								{collection.docs}
							</p>
						</TableCell>
						<TableCell className="font-medium p-1.5">
							<Button className="p-2 w-fit h-fit">
								<VscChevronRight />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default TableView;
