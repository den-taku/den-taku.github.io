import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type DatabaseProps = Readonly<{
    variant: string
}>;

const Database: React.FC<DatabaseProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                何もやっていない</Popover.Title>
            <Popover.Content>
                何もわかりませんし使ったことも今の所ありません．SQLってQoLの親戚か何かですか？
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>データベース</Button>
        </OverlayTrigger>
    )
}

export default Database;