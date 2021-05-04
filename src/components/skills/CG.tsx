import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type CGProps = Readonly<{
    variant: string
}>;

const CG: React.FC<CGProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                停滞中</Popover.Title>
            <Popover.Content>
                少しだけわかります．積ん読がたくさんある状態です．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>CG</Button>
        </OverlayTrigger>
    )
}

export default CG;