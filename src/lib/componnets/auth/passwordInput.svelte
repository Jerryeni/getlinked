<script lang="ts">
    import Eyeslash from "$lib/svg/eye-slash.svg";
    import Eye from "$lib/svg/eye@2x.svg";
    
    export let label:"";
    export let style = "";
    export let name = "";
    export let value = "";
    export let id = "";
    export let className = "";
    export let placeholder = "";
    // export let required: boolean;
    // @ts-ignore
    // const onInput = (e) => (value = e.target.value);
    let showPassword = false;
    function setType(input: HTMLInputElement) {
        // input.type = type;
        input.type = showPassword ? "text" : "password"
    }
    let input: HTMLInputElement;
    const togglePassword = () => {
        showPassword = !showPassword;
        input.type = showPassword ? "text" : "password"
    };
</script>

<div class="w-full">
    <label for="" class="font-medium">{label}</label>
    <div 
        class="w-full relative flex focus:border focus-visible:border-primary-300 hover:border-se focus-within:border-colorPrimaryvariant2 font-nunito placeholder-sm label-sm border border-stroke bg-input3 my-2 px-2 outline-none rounded"
    >
            <input
            
            bind:this={input}
            use:setType
            {id}
            bind:value
            {name}
            {placeholder}
            {style}
            required
            class="border-none focus:border-none py-2  bg-transparent text-opacity-40 w-full outline-none"
        />
    
        <button on:click={togglePassword} type="button">
            {#if showPassword}
                <img src={Eye} class="w-5" alt="" />
            {:else}
                <img src={Eyeslash} class="w-5" alt="" />
            {/if}
        </button>
    </div>
</div>

