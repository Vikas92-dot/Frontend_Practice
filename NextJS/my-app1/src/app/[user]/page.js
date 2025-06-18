export default async function UserPage({ params }) {
	const { user } = params;
	const response = await fetch(`https://api.github.com/users/${user}`);
	const responseBody = await response.json();
    
    
	return (
		<div className="p-5">
			<h1 className="text-green-500 text-3xl font-bold">GeeksforGeeks</h1>
			<h4 className="font-bold">loading.js Next.js</h4>
			<div className="mt-4">
				<p> 
					Github user: <span className="font-bold">{user}</span>
				</p>
                <p>
					Github bio: <span className="font-bold">{responseBody.bio}</span>
				</p>
				<p>
					No. of public repos: <span className="font-bold">{responseBody.public_repos}
					</span>
				</p>
				<p>
					Followers: <span className="font-bold">{responseBody.followers}</span>
				</p>
				<p>
					Following: <span className="font-bold">{responseBody.following}</span>
				</p>
				<img src={responseBody.avatar_url} alt="User image" />
			</div>
		</div>
	);
}