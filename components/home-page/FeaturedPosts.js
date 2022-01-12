import PostsGrid from "../posts/PostsGrid";

function FeaturedPosts(props) {
	return (
		<section className="w-[90%] max-w-[80rem] mx-auto my-8">
			<h2 className="text-center text-gray-800 text-2xl md:text-4xl mb-4">
				Featured Posts
			</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
