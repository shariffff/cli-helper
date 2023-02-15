import { useState } from 'react';
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
				<a className="button visit" href={`http://${source}`} target="_blank" rel="noreferrer">Visit</a>
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
				<a className="button visit" href={`http://${target}`} target="_blank" rel="noreferrer">Visit</a>

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
			<hr/>
			<h6 style={{textAlign: 'center'}}>All</h6>
			<hr/>
			{ !network ? (<code className="card" contentEditable>
				wp search-replace {source} {target} --skip-themes --skip-plugins &&
				wp search-replace http://{target} https://{target} --skip-themes --skip-plugins &&
				wp search-replace @{target} @{  source.startsWith('www.') ? source.replace('www.', '') : source } --skip-themes --skip-plugins && wp option update upload_path '' --skip-themes --skip-plugins && wp hosting clearcache all --skip-plugins --skip-themes
			</code>) : ''}
		</div>
	);
}

export default App;
