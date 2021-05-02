import { RootState } from '../index';

export const selectSummonersIsFetching = (state: RootState): boolean => state.summoners.isFetching;
// eslint-disable-next-line max-len
export const selectSummonersData = (state: RootState): Record<any, any> | null => state.summoners.summonersData;
export const selectSummonersError = (state: RootState): string | null => state.summoners.error;