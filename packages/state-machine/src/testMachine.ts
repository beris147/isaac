import type { StatesMap } from './types';
import FSM from './main';

const initialState = 'first';
var currentTransition = '';

const assert = (condition: Boolean) => {
	if (!condition) throw 'assertion failed';
};

const statesMap: StatesMap = {
	first: {
		transitions: {
			move_to_second: {
				newState: 'second',
				action: () => {
					console.log('move_to_second from first');
					currentTransition = 'move_to_second';
				},
			},
			move_to_third: {
				newState: 'third',
				action: () => {
					console.log('move_to_third from first');
					currentTransition = 'move_to_third';
				},
			},
		},
	},
	second: {
		transitions: {
			move_to_third: {
				newState: 'third',
				action: () => {
					console.log('move_to_third from second');
					currentTransition = 'move_to_third';
				},
			},
		},
	},
	third: {},
};

let fsm = new FSM(initialState, statesMap);

fsm.sendEvent('move_to_second');
assert(currentTransition === 'move_to_second');
fsm.sendEvent('move_to_third');
assert(currentTransition === 'move_to_third');
// state machine finished, no more transitions
fsm.sendEvent('move_to_third');
assert(fsm.getCurrentState() === 'third');
// assert(fsm.getCurrentState() === FSM.errorState);
