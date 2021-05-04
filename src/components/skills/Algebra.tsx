import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type AlgebraProps = Readonly<{
    variant: string
}>;

const Algebra: React.FC<AlgebraProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                停滞中</Popover.Title>
            <Popover.Content>
                集合位相論の後になります．もう少し詳しく分類すると，今の所，群・環・体，ホモロジー代数(と整数論)等を学ぶつもりでいます．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>代数学</Button>
        </OverlayTrigger>
    )
}

export default Algebra;