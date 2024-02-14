import AssetsList from "../components/AssetsList";
import { render, screen } from "@testing-library/react";

const data = [{
  "name": "Litecoin",
  "value": 1000,
  "trading": {
    "side": "SELL_SIDE",
    "enabled": true
  }
},
{
  "name": "Bitcoin cash",
  "value": 4000.5012,
  "trading": {
    "side": "BUY_SIDE",
    "enabled": true
  }
}];

describe("AssetsList", () => {
  it("Should print asset information correctly", () => {
    render(<AssetsList assets={data} />);

    // Asserts for bitcoin cash
    expect(screen.getByText("Bitcoin cash", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("4,000.501", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Buy", { exact: false })).toBeInTheDocument();

    // Asserts for Litecoin
    expect(screen.getByText("Litecoin", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("1,000.000", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Sell", { exact: false })).toBeInTheDocument();
  });
});
