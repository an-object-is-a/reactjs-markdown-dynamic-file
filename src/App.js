import React, { useState, useEffect } from 'react';

import MarkDown from 'markdown-to-jsx';

import './styles/main_styles.css';

function App() {
	const file_name = 'react_pinterest_clone.md';
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`./markdown/${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<div>
			<MarkDown>
				{post}
			</MarkDown>
		</div>
	);
}

export default App;
