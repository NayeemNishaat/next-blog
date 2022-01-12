import Image from "next/image";

function PostHeader(props) {
	const { title, image } = props;

	return (
		<header className="pb-4 border-b-8 border-purple-700 mx-0 my-4 md:my-8 flex flex-col-reverse md:flex-row md:items-end justify-between items-center gap-4">
			<h1 className="text-2xl m-0 text-center text-purple-500 md:text-3xl md:text-left">
				{title}
			</h1>
			<Image
				src={image}
				alt={title}
				width={200}
				height={150}
				objectFit="cover"
			/>
		</header>
	);
}

export default PostHeader;
