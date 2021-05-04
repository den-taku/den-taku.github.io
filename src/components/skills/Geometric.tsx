import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type GeometricProps = Readonly<{
    variant: string
}>;

const Geometric: React.FC<GeometricProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                停滞中</Popover.Title>
            <Popover.Content>
                代数学と関連の深い分野に興味があるのと，プログラム意味論の幾何学的意味に興味があります．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>幾何学</Button>
        </OverlayTrigger>
    )
}

export default Geometric;