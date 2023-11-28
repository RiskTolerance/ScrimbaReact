// types/index.ts (or any other filename you prefer)
import { NextPage } from 'next';

export type PageWithMainContentHeight = NextPage<{
	mainContentHeight: string;
}>;
