import { buildFeedbackPath, extractFeedback } from "./index";

function handler(req, res) {
	// if (req.method === "DELETE") {
	// 	// Point: Deleting Code
	// }

	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const feedbackData = extractFeedback(filePath);
	const selectedFeedback = feedbackData.find(
		(feedback) => feedback.id === feedbackId
	);

	res.status(200).json({ feedback: selectedFeedback });
}

export default handler;

// Remark: [...id] -> dynamic catch all segment api route is also supported for catching /api/id/value!
