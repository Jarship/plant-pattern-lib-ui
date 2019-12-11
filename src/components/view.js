import React from "react";
import styled from "@emotion/styled";
import { variant } from "styled-system";
import PropTypes from "prop-types";
import Flex from "./flex";

const StyledView = styled(Flex)(
  {
    label: "lib--ui-view",
    minWidth: "100vw",
    overflowX: "hidden"
  },
  variant({ scale: "views" })
);

const View = ({ layout, children, ...rest }) => (
  <StyledView
    as="article"
    flexDirection="column"
    {...rest}
    width={[1, 1 / 2, 1 / 4]}
  >
    {children}
  </StyledView>
);

View.defaultProps = {
  variant: "primary"
};

View.propTypes = {
  layout: PropTypes.any
};

export default View;
