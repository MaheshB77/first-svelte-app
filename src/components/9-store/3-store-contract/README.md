# Contract in svelte
---

If we have a pattern like stores (i.e subscribe and set) then we can directly get and set values by adding $ in front of store name

To follow the store contract the object must have the structure like below

```javascript
const store = {
    subscribe() {}
    set() {}    //Optional
}
```