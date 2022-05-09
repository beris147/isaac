export type State = string;
export type StateMachineEvent = string;

export type Transition = {
	newState: State;
	action?: () => any;
};

export type StateTransitions = {
	transitions?: { [key: StateMachineEvent]: Transition };
};

export type StatesMap = { [key: State]: StateTransitions };

export type StateMachine = {
	currentState: State;
	states: StatesMap;
	onError: () => void;
};
