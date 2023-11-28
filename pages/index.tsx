export default function Index({ mainContentHeight }) {
	return (
		<>
			<div
				style={{ height: mainContentHeight }}
				className='w-full flex flex-col items-center justify-center text-white'>
				<h1>This is the home page!</h1>
				<p>Nothing much to see here... yet.</p>
			</div>
		</>
	);
}
