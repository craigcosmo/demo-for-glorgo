import { combineEpics, createEpicMiddleware } from 'redux-observable'

import pingEpic from 'homeEpic'

export const mainEpic = combineEpics(
	pingEpic
)
export const epicMiddleware = createEpicMiddleware(mainEpic)