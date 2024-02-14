import React from "react";
import { Card, Row, Col } from "antd";
import { AssetType } from "api/types";
import { formatValue, mapTradingSideName } from "utils/formatters";

type AssetsListProps = {
  assets: AssetType[];
};

const AssetsList = ({ assets }: AssetsListProps) => {
  return (
    <Row gutter={[16, 16]}>
      {assets.map((asset) => (
        <Col
          key={asset.name}
          xs={12}
          md={8}
          
        >
          <Card style={{
            backgroundColor: "#eee",
          }}>
            <p>Name: {asset.name} </p>
            <p>Value: {formatValue(asset.value)} </p>
            <p>Side: {mapTradingSideName(asset.trading.side)} </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AssetsList;
