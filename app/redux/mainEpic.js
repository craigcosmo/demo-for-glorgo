import { combineEpics, createEpicMiddleware } from 'redux-observable'

import adminEpic from 'adminEpic'

export const mainEpic = combineEpics(
	adminEpic
)
export const epicMiddleware = createEpicMiddleware(mainEpic)