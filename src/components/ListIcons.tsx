import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoIosFitness } from "react-icons/io";
import { LuBriefcaseBusiness, LuCookingPot } from "react-icons/lu";

const listIcons = (size?: number) => [
	{
		name: ["Recipes", "Cooking dinner"],
		icon: <LuCookingPot size={size ?? 24} />,
	},
	{ name: ["Meal Planning"], icon: <FaRegCalendarCheck size={size ?? 24} /> },
	{ name: ["Work Projects"], icon: <LuBriefcaseBusiness size={size ?? 24} /> },
	{ name: ["Fitness Goals"], icon: <IoIosFitness size={size ?? 24} /> },
];
export default listIcons;
