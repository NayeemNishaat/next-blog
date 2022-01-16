import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/PostUtil";
import Head from "next/head";

function AllPostsPage(props) {
	return (
		<>
			<Head>
				<title>All Nayeem's Posts</title>
				<meta
					name="description"
					content="A list of all relevant posts."
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts
		}
	};
}

export default AllPostsPage;
