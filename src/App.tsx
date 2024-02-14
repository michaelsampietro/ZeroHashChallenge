import React from "react";
import { Button, Card, Input, Row, Col } from "antd";
import Loading from "./components/Loading";
import AssetsList from "./components/AssetsList";
import { useState } from "react";
import { mockApi } from "api/mockApi";
import { MockApiResponse, AssetType } from "api/types";

const App = () => {
  const [assets, setAssets] = useState<AssetType[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchAssets = async (search?: string) => {
    setIsloading(true);
    const { data } = await mockApi<MockApiResponse>().finally(() =>
      setIsloading(false)
    );

    if (!data.length) setAssets([]);

    if (search?.length > 0) {
      const filtered = data.filter((asset) =>
        asset.name.toUpperCase().includes(search.toUpperCase())
      );
      setAssets(filtered);
      return;
    }

    setAssets(data);
  };

  return (
    <Card className="main-container">
      {isLoading && <Loading />}
      {assets.length > 0 && <AssetsList assets={assets} />}
      <Row gutter={16} justify="center">
        <Col>
          <Button type="primary" onClick={() => fetchAssets()}>
            Load assets
          </Button>
        </Col>
        <Col>
          <Input
            className="main-input"
            placeholder="Search assets"
            onChange={(e) => {
              fetchAssets(e.target.value);
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default App;
