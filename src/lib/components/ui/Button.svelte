<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let className = '';
</script>

<button type={type} class={`btn ${className}`}>
  <slot />
</button>
