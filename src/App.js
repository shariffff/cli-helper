import { useState } from 'react';
import './App.css';

function App() {
	const [source, setSouce] = useState('');
	const [target, setTarget] = useState('');
	return (
		<div className="App container">
			<input
				className="input"
				type="text"
				name="source"
				id="source"
				value={source}
				onChange={(e) => setSouce(e.target.value)}
			/>
			<br />
			<input
				className="input"
				type="text"
				name="destination"
				id="destination"
				value={target}
				onChange={(e) => setTarget(e.target.value)}
			/>
			<code>
				wp search-replace {source} {target} --skip-themes --skip-plugins
			</code>
			<code>
				{' '}
				wp search-replace http://{target} https://{target} --skip-themes
				--skip-plugins
			</code>
			<code>
				wp search-replace @{target} @{source} --skip-themes --skip-plugins
			</code>
			<code>wp option update upload_path ''</code>
			<code>wp cache flush</code>
		</div>
	);
}

export default App;
