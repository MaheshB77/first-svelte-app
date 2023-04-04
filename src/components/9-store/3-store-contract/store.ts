import { readable, writable } from "svelte/store";

export const store1 = writable('');

export const store2 = readable(0, (setter) => {
    let counter = 0;
    const intervalId = setInterval(() => {
        setter(++counter);
    }, 1000)

    return () => {
        clearInterval(intervalId);
    }
})