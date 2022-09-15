export default function Single({ source, target }) {
	return (
		<div className="card">
			<code>
				wp search-replace {source} {target} --skip-themes --skip-plugins
			</code>
			<code>
				wp search-replace http://{target} https://{target} --skip-themes
				--skip-plugins
			</code>
			<code>
				wp search-replace @{target} @{  source.startsWith('www.') ? source.replace('www.', '') : source } --skip-themes --skip-plugins
				</code>
		</div>
	);
}
