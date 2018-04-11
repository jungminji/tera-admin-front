import { Action } from '@ngrx/store';

// Action def
export const LOGIN_APP = '[App] Login App';
export const LOGOUT_APP = '[App] Logout App';

// Action creators
export class LoginApp implements Action {
    readonly type = LOGIN_APP;
    constructor(public payload: any) {}
}

export class LogoutApp implements Action {
    readonly type = LOGOUT_APP;
    constructor(public payload: any) {}
}

export type AppAction = LoginApp | LogoutApp;