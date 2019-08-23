const { useState, createElement } = require('react');

module.exports = function({ start = 0, children = 'count = ' }) {
	const [count, setCount] = useState(start);
	const onClick = () => setCount(count + 1);
	const text = `${children}${count}`;

	return createElement('button', { onClick }, [text]);
};
