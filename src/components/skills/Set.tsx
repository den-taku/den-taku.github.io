import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type SetProps = Readonly<{
    variant: string
}>;

const Set: React.FC<SetProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                書籍</Popover.Title>
            <Popover.Content>
                講義と書籍で勉強を進めています．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>集合・位相</Button>
        </OverlayTrigger>
    )
}

export default Set;