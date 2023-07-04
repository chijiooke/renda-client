export class Currency {
  constructor() {
    this.code = "NGN";
    this.symbol = "₦";
  }
  code: string;
  symbol: string;
}

export const currencies: Currency[] = [
  {
    code: "NGN",
    symbol: "₦",
  },
  {
    code: "USD",
    symbol: "$",
  },
  {
    code: "GBP",
    symbol: "£",
  },
  {
    code: "EUR",
    symbol: "€",
  },
];

export const currenciesSymbols = (() => {
  const val: any = {};
  //   ts-ignore
  currencies.forEach((it) => (val[it.code] = it.symbol));
  return val;
})();

export const currenciesCode = (() => {
  const val: any = {};
  currencies.forEach((it) => (val[it.symbol] = it.code));
  return val;
})();

const formatNumber = (n: string) => {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatCurrency = (input: HTMLInputElement, type: string) => {
  // initial caret position
  let caretPosition = input.selectionStart;
  const originalValue = input.value;

  // don't validate empty input
  if (!originalValue?.trim()) {
    return { originalValue, caretPosition };
  }

  // original length
  const original_len = input.value.length;
  let formattedValue = formatAmount(originalValue, type === "blur");

  if (!!caretPosition && !!formattedValue)
    // put caret back in the right position
    caretPosition = formattedValue.length - original_len + caretPosition;
  // input.setSelectionRange(caretPosition, caretPosition);
  return { formattedValue, caretPosition };
};

export const amountStringToNumber = (formattedValue: string) => {
  if (formattedValue.indexOf(".") >= 0) {
    var decimal_pos = formattedValue.indexOf(".");
    var left_side = formattedValue.substring(0, decimal_pos).replace(/\D/g, "");
    var right_side = formattedValue
      .substring(decimal_pos)
      .replace(/\D/g, "")
      .substring(0, 2);
    return Number(left_side + "." + right_side);
  } else {
    return Number(formattedValue.replace(/\D/g, ""));
  }
};

export const formatAmount = (formattedValue: string, addDecimal = true) => {
  if (!formattedValue) return;
  formattedValue = formattedValue.replace(/^0+([1-9])/, "$1");
  formattedValue = formattedValue.replace(/^0{2}\./, "0.");
  formattedValue = formattedValue.replace(/^0+$/, "0");

  // check for decimal
  if (formattedValue.indexOf(".") >= 0) {
    const decimal_pos = formattedValue.indexOf(".");
    const left_side = formatNumber(formattedValue.substring(0, decimal_pos));
    const right_side = formattedValue
      .substring(decimal_pos)
      .replace(/\D/g, "")
      .substring(0, 2);
    formattedValue = left_side + "." + right_side;
  } else {
    formattedValue = formatNumber(formattedValue);
  }
  if (formattedValue.indexOf(".") < 0 && addDecimal) {
    formattedValue += ".00";
  }

  return formattedValue;
};
