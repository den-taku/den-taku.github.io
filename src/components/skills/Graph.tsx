import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type GraphProps = Readonly<{
    variant: string
}>;

const Graph: React.FC<GraphProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                得意科目です．研究テーマや興味のある分野との関連も深く，積極的に学んだ分野です．
                マトロイド等を今後は学びたいと思っています．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>グラフ理論</Button>
        </OverlayTrigger>
    )
}

export default Graph;