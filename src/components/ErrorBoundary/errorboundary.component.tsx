import React from 'react';
import type { ReactNode } from 'react';

import type { ErrorBoundaryProps } from './interfaces';

interface ErrorState {
	error: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError(): ErrorState {
		return { error: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error);
		console.log(errorInfo.componentStack);
	}

	render(): ReactNode {
		if (this.state.error) {
			return <h1>Произошла ошибка</h1>;
		}

		return this.props.children;
	}
}
