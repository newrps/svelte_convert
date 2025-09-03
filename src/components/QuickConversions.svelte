<script>
  import { conversionData } from '../lib/conversionData.js';
  export let currentCategory;
  export let onApply; // (item) => void

  $: quicks = conversionData[currentCategory].quickConversions || [];
</script>

<div class="quick-conversions">
  <h4>빠른 변환</h4>
  <div class="quick-grid">
    {#each quicks as item}
      <div class="quick-item" on:click={() => onApply(item)}>
        <div class="conversion">{item.label}</div>
        <div class="result">클릭하여 적용</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .quick-conversions { margin-top: 30px; }
  .quick-conversions h4 { color: #495057; margin-bottom: 15px; font-size: 1.1rem; }
  .quick-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;
  }
  .quick-item {
    background: white; padding: 15px; border-radius: 10px; border: 2px solid #e9ecef;
    text-align: center; transition: all 0.3s ease; cursor: pointer;
  }
  .quick-item:hover {
    border-color: #667eea; transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  .quick-item .conversion { font-weight: 600; color: #495057; }
  .quick-item .result { color: #667eea; font-size: 1.1rem; margin-top: 5px; }
</style>
