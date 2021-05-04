import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type MLProps = Readonly<{
    variant: string
}>;

const ML: React.FC<MLProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                教師あり学習，教師なし学習，強化学習，深層学習および深層強化学習の基礎がわかります．講義および共立出版様より恵贈いただいた
                <a href="https://www.kyoritsu-pub.co.jp/bookdetail/9784320124721">深層強化学習入門</a>で学びました．
                実はあまり食指が動かない分野だったりします．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>機械学習</Button>
        </OverlayTrigger>
    )
}

export default ML;