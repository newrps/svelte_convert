<script>
  export let resultValue = '-';
  export let resultFormula = '';
</script>

<div class="result-display">
  <h3>변환 결과</h3>
  <div class="result-value">{resultValue}</div>
  <div class="result-formula">{resultFormula}</div>
</div>

<style>
  /* 원본 단일 파일의 결과 박스 스타일을 1:1로 재현 */
  .result-display {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    border: 2px solid #e9ecef;

    /* 전역/리셋의 영향 방지용(디자인 흔들림 방지) */
    box-sizing: border-box;
    box-shadow: none;
    line-height: 1.25;
  }

  .result-display h3 {
    color: #495057;
    margin: 0 0 15px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .result-value {
    font-size: 2rem;
    font-weight: 700;
    color: #667eea;
    margin: 0 0 10px;
    white-space: nowrap; /* 긴 숫자 줄바꿈 방지 */
  }

  .result-formula {
    font-size: 0.9rem;
    color: #6c757d;
    font-style: italic;
    margin: 0;
  }
</style>
