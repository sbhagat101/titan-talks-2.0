export default function Caption(props) {
	const timeElapsed = (Date.now() - new Date(props.create_time)) / 60000;
	let timeElapsedString = timeElapsed.toString();
	if (timeElapsed <= 1) {
		timeElapsedString = 'Just now';
	} else if (timeElapsed < 60) {
		timeElapsedString = `${Math.floor(timeElapsed)} minutes ago`;
	} else if (timeElapsed < 60 * 24) {
		const numOfHours = Math.floor(timeElapsed / 60);
		timeElapsedString = `${numOfHours} ${numOfHours == 1 ? "hour" : "hours"} ago`;
	} else {
		const numOfDays = Math.floor(timeElapsed/60/24);
		timeElapsedString = `${numOfDays} ${numOfDays === 1 ? "day" : "days"} ago`;
	}
	
	return (
		<div className="mx-4">
			<div>
				<span className="mr-1 font-bold text-black">user {props.user_id}</span>
				<span className="text-black">{props.text}</span>
			</div>
			<div className="text-gray-500 text-xs uppercase my-4">
				{timeElapsedString}
			</div>
		</div>
	);
}