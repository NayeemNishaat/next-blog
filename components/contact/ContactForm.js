import { useState } from "react";

function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] =
		useState("");

	function sendMessageHandler(e) {
		e.preventDefault();

		// Warning: Include client side validation for better performance!

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage
			})
		});
	}

	return (
		<section className="bg-gray-900 h-[85vh]">
			<div className="mx-auto rounded-md bg-gray-100 w-[90%] max-w-3xl p-4 shadow-2xl text-2xl">
				<h1 className="text-4xl text-left my-4 md:my-8 md:text-5xl md:text-center">
					How Can I Help You?
				</h1>
				<form onSubmit={sendMessageHandler}>
					<div className="flex gap-4 flex-col">
						<div className="flex gap-4">
							<div className="min-w-[10rem] flex-1 ">
								<label
									className="block font-sans font-bold mt-2 mb-1"
									htmlFor="email"
								>
									Your Email
								</label>
								<input
									className="text-inherit p-1 rounded w-full border bg-gray-50 resize-none"
									type="email"
									id="email"
									required
									placeholder="Email"
									value={enteredEmail}
									onChange={(e) =>
										setEnteredEmail(
											e.target.value
										)
									}
								/>
							</div>
							<div className=" min-w-[10rem] flex-1">
								<label
									className="block font-sans font-bold mt-2 mb-1"
									htmlFor="name"
								>
									Your Name
								</label>
								<input
									className="text-inherit p-1 rounded w-full border bg-gray-50 resize-none"
									type="text"
									id="name"
									required
									placeholder="Name"
									value={enteredName}
									onChange={(e) =>
										setEnteredName(
											e.target.value
										)
									}
								/>
							</div>
						</div>
						<div className="flex-1">
							<label
								className="block font-sans font-bold mt-2 mb-1"
								htmlFor="message"
							>
								Your Message
							</label>
							<textarea
								className="text-inherit p-1 rounded w-full border bg-gray-50 resize-none"
								id="message"
								rows="5"
								placeholder="Enter Your Message Here!"
								required
								value={enteredMessage}
								onChange={(e) =>
									setEnteredMessage(
										e.target.value
									)
								}
							></textarea>
						</div>
					</div>
					<div className="mt-4 text-right">
						<button className="hover:bg-gray-500 text-inherit cursor-pointer bg-gray-700 border py-2 px-4 rounded text-gray-50 shadow-lg">
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
