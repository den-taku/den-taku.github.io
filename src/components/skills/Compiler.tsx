import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type CompilerProps = Readonly<{
    variant: string
}>;

const Compiler: React.FC<CompilerProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                簡易実装</Popover.Title>
            <Popover.Content>
                正確には<a href="https://github.com/kuis-isle3sw/IoPLMaterials">インタプリタ</a>の実装およびコンパイラの勉強をしただけなのでドラゴンブックなどを読みたいと考えています．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>コンパイラ</Button>
        </OverlayTrigger>
    )
}

export default Compiler;