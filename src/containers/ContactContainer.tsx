import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactContainer.css'

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type ContactContainerProps = StateProps & OwnProps;
  
  const ContactContainer: React.FC<ContactContainerProps> = ({})  => {
    return (
        <div className="Contact">
            <header className="Contact-header">
                <br></br>
                <a href="https://twitter.com/messages/compose?recipient_id=1122548131474763777">Please contact via Twitter.</a>
          </header>
        </div>
    );
  }
  
  export default ContactContainer;