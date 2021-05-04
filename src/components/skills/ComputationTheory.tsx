import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ComputationTheoryProps = Readonly<{
    variant: string
}>;

const ComputationTheory: React.FC<ComputationTheoryProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                計算模型，計算可能性理論，計算複雑度理論の基礎がわかります．計算模型が特に好きで，一番好きな模型はラムダ計算です．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>計算理論</Button>
        </OverlayTrigger>
    )
}

export default ComputationTheory;