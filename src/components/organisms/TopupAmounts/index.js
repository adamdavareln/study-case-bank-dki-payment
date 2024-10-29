import TopupAmountItem from "@/components/molecules/TopupAmountItem";

const TopupAmounts = ({ amounts = [], selectedAmount, onChangeValue }) => {
	return (
		<div className="p-4 gap-4 border-y-[0.5px] border-y-border3	 grid grid-cols-2">
			{amounts.map((amount, index) => {
				return (
					<TopupAmountItem
						onClick={() => onChangeValue(amount)}
						key={`topup-amount-item-${index}`}
						selected={amount === selectedAmount}
						amount={amount}
					/>
				);
			})}
		</div>
	);
};

export default TopupAmounts;
