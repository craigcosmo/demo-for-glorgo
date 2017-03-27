import { combineEpics, createEpicMiddleware } from 'redux-observable'

import homeEpic from 'homeEpic'
import adminEpic from 'adminEpic'

export const mainEpic = combineEpics(
	homeEpic,
	adminEpic
)
export const epicMiddleware = createEpicMiddleware(mainEpic)