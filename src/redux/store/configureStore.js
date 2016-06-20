// import {
// 	createStore
// }
// from 'redux';
// import rootReducers from '../reducers';

// // 之所以不直接返回 store 而是返回 createStore 是为了让外界可以传递initialState。
// export default initialState => createStore(rootReducers, initialState);


import {
	createStore, applyMiddleware
}
from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	// if (module.hot) {
	// 	// Enable Webpack hot module replacement for reducers
	// 	module.hot.accept('../reducers', () => {
	// 		const nextRootReducer = require('../reducers')
	// 		store.replaceReducer(nextRootReducer)
	// 	})
	// }

	return store
}



// import {
// 	createStore, compose, applyMiddleware
// }
// from 'redux';
// import rootReducers from '../reducers';
// import thunkMiddleware from 'redux-thunk';
// // import {persistState} from 'redux-devtools'
// // import DevTools from '../containers/DevTools'
// //使用chrome 扩展来做调试工具.
// // window.devToolsExtension ? window.devToolsExtension() : f => f

// let finalCreateStore;
// const middleware = applyMiddleware(thunkMiddleware);

// finalCreateStore = compose(middleware);


// export default function configureStore(initialState) {
// 	const store = finalCreateStore(createStore)(rootReducers, initialState)
// 	if (module.hot) {
// 		module.hot.accept('../reducers', () => {
// 			const nextReducer = require('../reducers')
// 			store.replaceReducer(nextReducer)
// 		})
// 	}
// 	return store
// }