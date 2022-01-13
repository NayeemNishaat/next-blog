import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/PostUtil";

function HomePage(props) {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	// Important: getServerSideProps will always revalidate on request!
	// Note: In development getStaticProps runs on every request but only once during production.
	const FeaturedPosts = getFeaturedPosts();

	return {
		props: {
			posts: FeaturedPosts
		}
	};
}

export default HomePage;
