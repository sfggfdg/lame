import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite22px } from "../../styledMixins";


function Group134835(props) {
  const { address, className } = props;

  return (
    <Group1348351 className={`group-134835 ${className || ""}`}>
      <Layer11
        className="layer-1-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/626a40289c7969402500b3ac/releases/626a463646a3df5533029085/img/layer-1-1@2x.png"
      />
      <Address className="address">{address}</Address>
    </Group1348351>
  );
}

const Group1348351 = styled.div`
  width: 209px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 292px;

  &.group-134835.group-134836 {
    margin-left: 110px;
  }

  &.group-134835.group-134837 {
    margin-left: 110px;
  }

  &.group-134835.group-134838 {
    margin-left: 110px;
  }
`;

const Layer11 = styled.img`
  width: 199px;
  height: 174px;
  margin-left: 1px;
  object-fit: cover;
`;

const Address = styled.div`
  ${PoppinsNormalWhite22px}
  width: 207px;
  min-height: 103px;
  margin-top: 15px;
  letter-spacing: 0;
`;

export default Group134835;
