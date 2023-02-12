const Footer = ({ className }: { className: string }) => {
	return (
		<footer
			className={
				className + ' bg-bottombar-bg h-6 border-bottombar-border border-t'
			}
		></footer>
	);
};
export default Footer;
