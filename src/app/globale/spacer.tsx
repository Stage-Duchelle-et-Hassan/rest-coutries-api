import clsx from 'clsx';
import { FC } from 'react';

export type SpacerProps = {
	tooSmall?: boolean;
	small?: boolean;
	large?: boolean;
};

export const Spacer: FC<SpacerProps> = ({ tooSmall, small, large }) => {
	return (
		<div
			className={clsx('w-full h-20 lg:h-40', {
				'h-6 lg:h-10': tooSmall,
				'h-10 lg:h-20': small,
				'h-32 lg:h-60': large,
			})}
		/>
	);
};