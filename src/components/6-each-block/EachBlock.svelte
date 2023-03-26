<script lang="ts">
    let colors: any[] = [
        { name: 'red', hex: '#f00' },
        { name: 'green', hex: '#0f0' },
        { name: 'blue', hex: '#00f' },
        { name: 'yellow', hex: '#ff0' }
    ];
</script>

<div class="">
    <p>Basic each loop</p>
    <ul>
        {#each colors as color}
            <li style="color: {color.hex};">{color.name}</li>
        {/each}
    </ul>
    <hr>

    <p>Object destructuring</p>
    <ul>
        {#each colors as { name, hex }}
            <li style="color: {hex};">{name} , {hex}</li>
        {/each}
    </ul>
    <hr>
    
    <p>Indexing</p>
    <ul>
        {#each colors as color, i}
            <li style="color: {color.hex};">{color.name} , {color.hex}, index: {i}</li>
        {/each}
    </ul>
</div>
