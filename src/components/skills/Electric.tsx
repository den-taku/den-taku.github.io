import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ElectricProps = Readonly<{
    variant: string
}>;

const Electric: React.FC<ElectricProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                学部は電気電子工学科です．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>電気回路</Button>
        </OverlayTrigger>
    )
}

export default Electric;