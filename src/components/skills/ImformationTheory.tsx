import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ImformationTheoryProps = Readonly<{
    variant: string
}>;

const ImformationTheory: React.FC<ImformationTheoryProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                基本的なことがわかります．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>情報理論</Button>
        </OverlayTrigger>
    )
}

export default ImformationTheory;