import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Contact Us</h1>
			<h2 className={subtitle()}>
				We are a small team of developers who are passionate about making
				beautiful websites. If you have any questions or need help with your
				website, feel free to contact us.
			</h2>

			<h2 className={subtitle({ class: "mt-8" })}>Contact Information
			
				<br/><strong>Email:</strong>
				<a className="ml-2" href="mailto:contact@key-software.com">
				contact@key-software.com
				</a>
			</h2>

		</div>
	);
}
