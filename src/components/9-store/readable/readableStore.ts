import { readable } from "svelte/store";

export const message = readable("", (setter) => {
  // This function will get called if there is at least 1 subscriber
  console.log("Readable get called");
  setter("Hello world"); // Using this we can set the value for this readable store

  return () => {
    // This cleanup function will get called when all the subscribers are un-subscribed
  };
});