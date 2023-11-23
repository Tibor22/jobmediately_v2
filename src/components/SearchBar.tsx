export default function SearchBar() {
	return (
		<div>
			<form className='bg-primary_dark w-fit p-4 rounded-lg mt-8 shadow-md'>
				{/* Location Field */}
				<div className='flex gap-8 mb-4 text-white'>
					<div className='flex flex-col'>
						<label htmlFor='location'>Location:</label>
						<input
							className='py-2 px-3 rounded-sm outline-none mt-1'
							type='text'
							id='location'
							name='location'
							placeholder='Enter location'
						/>
					</div>
					{/* Job Type Field */}
					<div className='flex flex-col'>
						<label htmlFor='jobType'>Job Type:</label>
						<input
							className='py-2 px-3 rounded-sm outline-none mt-1'
							type='text'
							id='jobType'
							name='jobType'
							placeholder='Enter job type'
						/>
					</div>
				</div>
				{/* Submit Button */}
				<button
					className='px-4 py-2 w-full bg-orange rounded-lg text-white uppercase tracking-widest text-bold'
					type='submit'
				>
					Search
				</button>
			</form>
		</div>
	);
}
