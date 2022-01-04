import { buildFeedbackPath, extractFeedback } from "../api/feedback"; // Note: This imported codes will not be exposed in client side because these dependencies will be used inside getStaticProps!
import { useState } from "react";

function FeedbackPage(props) {
	const [feedbackData, setFeedbackData] = useState([]);

	function loadFeedbackHandler(id) {
		fetch(`/api/feedback/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setFeedbackData(data.feedback);
			});
	}

	return (
		<>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>
						{item.text}
						<button
							className="ring-2 outline-none"
							onClick={loadFeedbackHandler.bind(this, item.id)}
						>
							Show Details
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	// Important: When using own API in the same server don't send http request instead use nodejs code!
	const filePath = buildFeedbackPath();
	const data = extractFeedback(filePath);

	return {
		props: {
			feedbackItems: data
		}
	};
}

export default FeedbackPage;
