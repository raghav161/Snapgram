import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh'}}>
      <iframe
        src="https://reels-clone-project.vercel.app/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Reels Clone Project"
      />
    </div>
  );
};

export default IframeComponent;
