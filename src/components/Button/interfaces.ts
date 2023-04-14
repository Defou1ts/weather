import type { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	onClick: () => void;
}
