import '../style/Profile.css';

export default function Profile() {
	return (
		<div className="max-w-screen-lg center">

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<div className="md:container md:mx-auto my-5 grid grid-cols-1 md:grid-cols-5">
				<div>
					<img src="images/titans3.png" class="rounded-circle profile-image" />
				</div>
				<div className="col-span-4 mx-5">
					<h1 className="text-4xl font-medium">Name</h1>
					<p className="text-xl font-extralight">Username @ csu.fullerton.edu</p>
					<div class="container-gap-5">
						<a><span class="badge">Skill 1</span></a>
						<a><span class="badge">Skill 2</span></a>
						<a><span class="badge">Skill 3</span></a>
						<a><span class="badge">Skill 4</span></a>
						<a><span class="badge">Skill 5</span></a>
					</div>

					<ul class="social-icons container-gap-5">
						<li class="linkedin">
							<a href="https://www.linkedin.com/in/"><i class="fa fa-fw fa-linkedin"></i></a>
						</li>
						<li class="github">
							<a href="https://github.com/"><i class="fa fa-fw fa-github"></i></a>
						</li>
						<li class="medium">
							<a href="https://medium.com/_"><i class="fa fa-fw fa-medium"></i></a>
						</li>
						<li class="mail">
							<a href="mailto:name@email.com"><i class="fa fa-fw fa-envelope"></i></a>
						</li>
					</ul>
				</div>
			</div>


			<div className="md:container md:mx-auto my-5">
				<div>
					<hr class="divider" />
					<h5>Personal Statement</h5>
					<p className="my-3">
						A few lines about who you are, what you are studying and your interests in the technology industry.
					</p>
					<hr class="divider" />
					<h5>Education</h5>
					<p className="my-3">
						California State University, Fullerton  Computer Science  Start Date- End Date

					</p>
					<hr class="divider" />
					<h5>Work Experience</h5>
					<p className="my-3">Company · Role · Start Date - End Date</p>
					<p class="description-text">
						A few lines about what you did during that job, what you learned and achieved.
					</p>
					<hr class="divider" />
					<h5>Personal Projects</h5>
					<strong><p>Project 1</p></strong>
					<p className="my-3">
						Include a description about your project, mentioning any specific technologies that you used.
					</p>
					<a href="https://github.com/" className="button-link" role="button" aria-pressed="true">View Source Code</a>
				</div>
			</div>
		</div>
	);
}