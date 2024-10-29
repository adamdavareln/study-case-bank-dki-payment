"use client";
import { useState } from "react";
import Header from "../../components/molecules/Header";
import OTPInput from "@/components/molecules/OTPInput";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function OTP() {
	const router = useRouter();
	const { phoneNumber } = useSelector((state) => state.user);
	const [otpCode, setOTPCode] = useState();

	const handleOTPCodeChange = (v) => {
		setOTPCode(v);
		if (v.length === 6) {
			router.push("/register");
		}
	};

	return (
		<>
			<Header title="Verifikasi Kode OTP" />
			<section className="px-3 pt-8 flex flex-col items-center">
				<div className="text-sm font-medium">
					<div className="text-grayText">
						Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini
						ya!
					</div>
					<span className="text-redPrimary">{phoneNumber}</span>
				</div>
				<OTPInput
					value={otpCode?.split("")}
					className="mt-8"
					onChangeValue={handleOTPCodeChange}
				/>
				<span className="text-sm font-semibold text-darkBlue mt-8">
					Tidak terima kode?
				</span>
				<span className="text-xs mt-3">Kirim kode kembali dalam 00:10</span>
			</section>
		</>
	);
}
