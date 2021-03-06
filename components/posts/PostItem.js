import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
	const { title, image, excerpt, date, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className="shadow-lg bg-gray-800 text-center">
			<Link href={linkPath}>
				<a className="text-gray-100">
					<div className="w-full max-h-[20rem] overflow-hidden">
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							objectFit="cover"
							layout="responsive"
						/>
					</div>
					<div className="p-4">
						<h3 className="my-2 mx-0 text-xl">{title}</h3>
						<time className="italic text-gray-300">
							{formattedDate}
						</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}

export default PostItem;
