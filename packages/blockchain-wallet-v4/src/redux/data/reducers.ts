import { combineReducers } from 'redux'

import { activityReducer } from './activity/reducers'
import { algoReducer } from './algo/reducers'
import { fiatReducer } from './fiat/reducers'
import { miscReducer } from './misc/reducers'
import { simpleBuyCoreReducer } from './simpleBuy/reducers'
import bch from './bch/reducers'
import btc from './btc/reducers'
import eth from './eth/reducers'
import xlm from './xlm/reducers'

const dataReducer = combineReducers({
  activity: activityReducer,
  algo: algoReducer,
  bch,
  btc,
  eth,
  fiat: fiatReducer,
  misc: miscReducer,
  sbCore: simpleBuyCoreReducer,
  xlm
})

export default dataReducer
