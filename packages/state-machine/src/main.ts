import {
	State,
	StateMachineEvent,
	Transition,
	StatesMap,
	StateMachine,
} from './types';

export const errorState: State = 'LOCAL_ERROR_BROKEN_MACHINE';

export const createMachine = (
	initialState: string,
	states: StatesMap,
	onError?: () => void
) => {
	if (!states[initialState]) {
		throw 'State: ' + initialState.toString() + ' not found in states list';
	}
	return {
		currentState: initialState,
		states,
		onError:
			onError ??
			function () {
				console.log('Something went wrong');
			},
	};
};

const getTransitionsFromCurrentState = (machine: StateMachine) => {
	return machine.states[machine.currentState]?.transitions;
};

const transition = (machine: StateMachine, transition?: Transition) => {
	if (!transition) {
		machine.onError();
		return { ...machine, currentState: errorState };
	}
	if (transition.action) transition.action();
	return { ...machine, currentState: transition.newState };
};

export const sendEvent = (machine: StateMachine, event: StateMachineEvent) => {
	const transitions = getTransitionsFromCurrentState(machine);
	// state machine finished
	if (!transitions) return { ...machine, currentState: 'FINAL' };
	return transition(machine, transitions[event]);
};
