import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type NumericalCalculationProps = Readonly<{
    variant: string
}>;

const NumericalCalculation: React.FC<NumericalCalculationProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                色々なアルゴリズムをRustで実装しました．レポジトリは
                <a href="https://github.com/den-taku/ElectricalAndElectronicComputingAndExercises">こちら</a>です(そのうち綺麗に整備しないと...)．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>数値計算</Button>
        </OverlayTrigger>
    )
}

export default NumericalCalculation;