import Footer from './Footer';
import './globals.css';
import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="">
			<head />
			<body className="h-screen w-screen grid grid-rows-[2.25rem_1fr_1.5rem] grid-cols-[13rem_1fr]">
				<Sidebar className="col-start-1 col-span-1 row-start-1 row-span-2" />
				<Header className="col-start-2 col-span-1 row-start-1 row-span-1" />
				<main className="col-start-2 col-span-1 row-start-2 row-span-1 bg-main-bg text-text-color">
					{children}
				</main>
				<Footer className="col-start-1 col-span-full row-start-3 row-span-1" />
			</body>
		</html>
	);
}
