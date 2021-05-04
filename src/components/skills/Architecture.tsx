import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ArchitectureProps = Readonly<{
    variant: string
}>;

const Architecture: React.FC<ArchitectureProps> = ({variant}) => {
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
            <Button variant={variant} size="lg" block>アーキテクチャ</Button>
        </OverlayTrigger>
    )
}

export default Architecture;