import Image from "next/image";
import BankDKILogo from "../../../assets/images/logo-bank-dki.png";
import CopyRightIcon from "../../../assets/images/copyright.png";
import PropTypes from "prop-types";
import { cn } from "@/services/cn";

const CopyRight = ({ className = "" }) => {
	return (
		<div
			className={cn(
				"flex flex-row justify-center items-center gap-1 mt-[20vh]",
				className
			)}
		>
			<Image
				width={14}
				height={14}
				src={CopyRightIcon.src}
				className="h-[14px] w-[14px]"
				alt="LRT Logo"
			/>
			<span className="text-xs">Powered by</span>
			<Image
				width={103}
				height={13}
				src={BankDKILogo.src}
				className="h-[13px] w-[103px]"
				alt="LRT Logo"
			/>
		</div>
	);
};

CopyRight.propTypes = {
	className: PropTypes.string,
};

export default CopyRight;
