import { cn } from "@/services/cn";
import { useMemo } from "react";

const OTPInput = ({
	onChangeValue = () => {},
	className = "",
	inputClassName,
	id = "",
	value = Array(6).fill(""),
	length = 6,
}) => {
	const otp = useMemo(() => {
		return [
			value?.[0] || "",
			value?.[1] || "",
			value?.[2] || "",
			value?.[3] || "",
			value?.[4] || "",
			value?.[5] || "",
		];
	}, [value]);

	const handleChange = (v, index) => {
		if (/^[0-9]$/.test(v) || v === "") {
			const newOtp = [...otp];
			newOtp[index] = v;
			onChangeValue(newOtp.join("").toString());

			// Move to next input if v is entered
			if (v !== "" && index < length - 1) {
				document.getElementById(`otp-input-${id}-${index + 1}`).focus();
			}
			// Move to previous input if v is deleted
			else if (v === "" && index > 0) {
				document.getElementById(`otp-input-${id}-${index - 1}`).focus();
			}
		}
	};

	return (
		<div className={cn("flex w-[300px] justify-between", className)}>
			{otp.map((v, index) => (
				<input
					key={index}
					id={`otp-input-${id}-${index}`}
					type="text"
					maxLength="1"
					value={v}
					className={cn(
						"border-b-[3px] focus:outline-none border-inputBorder w-[24px] h-[58px] text-center text-2xl font-bold",
						inputClassName
					)}
					onChange={(e) => handleChange(e.target.value, index)}
				/>
			))}
		</div>
	);
};

export default OTPInput;
