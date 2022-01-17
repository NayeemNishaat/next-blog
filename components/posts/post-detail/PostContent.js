import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84"; // Important: From next "build" we found [slug].js is very heavy. So by digging it (ignore server side code, it only shows the result for client side) we found react-syntax-highlighter is a very heavy package. So, we will use the light version of this. Remark: cjs (CommonJs) for server side not esm(ECMA Script Module)!

PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("css", css);

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
		},
		code: (props) => {
			return (
				<PrismLight
					style={dracula}
					language={props.className.replace(
						"language-",
						""
					)}
					children={props.children}
				/>
			);
		}
	};

	return (
		<article className="w-[95%] max-w-5xl my-2 mx-auto text-2xl bg-gray-100 rounded-md p-4 md:p-8">
			<PostHeader
				title={post.title}
				image={imagePath}
			/>
			<ReactMarkdown components={customComponent}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
}

export default PostContent;
