"use client";

import Image from "next/image";
import { LRTLogo } from "@/assets/images";
import CopyRight from "@/components/molecules/CopyRight";
import Header from "@/components/molecules/Header";
import InputText from "@/components/molecules/InputText";
import Button from "@/components/molecules/Button";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterData } from "@/store/slices/user";
import { useRouter } from "next/navigation";

const Register = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const {
		register: { name, phoneNumber, email, birthPlace, birthDate },
	} = useSelector((state) => state.user);
	const handleChangeData = (e, field) => {
		dispatch(setRegisterData({ field, value: e.target.value }));
	};

	const handleRegister = () => {
		router.push("/create-pin");
	};
	return (
		<>
			<Header />
			<section className="">
				<div className="gap-[26px] flex flex-col py-[25px] px-[12px]">
					<div className="flex items-center justify-center ">
						<Image width={185} height={46} src={LRTLogo.src} alt="LTR Logo" />
					</div>
					<InputText
						value={phoneNumber}
						onChange={(e) => handleChangeData(e, "phoneNumber")}
						placeholder={"Nomor telepon/handphone"}
					/>
					<InputText
						value={name}
						onChange={(e) => handleChangeData(e, "name")}
						placeholder={"Nama"}
					/>
					<InputText
						value={birthDate}
						onChange={(e) => handleChangeData(e, "birthDate")}
						placeholder={"Tanggal Lahir"}
					/>
					<InputText
						value={birthPlace}
						onChange={(e) => handleChangeData(e, "birthPlace")}
						placeholder={"Tempat Lahir"}
					/>
					<InputText
						value={email}
						onChange={(e) => handleChangeData(e, "email")}
						placeholder={"Email"}
					/>
				</div>
				<div className="py-5 px-3 border-t border-t-">
					<Button onClick={handleRegister}>Daftar</Button>
				</div>
				<CopyRight className="mt-1" />
			</section>
		</>
	);
};

export default Register;
