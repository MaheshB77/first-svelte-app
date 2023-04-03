import { writable } from "svelte/store";

export let isLoggedIn = writable<boolean>(false)
export let user = writable<User>();

interface User {
    email: string,
    password: string,
    isLoggedIn: boolean
}