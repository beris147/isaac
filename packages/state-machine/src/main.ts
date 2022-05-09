import { State, StateMachineEvent, Transition, StatesMap } from './types';

export default class FSM {
	private currentState: State;
	private states: StatesMap;
	private onError: () => void;

	public static errorState: State = 'LOCAL_ERROR_BROKEN_MACHINE';

	constructor(initialState: string, states: StatesMap, onError?: () => void) {
		if (!states[initialState]) {
			throw 'State: ' + initialState.toString() + ' not found in states list';
		}
		this.currentState = initialState;
		this.states = states;
		this.onError =
			onError ??
			function () {
				console.log('Something went wrong');
			};
	}

	private getTransitionsFromCurrentState = () => {
		return this.states[this.currentState]?.transitions;
	};

	private transition = (transition?: Transition) => {
		// state machine does not handle that event with the current state
		if (!transition) {
			this.onError();
			this.currentState = FSM.errorState;
			return;
		}
		if (transition.action) transition.action();
		this.currentState = transition.newState;
		console.log(this.currentState);
	};

	public sendEvent = (event: StateMachineEvent) => {
		const transitions = this.getTransitionsFromCurrentState();
		// state machine finished
		if (!transitions) return;
		this.transition(transitions[event]);
	};

	public getCurrentState = () => {
		return this.currentState;
	};
}
