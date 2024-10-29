"use client";
import Header from "../../components/molecules/Header";
import JakONEMobile from "@/components/atoms/Icons/JakONEMobile";
import PaymentMethodMenu from "@/components/organisms/PaymentMethodMenu";
import ATMBankDKI from "@/components/atoms/Icons/ATMBankDKI";
import OtherBank from "@/components/atoms/Icons/OtherBank";
import DebitCard from "@/components/atoms/Icons/DebitCard";
import PaymentMethodHeader from "@/components/molecules/PaymentMethodHeader";
import { useRouter } from "next/navigation";

const TopupMethods = () => {
	const router = useRouter();
	return (
		<>
			<Header iconType="normal" title="Top Up LRTJPay" />
			<section className="">
				<PaymentMethodHeader title="Top Up Methods" />
				<div className="px-2">
					<PaymentMethodMenu
						className="py-6 px-4"
						menus={[
							{
								icon: <JakONEMobile />,
								label: "JakOne Mobile",
								description:
									"No administration fees via the JakOne Mobile Mobile App",
							},
							{
								icon: <ATMBankDKI />,
								label: "ATM Bank DKI",
								description: "Top up Martipay from  nearest Bank DKI ATM",
							},
							{
								icon: <OtherBank />,
								label: "Other Bank",
								description:
									"Transfer anytime from your favourite Indonesia bank",
							},
							{
								icon: <DebitCard />,
								onClick: () => router.push("/topup-methods/debit-cc"),
								label: "Debit Card",
								description: "Top up online using your debit card ",
							},
						]}
					/>
				</div>
			</section>
		</>
	);
};

export default TopupMethods;
