import React from "react";
import { Card, Row } from "antd";
import { AssetType } from "api/types";

type AssetsListProps = {
  assets: AssetType[];
};

const AssetsList = ({ assets }: AssetsListProps) => {
  return (
    <>
      {assets.map((asset) => (
        <Row>
          <Card>
            <p>Name: {asset.name} </p>
            <p>Value: {asset.value} </p>
            <p>Side: {asset.trading.side} </p>
          </Card>
        </Row>
      ))}
    </>
  );
};

export default AssetsList;
