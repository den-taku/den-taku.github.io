import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type SemanticsCategoryProps = Readonly<{
    variant: string
}>;

const SemanticsCategory: React.FC<SemanticsCategoryProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                履修中</Popover.Title>
            <Popover.Content>
                <a href="https://www.kyoritsu-pub.co.jp/bookdetail/9784320026575">プログラム意味論(横内)</a>レベルの話がわかります．
                また，通年の講義でAwodeyを読んでおり，それと並行してMacLaneを読んでいます．
                個人的に大変興味を持っている分野です．
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>プログラム意味論 with 圏論</Button>
        </OverlayTrigger>
    )
}

export default SemanticsCategory;