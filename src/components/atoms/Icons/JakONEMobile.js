const JakONEMobile = ({ size = 55, ...props }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 55 55"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect width="55" height="55" fill="white" />
		<circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_linear_1_3498)" />
		<path
			d="M31.5714 16H22.4286C20.5314 16 19 17.4618 19 19.2727V36.7273C19 38.5382 20.5314 40 22.4286 40H31.5714C33.4686 40 35 38.5382 35 36.7273V19.2727C35 17.4618 33.4686 16 31.5714 16ZM32.7143 33.5455C32.7143 34.0977 32.2666 34.5455 31.7143 34.5455H22.2857C21.7334 34.5455 21.2857 34.0977 21.2857 33.5455V20.2727C21.2857 19.7204 21.7334 19.2727 22.2857 19.2727H31.7143C32.2666 19.2727 32.7143 19.7204 32.7143 20.2727V33.5455ZM29.2857 37.2727C29.2857 37.574 29.0415 37.8182 28.7403 37.8182H25.2597C24.9585 37.8182 24.7143 37.574 24.7143 37.2727C24.7143 36.9715 24.9585 36.7273 25.2597 36.7273H28.7403C29.0415 36.7273 29.2857 36.9715 29.2857 37.2727Z"
			fill="white"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1_3498"
				x1="55"
				y1="28"
				x2="-1.19722e-07"
				y2="28"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#C0A720" />
				<stop offset="1" stop-color="#E21A1A" />
			</linearGradient>
		</defs>
	</svg>
);
export default JakONEMobile;
