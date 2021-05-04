import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type SecurityProps = Readonly<{
    variant: string
}>;

const Security: React.FC<SecurityProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                停滞中</Popover.Title>
            <Popover.Content>
                ネットワークが勉強中なため，こちらはその後になってしまっています．
                すなわち私は今危険なプログラマということです(?)
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>セキュリティ</Button>
        </OverlayTrigger>
    )
}

export default Security;