/** @format */

import Image from "next/image";
import variable from "../styles/variables.module.scss";
import logoImg from "../assets/logo.png";
import Hamburger from "./Hamburger";
import Link from "next/link";

export default function Navigation() {
	return (
		<div className={variable.navSection}>
			<div className={variable.navigation}>
				<div className={variable.logoContainer}>
					<Link href="/">
						<Image
							src={logoImg}
							className={variable.logoImage}
							alt="logo"
							height={60}
							width={130}
						/>
					</Link>
				</div>

				<div className={variable.sectionList}>
					<p>
						<Link href="/" id="style-2" data-replace="Home">
							<span>Home</span>
						</Link>
					</p>
					<p>
						<Link href="/Our-Doctor" id="style-2" data-replace="Our Doctor">
							<span>Our Doctor</span>
						</Link>
					</p>
					<p>
						<Link href="#our-clinic" id="style-2" data-replace="Our Clinic">
							<span>Our Clinic</span>
						</Link>
					</p>
					<p>
						<Link href="/AboutUs" id="style-2" data-replace="About Us">
							<span>About Us</span>
						</Link>
					</p>
					<p>
						<Link
							href="tel:0917583604"
							id="style-2"
							data-replace="(+63)-917-583-604"
						>
							<span>(+63)-917-583-604</span>
						</Link>
					</p>
				</div>
				<Hamburger />
			</div>
		</div>
	);
}
