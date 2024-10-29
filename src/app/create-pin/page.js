"use client";
import LRTLogo from "../../assets/images/lrt-logo.png";

import Image from "next/image";
import Header from "../../components/molecules/Header";
import CopyRight from "../../components/molecules/CopyRight";
import CreatePINIllustration from "../../assets/images/create-pin-illustration.png";
import OTPInput from "@/components/molecules/OTPInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmPIN, setPIN } from "@/store/slices/user";
import ModalUnmatchConfirmPIN from "@/components/organisms/Modal/ModalUnmatchConfirmPIN";

const CreatePIN = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [unmatchModalVisible, setUnmatchModalVisible] = useState(false);
	const [isConfirmPin, setIsConfirmPin] = useState(false);
	const { PIN, confirmPIN } = useSelector((state) => state.user);

	const handleChangePIN = (v) => {
		dispatch(setPIN(v));
		if (v.length === 6) {
			setIsConfirmPin(true);
		}
	};

	const handleChangeConfirmPIN = (v) => {
		dispatch(setConfirmPIN(v));
		if (v.length === 6) {
			if (PIN === v) {
				router.replace("/topup-methods");
			} else {
				setUnmatchModalVisible(true);
			}
		} else {
		}
	};

	const handleCloseUnmatchConfirmPINModal = () => {
		setUnmatchModalVisible(false);
	};

	return (
		<>
			<Header
				onBack={() => {
					if (isConfirmPin) {
						setIsConfirmPin(false);
					} else {
						router.back();
					}
				}}
				title="LRT X JakOne Pay"
			/>
			<section className="px-[25px] flex flex-col items-center">
				<div className="flex items-center justify-center mt-[11px]">
					<Image width={185} height={46} src={LRTLogo.src} alt="LRT Logo" />
				</div>
				{!isConfirmPin ? (
					<>
						<div className="text-base text-center mt-8">Buat PIN kamu!</div>
						<OTPInput
							className="mt-6"
							id="pin"
							inputClassName="w-[45px] h-[50px] border border-redPrimary border-b-[4px]"
							onChangeValue={handleChangePIN}
							value={PIN?.split("")}
						/>
						<div className="flex justify-center flex-col items-center mt-[42px]">
							<Image
								src={CreatePINIllustration.src}
								width={238}
								height={219}
								alt="Create PIN Secure illustration"
							/>
							<div className="text-base w-[181px] text-center mt-3">
								Seluruh informasi kamu terlindungi
							</div>
						</div>
					</>
				) : (
					<>
						<div className="text-base text-center mt-8">
							Konfirmasi PIN kamu!
						</div>
						<OTPInput
							className="mt-6"
							id="confirm-pin"
							inputClassName="w-[45px] h-[50px] border border-redPrimary border-b-[4px]"
							onChangeValue={handleChangeConfirmPIN}
							value={confirmPIN?.split("")}
						/>
					</>
				)}

				<CopyRight className="mt-[42px]" />
			</section>
			<ModalUnmatchConfirmPIN
				visible={unmatchModalVisible}
				onClose={handleCloseUnmatchConfirmPINModal}
			/>
		</>
	);
};

export default CreatePIN;
