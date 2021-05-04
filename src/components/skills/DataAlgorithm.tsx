import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type DataAlgorithmProps = Readonly<{
    variant: string
}>;

const DataAlgorithm: React.FC<DataAlgorithmProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                まだまだ学ぶことは多いと感じています．<a href="https://atcoder.jp/users/dentaku">AtCoder</a>も時間が空いている時に参加したいです．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>データ構造とアルゴリズム理論</Button>
        </OverlayTrigger>
    )
}

export default DataAlgorithm;