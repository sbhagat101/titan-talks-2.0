import { Get } from 'react-axios'
import Header from '../component/post/Header';
import Action from '../component/post/Action';
import Caption from '../component/post/Caption';
import FriendSuggestion from '../component/suggestion/FriendSuggestion';

export default function Explore() {
	return (
		<div className="max-w-screen-lg center">
			<div className="md:container md:mx-auto my-5 grid grid-cols-1 md:grid-cols-3">
				<div className="col-span-2">
					<Get url="http://localhost:3001/posts">
						{(error, response, isLoading, makeRequest, axios) => (
							<div>
								{!isLoading && response && response.data.map(post => (
									<div className="col-span-4 mb-8 border rounded border-gray-primary text-black">
										<Header user_id={post.user_id} username={`user_${post.user_id}`} />
										<img className="w-full" src={post.file_path ? `http://localhost:3001/${post.file_path}` : 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'} />
										<Action likes={post.likes} />
										<Caption text={post.content} create_time={post.create_time} user_id={post.user_id} username={`user_${post.user_id}`} />
									</div>
								))}
							</div>
						)}
					</Get>
				</div>
				<FriendSuggestion />
			</div>
		</div>
	);
}