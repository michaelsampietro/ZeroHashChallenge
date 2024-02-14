export type MockApiResponse = {
  data: AssetType[];
}

export type AssetType = {
  name: string;
  value: number;
  trading: TradingType;
}

export type TradingType = {
  side: TradingSideEnum;
  enabled: true;
}

export enum TradingSideEnum {
  SELL_SIDE = "SELL_SIDE",
  BUY_SIDE = "BUY_SIDE"
}