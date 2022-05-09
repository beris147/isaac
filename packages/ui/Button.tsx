import * as React from 'react';

type Props = {
	onClick?: () => void;
	children?: string;
};

export const Button = ({ onClick, children }: Props) => {
	return <button onClick={onClick}>{children ?? 'Button'}</button>;
};
