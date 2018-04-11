import * as fromApp from '../actions/app.action';

// Might want to add interface

// Initial state for app
export const initialState: any = {
    loginStatus: false
};

// Reducers
export function reducer(state = initialState, action: fromApp.AppAction): any {
    switch(action.type) {
        case fromApp.LOGIN_APP: {
            return {
                ...state,
                loginStatus: true
            }
        }
        case fromApp.LOGOUT_APP: {
            return {
                ...state,
                loginStatus: false
            }
        }
    }
    return state;
}

// Selector (getters)
export const getLoginStatus = (state: any) => state.loginStatus;
