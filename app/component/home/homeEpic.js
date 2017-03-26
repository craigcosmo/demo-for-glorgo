import 'rxjs'

export default action$ =>
  action$.ofType('PING')
    .delay(1000)
    .mapTo({ type: 'PONG' })