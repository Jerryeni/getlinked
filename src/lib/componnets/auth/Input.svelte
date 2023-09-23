<script lang="ts">
    import {fade} from "svelte/transition"

    export let type = '';
    export let label = '';
    export let style = '';
    export let name = '';
    export let value = '';
    export let id:string;
    export let className = '';
    export let placeholder = '';

    // @ts-ignore
    const onInput = e => (value = e.target.value);
</script>

<!-- <div class="relative">
    <input {type} {value} on:input={onInput} {id} {name} {style} class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for={id} class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:dark:text-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"> {label}</label>
</div> -->
<div class="w-full py-1 appearance-none" {style}>
        <label for="" class="font-medium">{label}</label>
        <input {type} {value} {placeholder} on:input={onInput} {id} {name} {style}  class="w-full transition:fade duration-200 font-nunito placeholder-sm focus:border-secondary-200 hover:border-secondary-500 {type} {className}  border border-[0.5px solid rgba(0, 0, 0, 0.30);] bg-transparent {label} caret-primary-300 my-1 px-2 py-2 outline-none rounded" required>

</div>

