import { TradingSideEnum } from "../api/types";

export const mapTradingSideName = (sideName: TradingSideEnum) => {
  switch (sideName) {
    case TradingSideEnum.BUY_SIDE:
      return "Buy";
    case TradingSideEnum.SELL_SIDE:
      return "Sell";
    default:
      return "-";
  }
};

export const formatValue = (value: number) => {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(value);
};
