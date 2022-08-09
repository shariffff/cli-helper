import { useState, useEffect } from 'react';
import './App.css';
import Multisite from './Multisite';
import Single from './Single';

function App() {
	const [source, setSource] = useState('');
	const [target, setTarget] = useState('');
	const [network, setNetwork] = useState(false);
	return (
		<div className="App container">
			<div className="field">
				<label className="label" htmlFor="source">
					Source
				</label>
				<div className="control">
					<input
						autoComplete="false"
						className="input"
						type="text"
						name="source"
						id="source"
						value={source}
						onChange={(e) => setSource(e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="destination">
					Destination
				</label>
				<div className="control">
					<input
						autoComplete="false"
						className="input"
						type="text"
						name="destination"
						id="destination"
						value={target}
						onChange={(e) => setTarget(e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="destination">
					Network
				</label>
				<div className="control">
					<input
						className=""
						type="checkbox"
						name="network"
						id="network"
						checked={network}
						onChange={() => setNetwork(!network)}
					/>
				</div>
			</div>
			<div>
				{network ? (
					<Multisite source={source} target={target} />
				) : (
					<Single source={source} target={target} />
				)}
				<code>
					wp option update upload_path '' --skip-themes --skip-plugins && wp hosting clearcache all
				</code>
			</div>
		</div>
	);
}

export default App;
