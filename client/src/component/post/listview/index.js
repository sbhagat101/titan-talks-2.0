import Header from './Header';
import Action from './Action';
import Caption from './Caption';

export default function PostListView(props) {
	return (
		<div>
			{props.data && props.data.map(post => (
				<div className="col-span-4 mb-8 border rounded border-gray-primary text-black">
					<Header user_id={post.user_id} username={`user_${post.user_id}`} />
					<img className="w-full" src={post.file_path ? `http://localhost:3001/${post.file_path}` : 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'} />
					<Action likes={post.likes} />
					<Caption text={post.content} create_time={post.create_time} user_id={post.user_id} username={`user_${post.user_id}`} />
				</div>
			))}
		</div>
	);
}