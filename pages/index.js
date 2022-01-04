import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
	const [feedbackItems, setFeedbackItems] = useState([]);

	const emailInputRef = useRef();
	const feedbackInputRef = useRef();

	function submitFormHandler(e) {
		e.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredFeedback = feedbackInputRef.current.value;

		const reqBody = { email: enteredEmail, text: enteredFeedback };

		// Important: If we write "/" in the beginning then the domain is automatically appended to the path.
		fetch("/api/feedback", {
			method: "POST",
			body: JSON.stringify(reqBody),
			headers: { "Content-Type": "application/json" }
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	function loadFeedbackHandler() {
		fetch("/api/feedback")
			.then((res) => res.json())
			.then((data) => setFeedbackItems(data.feedback));
	}

	return (
		<>
			<Head>
				<title>Next API</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="mb-5">The Main Page</h1>
				<form onSubmit={submitFormHandler}>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							className="ring-1 outline-none ml-2"
							type="email"
							name="email"
							id="email"
							ref={emailInputRef}
						/>
					</div>
					<div>
						<label htmlFor="feedback">Feedback</label>
						<textarea
							className="ml-2 ring-1 mt-3 outline-none"
							name="feedback"
							rows="5"
							id="feedback"
							ref={feedbackInputRef}
						></textarea>
					</div>
					<button className="ring-1 mt-3">Send Feedback</button>
				</form>
				<hr />
				<button onClick={loadFeedbackHandler}>Load Feedback</button>

				<ul>
					{feedbackItems.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			</main>

			<footer></footer>
		</>
	);
}
