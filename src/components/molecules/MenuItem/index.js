import React from "react";
import Divider from "@/components/atoms/Divider";
import Arrow from "@/components/atoms/Icons/Arrow";

const MenuItem = ({ label, description, icon, onClick }) => {
	return (
		<div className="flex flex-col" onClick={onClick}>
			<div className="flex flex-row items-center gap-[18px]">
				{icon && React.cloneElement(icon, { className: "flex flex-shrink-0" })}
				<div className="flex flex-col flex-1">
					<span className="font-semibold text-xs">{label}</span>
					<span className="text-xs leading-[15px]">{description}</span>
				</div>
				<div className="flex flex-shrink-0">
					<Arrow size={24} direction="right" />
				</div>
			</div>
			<Divider />
		</div>
	);
};

export default MenuItem;
