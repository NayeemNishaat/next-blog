import PostItem from "./PostItem";

function PostsGrid(props) {
	const { posts } = props;

	return (
		<ul className="m-0 p-0 grid gap-6 text-center grid-cols-4">
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
}

export default PostsGrid;
