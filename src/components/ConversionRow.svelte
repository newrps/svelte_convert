<script>
  import { conversionData } from '../lib/conversionData.js';
  export let currentCategory;
  export let inputValue;
  export let outputValue;
  export let fromUnit;
  export let toUnit;
  export let onInputChange; // (v) => void
  export let onFromChange;  // (unit) => void
  export let onToChange;    // (unit) => void
  export let onSwap;        // () => void
  $: currentUnits = conversionData[currentCategory].units;
</script>

<div class="conversion-row">
  <div class="input-group">
    <label>변환할 값</label>
    <div class="input-wrapper">
      <input
        type="number"
        bind:value={inputValue}
        on:input={() => onInputChange(inputValue)}
        placeholder="숫자를 입력하세요"
      />
      <select bind:value={fromUnit} on:change={() => onFromChange(fromUnit)}>
        {#each Object.keys(currentUnits) as unit}
          <option value={unit}>{currentUnits[unit].name}</option>
        {/each}
      </select>
    </div>
  </div>

  <button class="swap-button" on:click={onSwap} title="단위 교환">⇄</button>

  <div class="input-group">
    <label>변환 결과</label>
    <div class="input-wrapper">
      <input type="number" value={outputValue} placeholder="결과" readonly />
      <select bind:value={toUnit} on:change={() => onToChange(toUnit)}>
        {#each Object.keys(currentUnits) as unit}
          <option value={unit}>{currentUnits[unit].name}</option>
        {/each}
      </select>
    </div>
  </div>
</div>

<style>
  .conversion-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: end;
    margin-bottom: 30px;
  }
  .input-group { display: flex; flex-direction: column; }
  .input-group label {
    font-weight: 600; color: #495057; margin-bottom: 8px; font-size: 0.9rem;
    text-transform: uppercase; letter-spacing: 0.5px;
  }
  .input-wrapper { display: flex; gap: 10px; }
  .input-wrapper input {
    flex: 2; padding: 15px; border: 2px solid #e9ecef; border-radius: 10px; font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  .input-wrapper input:focus {
    outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
  }
  .input-wrapper select {
    flex: 1; padding: 15px; border: 2px solid #e9ecef; border-radius: 10px; font-size: 1rem;
    background: white; cursor: pointer; transition: all 0.3s ease;
  }
  .input-wrapper select:focus {
    outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
  }
  .swap-button {
    padding: 15px; border: none; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
    color: white; border-radius: 50%; cursor: pointer; font-size: 1.2rem; width: 50px; height: 50px;
    transition: all 0.3s ease; display: flex; align-items: center; justify-content: center;
  }
  .swap-button:hover { transform: rotate(180deg) scale(1.1); box-shadow: 0 5px 15px rgba(102,126,234,0.4); }

  @media (max-width: 768px) {
    .conversion-row { grid-template-columns: 1fr; gap: 15px; }
    .input-wrapper { flex-direction: column; gap: 10px; }
    .input-wrapper select { min-width: unset; flex: none; }
    .swap-button { justify-self: center; transform: rotate(90deg); }
  }
</style>
