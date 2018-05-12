import { logUser, logOffUser, getStreamingKey, getVideoData, loadSession } from '../../services/LoginService';

// FETCH HOME ACTION NAMES

export const LOG_USER = 'LOG_USER';
export const LOG_OFF_USER = 'LOG_OFF_USER';
export const LOG_OFF_USER_FULFILLED = 'LOG_OFF_USER_FULFILLED';
export const LOG_USER_PENDING = 'LOG_USER_PENDING';
export const LOG_USER_FULFILLED = 'LOG_USER_FULFILLED';
export const LOG_USER_REJECTED = 'LOG_USER_REJECTED';
export const GET_STREAMING_KEYS = 'GET_STREAMING_KEYS';
export const GET_STREAMING_KEYS_FULFILLED = 'GET_STREAMING_KEYS_FULFILLED';
export const GET_STREAMING_KEYS_REJECTED = 'GET_STREAMING_KEYS_REJECTED';
export const GET_STREAMING_KEYS_PENDING = 'GET_STREAMING_KEYS_PENDING';


// ACTION GENERATORS


const loadSessionAction = () => ({
    type: LOG_USER,
    payload: loadSession(),
});

const logUserAction = (username, password) => ({
    type: LOG_USER,
    payload: logUser(username, password)
});

const logOffUserAction = () => ({
    type: LOG_OFF_USER,
    payload: logOffUser()
});

const getStreamingKeyAction = (canalId) => ({
    type: GET_STREAMING_KEYS,
    payload: getStreamingKey(canalId)
});

const getVideoDataAction = (videoId) => ({
    type: GET_STREAMING_KEYS,
    payload: getVideoData(videoId)
});

// EXPORT ACTIONS

export { logUserAction as logUser };
export { logOffUserAction as logOffUser };
export { getStreamingKeyAction as getStreamingKey };
export { getVideoDataAction as getVideoData };
export { loadSessionAction as loadSession };