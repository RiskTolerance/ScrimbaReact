import Image from 'next/image';
import Link from 'next/link';

type MirrorProps = {
	url: string;
};

export const Mirror = ({ url }: MirrorProps) => {
	// later we can dynamically render based on the route :D
	return (
		<div className='absolute flex justify-center items-center rounded-tl-full rounded-bl-full right-0 top-1/2 -translate-y-10 w-16 h-20 bg-slate-950'>
			<Link href={url} target='_blank'>
				<Image src={'/svelte.svg'} width={40} height={40} alt='React' />
			</Link>
		</div>
	);
};
