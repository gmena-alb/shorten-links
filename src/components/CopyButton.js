import React, { useState, useEffect } from 'react';

const CopyButton = ({ url }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(url).then(setIsTextCopied(true));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTextCopied]);

  return (
    <div
      className={`${isTextCopied ? 'btn-dark' : 'btn-blue-copy'}`}
      onClick={copyText}
    >{`${isTextCopied ? 'Copied' : 'Copy'}`}</div>
  );
};

export default CopyButton;
