const InputText = ({ value = "", onChange, className, ...props }) => {
	return (
		<input
			className="bg-lightGray py-3 px-[14px] w-full text-sm font-medium rounded-md placeholder:text-placeholder focus:outline-none"
			onChange={onChange}
			value={value}
			{...props}
		/>
	);
};

export default InputText;
