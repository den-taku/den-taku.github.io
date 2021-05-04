import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ParallelProps = Readonly<{
    variant: string
}>;

const Parallel: React.FC<ParallelProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                サンプルの実装</Popover.Title>
            <Popover.Content>
                Rustでrayonを使ったサンプルの実行等は経験としてありますが手ずから書いたことがありません．
                手元にHaskellで並行・並列プログラミングする本があるのでそちらを進めていきたいと思っています．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>並列計算</Button>
        </OverlayTrigger>
    )
}

export default Parallel;