"use client";

import LongTailArrow from "@/components/atoms/Icons/LongTailArrow";
import Arrow from "../../atoms/Icons/Arrow";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const icon = {
	normal: <Arrow />,
	"long-tailed": <LongTailArrow />,
};

const Header = ({
	title = "LRT  X JakOne Pay",
	iconType = "long-tailed",
	onBack,
}) => {
	const router = useRouter();
	const handleBack = () => {
		onBack ? onBack() : router.back();
	};
	return (
		<nav className="sticky top-0 bg-white">
			<div className="h-[68px] flex items-center pt-6 px-5 pb-5 gap-3">
				<button onClick={handleBack} className="">
					{icon[iconType]}
				</button>
				<span className="text-lg font-semibold">{title}</span>
			</div>
		</nav>
	);
};

Header.propTypes = {
	iconType: PropTypes.oneOf(["normal", "long-tailed"]),
};

export default Header;
