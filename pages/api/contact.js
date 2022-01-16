import { MongoClient } from "mongodb";

async function handler(req, res) {
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

		let client;
		try {
			client = await MongoClient.connect(
				"mongodb+srv://Nayeem:VAfiGViTHlBWDCPg@laby.il75o.mongodb.net/blog?retryWrites=true&w=majority"
			);
		} catch (err) {
			client.close();
			res.status(500).json({
				message: "Could not connect to database!"
			});
			return;
		}

		const db = client.db("blog"); // Point: If no db name specified it will use the connected db!

		try {
			const result = await db
				.collection("messages")
				.insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (err) {
			client.close();
			res.status(500).json({
				message: "Storing data failed!"
			});
			return;
		}

		res.status(201).json({
			message: "Successfully stored data!",
			data: newMessage
		});
		client.close();
	} else {
		res.status(405).json({
			message: "Request mthod is invalid!"
		});
		return;
	}
}

export default handler;
