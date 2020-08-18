const expect = require('chai').expect;
const ReactComponent = require('../dist/ReactComponent.js');
const Counter = require('./react/Counter.js');
const FunctionCounter = require('./react/FunctionCounter.js');
const { JSDOM } = require('jsdom');

describe('Counter', () => {
	beforeEach(() => {
		const { window } = new JSDOM();
		global.window = window;
		global.document = window.document;
	});

	it('should render a button with text', () => {
		new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
			},
		});

		const button = document.querySelector('button');

		expect(button.innerHTML).to.equal('count = 0');
	});

	it('should render a button with custom prop', () => {
		new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
				start: 1,
			},
		});

		const button = document.querySelector('button');

		expect(button.innerHTML).to.equal('count = 1');
	});

	it('should render a button with custom children', () => {
		new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
				children: ['The count is '],
			},
		});

		const button = document.querySelector('button');

		expect(button.innerHTML).to.equal('The count is 0');
	});

	it('should increase when clicked', () => {
		new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
			},
		});

		const button = document.querySelector('button');

		button.click();
		button.click();

		expect(button.innerHTML).to.equal('count = 2');
	});

	it('should update when props change', () => {
		const r = new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
			},
		});

		const button = document.querySelector('button');
		button.click();

		r.$set({ children: 'Count is ', start: 5 });

		setTimeout(() => {
			expect(button.innerHTML).to.equal('Count is 1');
		});
	});

	it('should destory without issue', () => {
		const r = new ReactComponent({
			target: document.body,
			props: {
				this: Counter,
			},
		});

		r.$destroy();

		const button = document.querySelector('button');
		expect(button).to.equal(null);
	});

	it('should work with function children that return dom elements', () => {
		const r = new ReactComponent({
			target: document.body,
			props: {
				this: FunctionCounter,
				children: count => `The count is ${count}!`
			},
		});

		const button = document.querySelector('button');

		expect(button.innerHTML).to.equal('The count is 0!');
	});
});
