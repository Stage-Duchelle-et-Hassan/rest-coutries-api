import { FC, PropsWithChildren } from 'react';

type Props = {
	className?: string;
};

export const AppContainer: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<div className='w-full px-2'>
			<div className="w-full max-w-screen-2xl mx-auto">{children}</div>
		</div>
	);
};