const { useState, createElement } = require('react');

module.exports = function({ start = 0, children = count => `count = ${count}` }) {
	const [count, setCount] = useState(start);
	const onClick = () => setCount(count + 1);

	return createElement('button', { onClick }, [children(count)]);
};
