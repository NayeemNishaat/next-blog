import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customComponent = {
		p: ({ children, node }) => {
			const imageEl = node.children[0];

			if (imageEl.tagName === "img") {
				return (
					<div className="mx-auto my-4 w-full max-w-xl">
						<Image
							{...props}
							src={`/images/posts/${post.slug}/${imageEl.properties.src}`}
							alt={imageEl.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{children}</p>;
		}
	};

	return (
		<article className="w-[95%] max-w-5xl my-2 mx-auto text-2xl bg-gray-100 rounded-md p-4 md:p-8">
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customComponent}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
}

export default PostContent;
