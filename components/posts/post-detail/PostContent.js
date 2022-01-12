import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
	slug: "getting-started",
	title: "Getting Started",
	image: "getting-started.png",
	date: "2022-02-10",
	content: "# This is a first post"
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

	return (
		<article className="w-[95%] max-w-5xl my-2 mx-auto text-2xl bg-gray-100 rounded-md p-4 md:p-8">
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
