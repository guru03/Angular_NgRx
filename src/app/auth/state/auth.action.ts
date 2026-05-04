import { createAction, props } from "@ngrx/store";

export const enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logout',
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register Success',
    REGISTER_FAILURE = '[Auth] Register Failure',
    PASSWORD_RECOVERY = '[Auth] Password Recovery',
    PASSWORD_RECOVERY_SUCCESS = '[Auth] Password Recovery Success',
    PASSWORD_RECOVERY_FAILURE = '[Auth] Password Recovery Failure'
}   

export const enum AuthActionClasses {
    LOGIN = 'Login',
    LOGIN_SUCCESS = 'Login Success',
    LOGIN_FAILURE = 'Login Failure',
    LOGOUT = 'Logout',
    REGISTER = 'Register',
    REGISTER_SUCCESS = 'Register Success',
    REGISTER_FAILURE = 'Register Failure',
    PASSWORD_RECOVERY = 'Password Recovery',
    PASSWORD_RECOVERY_SUCCESS = 'Password Recovery Success',
    PASSWORD_RECOVERY_FAILURE = 'Password Recovery Failure'
}   

export const loginStart = createAction(
    AuthActionTypes.LOGIN,
    props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ user: any }>()
);