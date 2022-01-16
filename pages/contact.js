import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta
					name="description"
					content="Something in your mind that you want to share with me? Just text me!"
				/>
			</Head>
			<ContactForm />
		</>
	);
}

export default ContactPage;
