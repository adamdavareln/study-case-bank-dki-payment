"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/otp");
	}, []);
	return <></>;
};

export default Home;
