import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type OperatingSystemProps = Readonly<{
    variant: string
}>;

const OperatingSystem: React.FC<OperatingSystemProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                仮想メモリの実装方法やプロセスの管理方法，簡単な並行プログラミングがソフトウェア，ハードウェアの双方からわかります
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>OS</Button>
        </OverlayTrigger>
    )
}

export default OperatingSystem;