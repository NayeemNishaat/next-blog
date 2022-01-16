import Link from "next/link";
import Logo from "./Logo";

function MainNavigation() {
	return (
		<header className="w-full h-[15vh] bg-gray-900 flex justify-between items-center px-10">
			<Link href="/">
				{/* If no plain text is inserted between Link component then no anchor tag will be inserted. So, we need our own anchor tag! */}
				<a className="text-gray-100 hover:text-gray-200 transition text-xl md:text-2xl">
					<Logo />
				</a>
			</Link>
			<nav>
				<ul className="flex items-baseline m-0 p-0 md:gap-2">
					<li className="mx-4 text-gray-100 hover:text-gray-400 transition">
						<Link href="/posts">Posts</Link>
					</li>
					<li className="mx-4 text-gray-100 hover:text-gray-400 transition">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
