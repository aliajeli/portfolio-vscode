const Sidebar = ({ className }: { className: string }) => {
	return (
		<aside className={className + ' h-full w-52 flex'}>
			<section className="w-12 bg-sidebar-bg"></section>
			<section className="w-40 bg-explorer-bg border-explorer-border border-r"></section>
		</aside>
	);
};
export default Sidebar;
