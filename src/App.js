import { useState } from 'react';
import './App.css';

function App() {
	const [source, setSouce] = useState('');
	const [target, setTarget] = useState('');
	return (
		<div className="App container">
			<div className="field">
				<label className="label" htmlFor="source">
					Source
				</label>
				<div className="control">
					<input
						className="input"
						type="text"
						name="source"
						id="source"
						value={source}
						onChange={(e) => setSouce(e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="destination">
					Destination
				</label>
				<div className="control">
					<input
						className="input"
						type="text"
						name="destination"
						id="destination"
						value={target}
						onChange={(e) => setTarget(e.target.value)}
					/>
				</div>
			</div>

			<code className="card">
				<span>
					wp search-replace {source} {target} --skip-themes --skip-plugins
				</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				<span>
					wp search-replace http://{target} https://{target} --skip-themes
					--skip-plugins
				</span>

				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				wp search-replace @{target} @{source} --skip-themes --skip-plugins
				<span></span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				<span>wp option update upload_path ''</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
			<code className="card">
				<span>wp cache flush</span>
				<button className="button" aria-label="Copy to clipboard">
					📋
				</button>
			</code>
		</div>
	);
}

export default App;
