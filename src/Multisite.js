function Multisite({ source, target }) {
	return (
		<>
			<code className="card">
				<span>
					wp search-replace {source} {target} --url={target} --network
					--skip-plugins --skip-themes
				</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				<span>
					wp search-replace http://{target} https://{target}
					--url={target} --network --skip-plugins --skip-themes
				</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				<span>
					wp search-replace @{target} @{source} --url={target} --network
					--skip-plugins --skip-themes
				</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
		</>
	);
}
export default Multisite;
