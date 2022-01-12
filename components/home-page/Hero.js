import Image from "next/image";

function Hero() {
	return (
		<section className="text-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
			<div
				className="max-w-[18rem]
			 shadow-lg rounded-full overflow-hidden bg-gray-700 m-auto"
			>
				<Image
					src="/images/site/nayeem.jpg"
					alt="An image showing Nayeem"
					objectFit="cover"
					width={300}
					height={300}
				/>
			</div>
			<h1 className="mt-4 text-gray-300 text-xl">Hi! I'm Nayeem!</h1>
			<p className="text-gray-200 mx-auto w-4/5">
				Welcome to my blog! I'm a js/nodeJs developer.
			</p>
		</section>
	);
}

export default Hero;
