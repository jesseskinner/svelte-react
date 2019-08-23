const React = require('react');

module.exports = function({ start = 0, children = 'count = ' }) {
	const [count, setCount] = React.useState(start);
	const onClick = () => setCount(count + 1);
	const text = `${children}${count}`;

	return React.createElement('button', { onClick }, [text]);
};
