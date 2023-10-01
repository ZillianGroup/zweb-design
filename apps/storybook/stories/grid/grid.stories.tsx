import { Meta, StoryFn } from "@storybook/react"
import { Col, Row, globalColor, zwebPrefix } from "@zweb-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "LAYOUT/Grid",
} as Meta

export const Basic: StoryFn = () => (
  <Row
    style={{ backgroundColor: globalColor(`--${zwebPrefix}-blackAlpha-06`) }}
    horizontalGap={{ xs: "40px" }}
    verticalGap={{ xs: "80px" }}
    justify="end"
    align="center"
  >
    <Col md={11}>
      <div
        style={{
          borderRadius: "6px",
          height: "50px",
          backgroundColor: globalColor(`--${zwebPrefix}-blue-03`),
          color: "white",
        }}
      >
        Col-1
      </div>
    </Col>
    <Col xs={{ span: 10 }}>
      <div
        style={{
          borderRadius: "6px",
          height: "80px",
          backgroundColor: globalColor(`--${zwebPrefix}-blue-02`),
          color: "white",
        }}
      >
        Col-2
      </div>
    </Col>
  </Row>
)
