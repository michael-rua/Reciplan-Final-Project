import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'
import { UserProvider } from './components/context/UserContext'

import { RecipeProvider } from './components/context/RecipeContext'
import { WeekProvider } from './components/context/WeekContext'
import { ShoppingListProvider } from './components/context/ShoppingListContext'
import { SelectedDayProvider } from './components/context/SelectedDayContext'
import { NewIngredientsProvider } from './components/context/NewIngredientsContext'
import LoaderBlocker from 'components/context/LoadBlocker'
import { NewIngredientsContext } from 'components/context/NewIngredientsContext'

firebase.initializeApp({
  apiKey: 'AIzaSyBOmaFW54_Uc_NHxJ-LMTETeQ_N6I8qtps',
  authDomain: 'reciplan-50a10.firebaseapp.com',
  databaseURL: 'https://reciplan-50a10.firebaseio.com',
  projectId: 'reciplan-50a10',
  storageBucket: 'reciplan-50a10.appspot.com',
  messagingSenderId: '835692964752',
  appId: '1:835692964752:web:57a935be2507442b3a6115',
  measurementId: 'G-LWEQSS5R3R'
})
firebase.analytics()

ReactDOM.render(
  <Router>
    <UserProvider>
      <RecipeProvider>
        <WeekProvider>
          <ShoppingListProvider>
            <SelectedDayProvider>
              <NewIngredientsProvider>
                {/* <LoaderBlocker> */}
                  <App />
                {/* </LoaderBlocker> */}
              </NewIngredientsProvider>
            </SelectedDayProvider>
          </ShoppingListProvider>
        </WeekProvider>
      </RecipeProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
)
