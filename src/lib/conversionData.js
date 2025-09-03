// 단위/빠른 변환 데이터 (원본 그대로 유지)
export const conversionData = {
  length: {
    name: '길이',
    units: {
      m:   { name: '미터', factor: 1 },
      km:  { name: '킬로미터', factor: 1000 },
      cm:  { name: '센티미터', factor: 0.01 },
      mm:  { name: '밀리미터', factor: 0.001 },
      in:  { name: '인치', factor: 0.0254 },
      ft:  { name: '피트', factor: 0.3048 },
      yd:  { name: '야드', factor: 0.9144 },
      mile:{ name: '마일', factor: 1609.34 }
    },
    quickConversions: [
      { from: '1', fromUnit: 'm',  toUnit: 'cm',  label: '1m = 100cm' },
      { from: '1', fromUnit: 'km', toUnit: 'm',   label: '1km = 1000m' },
      { from: '1', fromUnit: 'in', toUnit: 'cm',  label: '1in ≈ 2.54cm' },
      { from: '1', fromUnit: 'ft', toUnit: 'm',   label: '1ft ≈ 0.305m' }
    ]
  },
  weight: {
    name: '무게',
    units: {
      kg: { name: '킬로그램', factor: 1 },
      g:  { name: '그램', factor: 0.001 },
      mg: { name: '밀리그램', factor: 0.000001 },
      lb: { name: '파운드', factor: 0.453592 },
      oz: { name: '온스', factor: 0.0283495 },
      t:  { name: '톤', factor: 1000 },
      stone: { name: '스톤', factor: 6.35029 }
    },
    quickConversions: [
      { from: '1', fromUnit: 'kg', toUnit: 'g',  label: '1kg = 1000g' },
      { from: '1', fromUnit: 'lb', toUnit: 'kg', label: '1lb ≈ 0.454kg' },
      { from: '1', fromUnit: 't',  toUnit: 'kg', label: '1t = 1000kg' },
      { from: '1', fromUnit: 'oz', toUnit: 'g',  label: '1oz ≈ 28.3g' }
    ]
  },
  temperature: {
    name: '온도',
    units: {
      C: { name: '섭씨(°C)' },
      F: { name: '화씨(°F)' },
      K: { name: '켈빈(K)' }
    },
    convert(value, from, to) {
      let celsius;
      if (from === 'C') celsius = value;
      else if (from === 'F') celsius = (value - 32) * 5 / 9;
      else if (from === 'K') celsius = value - 273.15;

      if (to === 'C') return celsius;
      else if (to === 'F') return celsius * 9 / 5 + 32;
      else if (to === 'K') return celsius + 273.15;
    },
    quickConversions: [
      { from: '0',   fromUnit: 'C', toUnit: 'F', label: '0°C = 32°F' },
      { from: '100', fromUnit: 'C', toUnit: 'F', label: '100°C = 212°F' },
      { from: '0',   fromUnit: 'C', toUnit: 'K', label: '0°C = 273.15K' },
      { from: '20',  fromUnit: 'C', toUnit: 'F', label: '20°C = 68°F' }
    ]
  },
  area: {
    name: '면적',
    units: {
      m2:  { name: '제곱미터', factor: 1 },
      km2: { name: '제곱킬로미터', factor: 1000000 },
      cm2: { name: '제곱센티미터', factor: 0.0001 },
      mm2: { name: '제곱밀리미터', factor: 0.000001 },
      ha:  { name: '헥타르', factor: 10000 },
      acre:{ name: '에이커', factor: 4046.86 },
      ft2: { name: '제곱피트', factor: 0.092903 }
    },
    quickConversions: [
      { from: '1', fromUnit: 'm2',  toUnit: 'cm2', label: '1m² = 10000cm²' },
      { from: '1', fromUnit: 'ha',  toUnit: 'm2',  label: '1ha = 10000m²' },
      { from: '1', fromUnit: 'km2', toUnit: 'ha',  label: '1km² = 100ha' },
      { from: '1', fromUnit: 'acre',toUnit: 'm2',  label: '1acre ≈ 4047m²' }
    ]
  },
  volume: {
    name: '부피',
    units: {
      L:   { name: '리터', factor: 1 },
      mL:  { name: '밀리리터', factor: 0.001 },
      m3:  { name: '세제곱미터', factor: 1000 },
      cm3: { name: '세제곱센티미터', factor: 0.001 },
      gal: { name: '갤런(US)', factor: 3.78541 },
      qt:  { name: '쿼트', factor: 0.946353 },
      pt:  { name: '파인트', factor: 0.473176 },
      cup: { name: '컵', factor: 0.236588 }
    },
    quickConversions: [
      { from: '1', fromUnit: 'L',  toUnit: 'mL', label: '1L = 1000mL' },
      { from: '1', fromUnit: 'm3', toUnit: 'L',  label: '1m³ = 1000L' },
      { from: '1', fromUnit: 'gal',toUnit: 'L',  label: '1gal ≈ 3.785L' },
      { from: '1', fromUnit: 'cup',toUnit: 'mL', label: '1cup ≈ 237mL' }
    ]
  }
};
