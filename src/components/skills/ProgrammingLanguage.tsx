import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

type ProgrammingLanguageProps = Readonly<{
    variant: string
}>;

const ProgrammingLanguage: React.FC<ProgrammingLanguageProps> = ({variant}) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">
                講義レベル</Popover.Title>
            <Popover.Content>
                再帰とか多相性とか高階関数とか型理論とかデザインパターンとかFPとかOOPとか
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant={variant} size="lg" block>プログラミング言語理論</Button>
        </OverlayTrigger>
    )
}

export default ProgrammingLanguage;