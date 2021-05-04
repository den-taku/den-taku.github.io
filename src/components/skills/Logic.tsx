import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type LogicProps = Readonly<{
    variant: string
}>;

const Logic: React.FC<LogicProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                基礎の基礎がわかります．と言っても自然演繹が主なのでもっと深めたいと考えています．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>数理論理学</Button>
        </OverlayTrigger>
    )
}

export default Logic;