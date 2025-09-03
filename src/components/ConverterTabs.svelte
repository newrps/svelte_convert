<script>
  import { conversionData } from '../lib/conversionData.js';
  export let currentCategory;
  export let onSwitch; // (category) => void
</script>

<div class="converter-tabs">
  {#each Object.keys(conversionData) as category}
    <button
      class="tab-button {currentCategory === category ? 'active' : ''}"
      on:click={() => onSwitch(category)}
    >
      {conversionData[category].name}
    </button>
  {/each}
</div>

<style>
  .converter-tabs {
    display: flex;
    background: #f8f9fa;
    border-bottom: 2px solid #e9ecef;
    overflow-x: auto;
  }
  .tab-button {
    flex: 1;
    padding: 15px 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #6c757d;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  .tab-button.active {
    color: #667eea;
    background: white;
    border-bottom: 3px solid #667eea;
  }
  .tab-button:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
</style>
