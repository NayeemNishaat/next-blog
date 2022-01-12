import PostGrid from "./PostsGrid";

function AllPosts(props) {
	return (
		<section className="w-[90%] max-w-5xl mx-auto my-8">
			<h1 className="text-xl md:text-3xl text-gray-800 text-center mb-4">
				All Posts
			</h1>
			<PostGrid posts={props.posts} />
		</section>
	);
}

export default AllPosts;
