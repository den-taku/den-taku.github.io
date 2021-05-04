import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type SemanticsLambdaProps = Readonly<{
    variant: string
}>;

const SemanticsLambda: React.FC<SemanticsLambdaProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                表示的意味論について，ラムダ計算を元に考えることができます．読んだ書籍は主に
                <a href="https://www.kindaikagaku.co.jp/information/kd0184.htm">計算論(高橋)</a>および
                <a href="https://www.kyoritsu-pub.co.jp/bookdetail/9784320026575">プログラム意味論(横内)</a>です．
                後者は第七刷の正誤表にcontributeしました．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>プログラム意味論 with ラムダ計算</Button>
        </OverlayTrigger>
    )
}

export default SemanticsLambda;