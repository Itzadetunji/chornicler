export type DisplayEnum = "Grid" | "List" | "Table";


export interface CollectionType {
	name: string;
	description: number;
	docs: string;
}
export const collectionData: Array<CollectionType> = [
	{ name: "Recipes", description: 1737811109052, docs: "5" },
	{ name: "Meal Planning", description: 1737811109052, docs: "3" },
	{ name: "Work Projects", description: 1737811109052, docs: "3" },
	{ name: "Fitness Goals", description: 1737811109052, docs: "3" },
	{ name: "Cooking dinner", description: 1737811109052, docs: "3" },
];

export const displayVariables: DisplayEnum[] = ["List", "Grid", "Table"];
