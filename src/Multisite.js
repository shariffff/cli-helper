function Multisite({ source, target }) {
	return (
		<div className="card">
			<code>
				wp search-replace {source} {target} --url={target} --network
				--skip-plugins --skip-themes
			</code>
			<code>
				wp search-replace http://{target} https://
				{target}
				--url={target} --network --skip-plugins --skip-themes
			</code>
			<code>
				wp search-replace @{target} @{source} --url={target} --network
				--skip-plugins --skip-themes
			</code>
		</div>
	);
}
export default Multisite;
