import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type NetworkProps = Readonly<{
    variant: string
}>;

const Network: React.FC<NetworkProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                履修中</Popover.Title>
            <Popover.Content>
                恒例の潜りです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>ネットワーク</Button>
        </OverlayTrigger>
    )
}

export default Network;