import { LOGIN_USER } from '../types/userTypes'
import { useDispatch } from "react-redux"

export interface LoginUserInterface{
    username: string,
    password: string
}

export const loginUser = (loginCredentials: LoginUserInterface) => {
    const dispatch = useDispatch()
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res =>
                dispatch({
                    type: LOGIN_USER,
                    payload: res
                })
            );
}