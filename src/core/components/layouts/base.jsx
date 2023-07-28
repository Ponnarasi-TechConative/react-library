/**
 * @prettier
 */
import React from "react";
import PropTypes from "prop-types";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default class BaseLayout extends React.Component {

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  };

  render() {
    const { errSelectors, specSelectors, getComponent } = this.props;
    const Row = getComponent("Row");
    const Col = getComponent("Col");
    const Increment = getComponent("increment", true);

    const handleClick = () => {
      alert("Button Clicked");
    };
    return (
      <div className="swrest-import-ui">
        <Row className="information-container">
          <Col mobile={12}>
            <button className="btn btn-primary" onClick={handleClick}>
              Click Me
            </button>
          </Col>
        </Row>
        <Increment />
       
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
      </div>
    );
  }
}
