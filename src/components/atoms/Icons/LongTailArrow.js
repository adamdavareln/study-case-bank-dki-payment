import { cn } from "@/services/cn";

const directionClassName = {
	left: "",
	right: "rotate-180",
	up: "rotate-90",
	down: "-rotate-90",
};

const LongTailArrow = ({
	size = 30,
	color = "#E21A1A",
	direction = "left",
	...props
}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={cn(directionClassName[direction])}
		{...props}
	>
		<path
			d="M11.9625 7.41251L4.375 15L11.9625 22.5875"
			stroke={color}
			strokeWidth="2"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M25.625 15H4.58752"
			stroke={color}
			strokeWidth="2"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default LongTailArrow;
