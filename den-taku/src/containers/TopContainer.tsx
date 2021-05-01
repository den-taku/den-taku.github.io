import React from 'react';
import Icon from '../components/Icon'

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type TopContainerProps = StateProps & OwnProps;
  
  const TopContainer: React.FC<TopContainerProps> = ({})  => {
    return (
      <>
        <Icon />
      </> 
    );
  }
  
  export default TopContainer;