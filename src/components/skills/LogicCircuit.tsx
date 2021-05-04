import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type LogicCircuitProps = Readonly<{
    variant: string
}>;

const LogicCurcuit: React.FC<LogicCircuitProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                簡易実装</Popover.Title>
            <Popover.Content>
                HDLを用いた小機能CPU実装，RustでのHWシミュレータ実装．<br />
                <a href="https://zenn.dev/dentaku/articles/kuac-2020-17">記事</a>はこちらです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>論理回路</Button>
        </OverlayTrigger>
    )
}

export default LogicCurcuit;