<script lang="ts">
    export let type = '';
    export let color = '';
    export let border = '';
    export let width = '';
    export let disabled:boolean;
    export let id = '';
    export let classname = '';

</script>
<!-- rounded-2xl -->
<button on:click on:submit  {disabled} class="  {type}  {id} rounded-md hover:text-primary hover:bg-colorSecondary mt-4 px-5 py-2 font-bold {color} md:text-sm text-[10px] block text-center border-{color} {border} {width} {classname}">
  <slot />
</button>

<style>

  .login {
    background-color: transparent;
    color: #fff;
  }
  .login:hover{
    transition: width 2s, height 2s, transform 2s;
    transition-duration: fade;
    background-color: #2f51d2;
    color: #0622A0;
  }
  .poll {
    background-color: #1E96FC;
    color:#0622A0;
    /* border: #0A84FF 1px solid; */
  }
  .start {
    background-color:#0622A0;
    color:#fff;
    /* 
    border: #0622A0 1px solid; */
  }

  .start:hover {
    background-color: #2f51d2;
    color: #fff;
    transition: width 2s;

  }
  .setting {
    background-color:#0622A0;
    color:#fff;
    width: 20%;
    /* border: #0622A0 1px solid; */
  }


  .proceed {
    background-color: #144c9c;
    color: #fff;
    display: flex;
    justify-content: left;
    width: fit-content;
  }
  .proceed:hover{
    transition: ease-in-out all;
    transition-duration: fade;
    background-color: #1E96FC;
    color: #0622A0;
  }

  .disabled {
    background-color: #1E96FC;
    opacity: 2;
    cursor: not-allowed;
  }

</style>
