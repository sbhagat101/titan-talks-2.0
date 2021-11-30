import { Link } from 'react-router-dom';

export default function FriendSuggestion(props) {
	return (
		<div className="mx-4">
			<div className="font-bold text-gray-700">
				Suggestions For You
			</div>

			<div className="grid grid-cols-2">
				<div>
					<Link to="#" className="flex items-center">
						<img
							className="flex w-8 h-8 mr-3 rounded-full"
							src="https://cdn.discordapp.com/attachments/908224700491108422/914821524186337280/75328498_1674845792651317_2836767341423886336_n.jpeg"
						/>
						<p className="font-bold text-black">natgeotravel</p>
					</Link>
				</div>
				<div className="text-blue-500"><Link to="#">Follow</Link></div>
			</div>

			<div className="grid grid-cols-2 my-3">
				<div>
					<Link to="#" className="flex items-center">
						<img
							className="flex w-8 h-8 mr-3 rounded-full"
							src="https://cdn.discordapp.com/attachments/908224700491108422/914823246023643176/images.png"
						/>
						<p className="font-bold text-black">Jeep Life</p>
					</Link>
				</div>
				<div className="text-blue-500"><Link to="#">Follow</Link></div>
			</div>

			<div className="grid grid-cols-2 my-3">
				<div>
					<Link to="#" className="flex items-center">
						<img
							className="flex w-8 h-8 mr-3 rounded-full"
							src="https://cdn.discordapp.com/attachments/908224700491108422/914824644979200080/rowdy-gorilla-mascot-5867ld.png"
						/>
						<p className="font-bold text-black">GorillaGaming</p>
					</Link>
				</div>
				<div className="text-blue-500"><Link to="#">Follow</Link></div>
			</div>
		</div>
	);
}