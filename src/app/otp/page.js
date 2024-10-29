"use client";

import LRTLogo from "../../assets/images/lrt-logo.png";

import Image from "next/image";
import Header from "../../components/molecules/Header";
import CopyRight from "../../components/molecules/CopyRight";
import Button from "@/components/molecules/Button";
import regex from "@/helpers/utils/regex";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber, setRegisterData } from "@/store/slices/user";

const OTP = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { phoneNumber } = useSelector((state) => state.user);
	const handlePhoneNumberChange = (e) => {
		const value = e.target.value;
		if (!value || regex.numberOnlyMax15Digit.test(value)) {
			dispatch(setPhoneNumber(value));
		}
	};

	const handleSendOTP = (e) => {
		e.preventDefault();
		dispatch(setRegisterData({ field: "phoneNumber", value: phoneNumber }));
		logger.info(`OTP Sent to ${phoneNumber}`);
		router.push(`/otp-verification`);
	};

	const isButtonDisabled = useMemo(() => {
		if (phoneNumber.length > 0) return false;
		return true;
	}, [phoneNumber]);

	return (
		<>
			<Header title="LRT X JakOne Pay" />
			<section className="px-[25px]">
				<div className="flex items-center justify-center mt-[11px]">
					<Image width={185} height={46} src={LRTLogo.src} alt="LRT Logo" />
				</div>
				<div className="text-lg bg-red text-center my-[25px]">
					Selamat Datang
				</div>
				<span className="text-xs mb-[10px]">
					Ekspresikan perjalananmu menggunakan LRT Pay
				</span>

				<div>
					<label className="text-xs font-bold mb-1">Nomor Telepon</label>
					<form
						className="border-redPrimary border h-[62px] flex flex-row gap-4 items-center px-4"
						onSubmit={handleSendOTP}
					>
						<input
							className="flex flex-1  h-full text-sm focus:outline-none text-redPrimary font-medium"
							type="phone"
							value={phoneNumber || ""}
							onChange={handlePhoneNumberChange}
							placeholder="Masukkan Nomor Telepon"
						/>
						<Button
							disabled={isButtonDisabled}
							onClick={handleSendOTP}
							size="small"
							className={"w-[74px]"}
						>
							Kirim OTP
						</Button>
					</form>
				</div>
				<div className="text-sm text-base py-3 mt-4 font-medium">
					Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{" "}
					<span className="text-redPrimary font-semibold ">
						syarat & ketentuan
					</span>{" "}
					yang berlaku
				</div>
				<CopyRight />
			</section>
		</>
	);
};

export default OTP;
