import Announcement from "@/components/atoms/Icons/Announcement";
import TopupMethod from "@/components/atoms/Icons/TopupMethod";

const PaymentMethodHeader = ({
	title = "Top Up Methods",
	showTopUpInformation = false,
}) => {
	return (
		<div className="p-4 flex flex-col gap-4">
			<div className="flex flex-row items-center gap-3">
				<TopupMethod />
				<span className="text-lg font-bold">{title}</span>
			</div>
			{showTopUpInformation && (
				<div className="bg-lightGray2 p-3  rounded-[10px]">
					<div className="flex flex-row gap-2 items-center">
						<Announcement />
						<span className="text-redPrimary font-bold text-xs">
							Top Up Information
						</span>
					</div>
					<div className="text-xs pl-[22px]">
						You can save up to Rp 2.000.000 with maximum transactions of Rp
						20.000.000 per month
					</div>
				</div>
			)}
		</div>
	);
};

export default PaymentMethodHeader;
