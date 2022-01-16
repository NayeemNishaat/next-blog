import { useState, useEffect } from "react";
import Notification from "../ui/Notification";

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(contactDetails)
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(
			data.message || "Something went wrong!"
		);
	}
}

// Warning: Never use async function as a react functional component! React doesn't resolve promises implicitly!
function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] =
		useState("");
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (
			requestStatus === "success" ||
			requestStatus === "error"
		) {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(e) {
		e.preventDefault();

		// Warning: Include client side validation for better performance!

		setRequestStatus("pending");

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage
			});
			setRequestStatus("success");
			setEnteredEmail("");
			setEnteredName("");
			setEnteredMessage("");
		} catch (err) {
			setRequestError(err.message);
			setRequestStatus("error");
		}
	}

	let notification;
	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending Data",
			messsage: "Data is on it's way!"
		};
	}

	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Send Successful",
			messsage: "Successfully stored data!"
		};
	}

	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Failed",
			messsage: requestError
		};
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
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.messsage}
				/>
			)}
		</section>
	);
}

export default ContactForm;
