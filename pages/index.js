import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

const DUMMY_POSTS = [
	{
		slug: "getting-started",
		title: "Getting Started",
		image: "getting-started.png",
		excerpt: "NextJs is an awesome fullstack framework.",
		date: "2022-02-10"
	},
	{
		slug: "getting-started2",
		title: "Getting Started",
		image: "getting-started.png",
		excerpt: "NextJs is an awesome fullstack framework.",
		date: "2022-02-10"
	},
	{
		slug: "getting-started3",
		title: "Getting Started",
		image: "getting-started.png",
		excerpt: "NextJs is an awesome fullstack framework.",
		date: "2022-02-10"
	},
	{
		slug: "getting-started4",
		title: "Getting Started",
		image: "getting-started.png",
		excerpt: "NextJs is an awesome fullstack framework.",
		date: "2022-02-10"
	}
];

function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
}

export default HomePage;
