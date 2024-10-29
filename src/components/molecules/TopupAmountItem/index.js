import TopupMethodSmall from "@/components/atoms/Icons/TopupMethodSmall";
import convertMoney from "@/helpers/utils/convertMoney";
import { cn } from "@/services/cn";

const TopupAmountItem = ({ amount, selected = true, ...props }) => {
	return (
		<div
			className={cn(
				"flex flex-row gap-3 items-center rounded-lg p-2 border border-border3 ",
				selected && "border-redPrimary"
			)}
			{...props}
		>
			<TopupMethodSmall />
			<span className="text-sm font-semibold">{convertMoney(amount)}</span>
		</div>
	);
};

export default TopupAmountItem;
