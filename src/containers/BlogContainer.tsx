import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogContainer.css'

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type BlogContainerProps = StateProps & OwnProps;
  
  const BlogContainer: React.FC<BlogContainerProps> = ({})  => {
    return (
        <div className="Blog">
            <header className="Blog-header">
                <br></br>
                <h1>Nothing!!!</h1>
                <h2>Wait, please!!</h2>
                <h4>or, please see <a href="https://zenn.dev/dentaku">Zenn</a></h4>
          </header>
        </div>
    );
  }
  
  export default BlogContainer;