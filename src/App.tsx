import React from 'react'
import { Button, Card, Input } from "antd"
import Loading from "./components/Loading"
import AssetsList from "./components/AssetsList"


const App = () => {
  return (
    <Card className="main-container">
      <Loading />
      <AssetsList />
        <Button type="primary">
          Load assets
        </Button>
        <Input
          className="main-input"
          placeholder="Search assets"
        />
    </Card>
  )
}

export default App
