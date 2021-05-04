import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type CmosProps = Readonly<{
    variant: string
}>;

const Cmos: React.FC<CmosProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                CMOSでNANDを作る方法がわかります．つまりどんな論理回路でも作成可能ということです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>物性(特にCMOS)</Button>
        </OverlayTrigger>
    )
}

export default Cmos;