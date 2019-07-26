import React from "react"
import BasePortableText from "@sanity/block-content-to-react"
import serializers from "./serializers"

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    projectId="7rdxbykg"
    dataset="production"
  />
)

export default PortableText
