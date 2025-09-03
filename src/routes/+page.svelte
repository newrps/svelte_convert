<script>
  import { onMount } from 'svelte';
  import { conversionData } from '../lib/conversionData.js';
  import { convert } from '../lib/convert.js';
  import AdManager from '../components/AdManager.svelte';
  import ConverterTabs from '../components/ConverterTabs.svelte';
  import ConversionRow from '../components/ConversionRow.svelte';
  import ResultDisplay from '../components/ResultDisplay.svelte';
  import QuickConversions from '../components/QuickConversions.svelte';

  // 상태
  let currentCategory = 'length';
  let inputValue = '';
  let outputValue = '';
  let fromUnit = '';
  let toUnit = '';
  let resultValue = '-';
  let resultFormula = '';

  // 파생값
  $: currentUnits = conversionData[currentCategory].units;

  // 초기 유닛 세팅
  function initUnits(category) {
    const units = Object.keys(conversionData[category].units);
    fromUnit = units[0];
    toUnit   = units[1] || units[0];
  }

  onMount(() => {
    initUnits(currentCategory);
  });

  // 탭 전환
  function switchTab(category) {
    currentCategory = category;
    initUnits(category);
    inputValue = '';
    outputValue = '';
    resultValue = '-';
    resultFormula = '';
  }

  // 변환 로직 (상태 갱신)
  function runConvert() {
    const { result, resultValue: rv, resultFormula: rf } =
      convert(inputValue, fromUnit, toUnit, currentCategory);
    if (result === null) {
      outputValue = '';
      resultValue = '-';
      resultFormula = '';
    } else {
      outputValue = result.toFixed(6);
      resultValue = rv;
      resultFormula = rf;
    }
  }

  // 단위 교환
  function swapUnits() {
    [fromUnit, toUnit] = [toUnit, fromUnit];
    [inputValue, outputValue] = [outputValue, inputValue];
    runConvert();
  }

  // 빠른 변환 적용
  function applyQuickConversion(item) {
    fromUnit = item.fromUnit;
    toUnit   = item.toUnit;
    inputValue = item.from;
    runConvert();
  }

  // 반응형 변환 트리거 (원본과 동일한 UX)
  $: if (inputValue !== undefined) runConvert();
  $: if (fromUnit && toUnit) runConvert();
</script>

<svelte:head>
  <title>단위 변환기</title>
  <meta name="description" content="빠르고 정확한 단위 변환을 위한 도구" />
</svelte:head>

<div class="container">
  <div class="header">
    <h1>🔄 단위 변환기</h1>
    <p>빠르고 정확한 단위 변환을 위한 도구</p>
  </div>

  <ConverterTabs
    {currentCategory}
    onSwitch={switchTab}
  />

  <div class="converter-content">
    <ConversionRow
      {currentCategory}
      {inputValue}
      {outputValue}
      {fromUnit}
      {toUnit}
      onInputChange={(v) => (inputValue = v)}
      onFromChange={(u) => (fromUnit = u)}
      onToChange={(u) => (toUnit = u)}
      onSwap={swapUnits}
    />

    <ResultDisplay {resultValue} {resultFormula} />

    <QuickConversions
      {currentCategory}
      onApply={applyQuickConversion}
    />
  </div>
</div>
<AdManager />
<style>
  .container {
    max-width: 1100px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  .header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white; padding: 30px; text-align: center;
  }
  .header h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 10px; }
  .header p { opacity: 0.9; font-size: 1.1rem; }
  .converter-content { padding: 40px; }

  @media (max-width: 768px) {
    .header h1 { font-size: 2rem; }
    .converter-content { padding: 20px; }
  }
</style>
