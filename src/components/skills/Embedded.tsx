import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type EmbeddedProps = Readonly<{
    variant: string
}>;

const Embedded: React.FC<EmbeddedProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                基本がわかるだけです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>組み込み</Button>
        </OverlayTrigger>
    )
}

export default Embedded;