import { conversionData } from './conversionData.js';

export function convert(value, fromUnit, toUnit, currentCategory) {
  if (value === '' || value === null || value === undefined) {
    return { result: null, resultValue: '-', resultFormula: '' };
  }
  const num = parseFloat(value);
  if (Number.isNaN(num)) {
    return { result: null, resultValue: '-', resultFormula: '' };
  }

  if (currentCategory === 'temperature') {
    const res = conversionData.temperature.convert(num, fromUnit, toUnit);
    const result = Number(res?.toFixed(6));
    const formula = `${num}${fromUnit} = ${res.toFixed(2)}${toUnit}`;
    return {
      result,
      resultValue: `${result.toFixed(6)} ${conversionData.temperature.units[toUnit]?.name || toUnit}`,
      resultFormula: formula
    };
  }

  const units = conversionData[currentCategory].units;
  const fromFactor = units[fromUnit].factor;
  const toFactor   = units[toUnit].factor;
  const res = num * fromFactor / toFactor;
  const result = Number(res.toFixed(6));
  const formula = `${num} ${units[fromUnit].name} = ${result.toFixed(6)} ${units[toUnit].name}`;
  return {
    result,
    resultValue: `${result.toFixed(6)} ${units[toUnit].name}`,
    resultFormula: formula
  };
}
