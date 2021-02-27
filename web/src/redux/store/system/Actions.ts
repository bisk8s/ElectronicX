import { SystemState } from './Types';
import { UPDATE_SESSION, SystemActionTypes } from './ActionTypes';

export default function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
