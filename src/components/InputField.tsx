type StateType = {
	[key: string]: any;
};
type Props = {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	name: string;
	errors?: StateType;
	label: string;
	required: boolean;
	styles?: any;
};
export default function InputField({
	handleChange,
	value,
	name,
	errors,
	label,
	required,
	styles,
}: Props) {
	return (
		<div style={{ ...styles }} className='relative z-0 w-full mb-10 group'>
			<input
				type={name}
				name={name}
				id={name}
				value={value && value}
				onChange={handleChange}
				className={`block py-3 px-2 w-full text-base text-grey_dark bg-transparent border-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer focus:placeholder:text-white placeholder:pl-2 rounded-md ${
					errors && errors[name]
						? 'border-red_light focus:border-red_light'
						: 'border-grey_light focus:border-green'
				}`}
				placeholder={label}
				required={required}
			/>
			<label
				htmlFor={name}
				className='peer-focus:font-medium absolute text-lg text-silver_dark duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'
			>
				{label}
			</label>
			{errors && errors[name] && (
				<p className='text-red_light text-xs italic absolute -bottom-5'>
					{errors[name]}
				</p>
			)}
		</div>
	);
}
