import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type OptimizationProps = Readonly<{
    variant: string
}>;

const Optimization: React.FC<OptimizationProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                研究</Popover.Title>
            <Popover.Content>
                現在の研究室でのテーマです．特に，動的な組み合わせ最適化問題を解きます．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>最適化</Button>
        </OverlayTrigger>
    )
}

export default Optimization;