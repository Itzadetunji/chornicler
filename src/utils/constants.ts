export type DisplayEnum = "Grid" | "List" | "Table";

export interface CollectionType {
	name: string;
	time_created: number;
	docs: string;
}

export const collectionData: Array<CollectionType> = [
	{ name: "Recipes", time_created: new Date().getTime(), docs: "5" },
	{ name: "Meal Planning", time_created: new Date().getTime(), docs: "3" },
	{ name: "Work Projects", time_created: new Date().getTime(), docs: "3" },
	{ name: "Fitness Goals", time_created: new Date().getTime(), docs: "3" },
	{ name: "Cooking dinner", time_created: new Date().getTime(), docs: "3" },
];

export const displayVariables: DisplayEnum[] = ["List", "Grid", "Table"];
