import { Link } from "react-router-dom";

export default function Header(props) {
	return (
		<div className="flex h-4 p-4 py-8 border-b border-gray-primary">
			<Link to={`/users/${props.user_id}`} className="flex items-center">
				<img
					className="flex w-8 h-8 mr-3 rounded-full"
					src={`https://avatars.githubusercontent.com/oa/1766712?s=140&u=56ddc9f8e6fe7004d462cdf5f6bc293ba3111897&v=4`}
				/>
				<p className="font-bold text-black">{props.username}</p>
				<p className="font-bold text-black flex items-right">...</p>
			</Link>
		</div>
	);
}