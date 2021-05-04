import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type SoftwareEngProps = Readonly<{
    variant: string
}>;

const SoftwareEng: React.FC<SoftwareEngProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                停滞中</Popover.Title>
            <Popover.Content>
                潜らせていただいた講義の動画があるのでまずは視聴したいです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>ソフトウェア工学</Button>
        </OverlayTrigger>
    )
}

export default SoftwareEng;