import { createReducer } from "@ngrx/store";
import { AuthStateInterface } from "../models/auth-model";
import { initialAuthState } from "./auth.state";

const _authReducer = createReducer(initialAuthState);

export function AuthReducer(state: AuthStateInterface, action: any) {
    return _authReducer(state, action);
}