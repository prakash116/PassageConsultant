import React from 'react';
import '../styles/ManagementPage.css';

const ContentBlock = ({ text }) => (
  <div className="content-block">
    <p>{text}</p>
  </div>
);

const ManagementPage = () => {
  const blocks = [
    "We analyze your behavior, benchmark your performance and identify potential savings.",
    "We educate people on the benefits of the visa policy to boost compliance and drive bottom line instructions.",
    "We update client with new visa policy and program solutions."
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="header">
          <h1>Management</h1>
        </div>
        {blocks.map((text, index) => (
          <ContentBlock key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;