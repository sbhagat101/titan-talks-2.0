import { Get } from 'react-axios'
import PostListView from '../component/post/listview';
import FriendSuggestion from '../component/suggestion/FriendSuggestion';

export default function Explore() {
	return (
		<div className="max-w-screen-lg center">
			<div className="md:container md:mx-auto my-5 grid grid-cols-1 md:grid-cols-3">
				<div className="col-span-2">
					<Get url="http://localhost:3001/posts">
						{(error, response, isLoading, makeRequest, axios) => {
							if(error) {
								return (<div>Error: {error.message}</div>)
							} else if(isLoading) {
								return (<div>Loading...</div>);
							} else if (response) {
								return (<PostListView data={response.data} />);
							} else {
								return (<div>Something weird</div>);
							}
						}}
					</Get>
				</div>
				<FriendSuggestion />
			</div>
		</div>
	);
}