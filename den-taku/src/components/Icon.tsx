import React from 'react';
import Figure from 'react-bootstrap/Figure';

type IconProps = Readonly<{
    //
}>;

const Icon: React.FC<IconProps> = ({}) => {
    return (
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="../icon.JPG"
        />
        <Figure.Caption>
            icon: <a href="https://twitter.com/___shigao" id="twitter" color="cyan">@___shigao</a>
        </Figure.Caption>
      </Figure>
    )
}

export default Icon;