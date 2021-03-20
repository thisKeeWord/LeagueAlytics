/* TODO: create thunk to call api & call dispatch
Call match route & add filtered data to match timeline response
Save to firestore
Update redux store to match list by id
Display end game data on one side and timeline by marker data on the other
*/

import axios from 'axios';
import { AppThunk } from '../index';
import { loadMatchFailure, loadMatchList, loadMatchSuccess } from '../reducers/match';
import { loadPatchSuccess } from '../reducers/patch';
import { setFetching, setUser, setUserError } from '../reducers/user';

interface GetMatchTimelineProps {
  username: string;
  gameId: number;
}

export const getMatchTimeline = ({ username, gameId }: GetMatchTimelineProps): AppThunk => async (
  dispatch,
  getState
): Promise<void> => {
  setFetching({ isFetching: true });

  const formattedUsername = username.replace(/\s+/g, '').toLowerCase();

  try {
    const matchData = await axios.get(`/api/${formattedUsername}/match/${gameId}`);
    dispatch(loadMatchSuccess({ matchData: matchData.data, matchId: gameId }));
  } catch (error) {
    dispatch(loadMatchFailure(error.message || 'An error has occurred'));
  } finally {
    dispatch(setFetching({ isFetching: false }));
  }
};
