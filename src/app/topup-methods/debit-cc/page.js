"use client";
import Info from "@/components/atoms/Icons/Info";
import Button from "@/components/molecules/Button";
import Header from "@/components/molecules/Header";
import PaymentMethodHeader from "@/components/molecules/PaymentMethodHeader";
import TopupAmounts from "@/components/organisms/TopupAmounts";
import removeNonNumeric from "@/helpers/utils/removeNonNumeric";
import { setFinalAmount, setSelectedAmount } from "@/store/slices/topup";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const DebitCC = () => {
	const minimalTransfer = 20000;
	const dispatch = useDispatch();
	const { selectedAmount, finalAmount } = useSelector((state) => state.topup);
	const handleSelectedAmountChange = (amount) => {
		dispatch(setFinalAmount(amount));
		dispatch(setSelectedAmount(amount));
	};

	const handleOnChangeAmount = (e) => {
		dispatch(setFinalAmount(e.target.value));
	};

	const buttonDisabled = useMemo(() => {
		if (
			finalAmount &&
			parseInt(removeNonNumeric(finalAmount)) >= minimalTransfer
		) {
			return false;
		}
		return true;
	}, [finalAmount]);

	return (
		<>
			<Header iconType="normal" title="Top Up LRTPay" />
			<section className="">
				<PaymentMethodHeader
					title="Via Debit/Credit Card"
					showTopUpInformation={true}
				/>
				<TopupAmounts
					onChangeValue={handleSelectedAmountChange}
					selectedAmount={selectedAmount}
					amounts={[50000, 100000, 150000, 200000, 250000, 300000]}
				/>
				<div className="p-4">
					<div className="text-sm font-bold mb-1">Enter Another Amount</div>
					<div className="text-2xl flex flex-row gap-1 font-bold mb-3">
						<span className="">Rp</span>
						<input
							value={finalAmount}
							placeholder="0"
							onChange={handleOnChangeAmount}
							className="bg-none focus:outline-none"
						/>
					</div>
					<div className="flex flex-row items-center gap-1">
						<Info />
						<span className="text-xs text-grayText2">
							Minimum top up amount Rp 20.000
						</span>
					</div>
				</div>
				<div className=" bg-white p-4 shadow-sm fixed w-full bottom-0">
					<Button disabled={buttonDisabled}>Next</Button>
				</div>
			</section>
		</>
	);
};

export default DebitCC;
