import React from "react";
import { Button, Card, Input } from "antd";
import Loading from "./components/Loading";
import AssetsList from "./components/AssetsList";
import { useState } from "react";
import { mockApi } from "api/mockApi";
import { MockApiResponse, AssetType } from "api/types";

const App = () => {
  const [assets, setAssets] = useState<AssetType[] | null>();
  const [isLoading, setIsloading] = useState(false);

  const fetchAssets = async () => {
    setIsloading(true);
    const { data } = await mockApi<MockApiResponse>().finally(() =>
      setIsloading(false)
    );

    setAssets(data);
  };

  return (
    <Card className="main-container">
      {isLoading && <Loading />}
      {assets?.length && <AssetsList assets={assets} />}
      <Button type="primary" onClick={fetchAssets}>
        Load assets
      </Button>
      <Input className="main-input" placeholder="Search assets" />
    </Card>
  );
};

export default App;
