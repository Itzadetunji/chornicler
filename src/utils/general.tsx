import { listIcons } from "@/app/page";
import { ReactNode } from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";

export const getCollectionIcon = (
	collectionName: string,
	size?: number
): ReactNode => {
	const matchedIcon = listIcons(size).find((item) =>
		item.name.some(
			(name) => name.toLowerCase() === collectionName.toLowerCase()
		)
	);

	return matchedIcon ? matchedIcon.icon : <FaRegCalendarCheck size={24} />;
};
