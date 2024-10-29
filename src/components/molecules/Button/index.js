"use client";

import { cn } from "@/services/cn";
import PropTypes from "prop-types";

const Button = ({
	children,
	className,
	size = "medium",
	disabled = false,
	...props
}) => {
	const styles = {
		large: "h-[60px]",
		medium: "h-[45px]",
		small: "h-[30px] text-xs",
	};

	const disabledClassName = "bg-disabled text-disabledText";

	return (
		<button
			className={cn(
				"bg-redPrimary rounded-[5px] w-full text-sm font-semibold text-white",
				styles[size],
				disabled && disabledClassName,
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.oneOf(["large", "medium", "small"]),
};

export default Button;
