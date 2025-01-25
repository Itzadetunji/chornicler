import listIcons from "@/components/ListIcons";
import { ReactNode } from "react";

export const getCollectionIcon = (
	collectionName: string,
	size?: number
): ReactNode => {
	const matchedIcon = listIcons(size).find((item) =>
		item.name.some(
			(name) => name.toLowerCase() === collectionName.toLowerCase()
		)
	);

	return matchedIcon
		? matchedIcon.icon
		: listIcons(size)[Math.floor(Math.random() * listIcons().length)].icon;
};
