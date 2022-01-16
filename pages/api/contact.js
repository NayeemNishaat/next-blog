function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		// Part: Validating Data
		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({
				message: "Invalid Input"
			});
			return;
		}

		// Part: Storing Data into DB
		const newMessage = {
			email,
			name,
			message
		};
		console.log(newMessage);

		res.status(201).json({
			message: "Successfully stored data!",
			data: newMessage
		});
	} else {
		res.status(405).json({
			message: "Request mthod is invalid!"
		});

		return;
	}
}

export default handler;
