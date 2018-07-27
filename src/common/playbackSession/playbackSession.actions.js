import { PLAYBACK_SESSION_CONSTANTS } from './playbackSession.constants';

export const startPlayback = () => ({
  type: PLAYBACK_SESSION_CONSTANTS.START_PLAYBACK,
});

export const stopPlayback = () => ({
  type: PLAYBACK_SESSION_CONSTANTS.STOP_PLAYBACK,
});

export const setBPM = val => ({
  type: PLAYBACK_SESSION_CONSTANTS.SET_BPM,
  payload: val,
});

export const setCurrentBeat = val => ({
  type: PLAYBACK_SESSION_CONSTANTS.SET_CURRENT_BEAT,
  payload: val,
});