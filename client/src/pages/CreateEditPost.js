import React, { useState } from 'react';
import Nav2  from '../component/Nav2';

export default function CreateEditPost() {
	const [caption, setCaption] = useState('');
	const [selectedFile, setSelectedFile] = useState();
	const [previewImage, setPreviewImage] = useState('https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg');
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		if (event.target.files.length > 0) {
			setSelectedFile(event.target.files[0]);
			setIsFilePicked(true);
			setPreviewImage(URL.createObjectURL(event.target.files[0]));
		}
	};

	const handleSubmission = () => {
		const postdata = {
			user_id: 1,
			content: caption,
			likes: 99,
			views: 999,
			shares: 9999,
		}
		const axios = require('axios');
		const formData = new FormData();
		formData.append('uri', selectedFile);
		formData.append('postdata', JSON.stringify(postdata));
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		axios.post('http://localhost:3001/posts', formData, config)
			.then((response) => {
				//console.log(response);
				alert('Success\n' + JSON.stringify(response.data, null, 2));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
		<Nav2 />
		<div class="relative min-h-screen flex items-center justify-center">
			<div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
				<div class="text-center">
					<h2 class="mt-5 text-3xl font-bold text-gray-900">
						Create new Post
					</h2>
					<p class="mt-2 text-sm text-gray-400">What's on your mind?</p>
				</div>
				<br />
				<div class="grid grid-cols-1 space-y-2">
					<div class="flex items-center justify-center w-full">
						<label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
							<div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
								<div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
									<img class="has-mask h-36 object-center" src={previewImage} />
								</div>
								<p class="pointer-none text-gray-500 ">Drag photos and videos here<br /> or 
									<a class="text-blue-600 hover:underline"> select from computer</a></p>
							</div>
							<input type="file"  class="hidden" onChange={changeHandler} accept=".jpg, .jpeg, .png, .gif" />

						</label>
					</div>

					<div class="grid grid-cols-1 space-y-2">
						<label class="text-sm font-bold text-gray-500 tracking-wide">Caption</label>
						<textarea onChange={e => setCaption(e.target.value)} rows="3" placeholder="Write a caption..." class="text-gray-500 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
							{caption}
						</textarea>
					</div>

					<button type="submit" onClick={handleSubmission} class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
						Share
					</button>
				</div>
			</div>
			</div>
		</div>
	);
}