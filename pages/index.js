import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/PostUtil";
import Head from "next/head";

function HomePage(props) {
	return (
		<>
			<Head>
				<title>Nayeem's Blog</title>
				<meta
					name="description"
					content="I post about programming, specifically web development! I work with nodeJs, NextJs, MongoDB etc."
				/>
			</Head>
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
