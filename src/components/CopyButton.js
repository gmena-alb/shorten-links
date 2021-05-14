import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const CopyButton = () => {
  const [isTextCopied, setIsTextCopied] = useState(false);

  const { shortenUrl } = useGlobalContext();

  const copyText = () => {
    navigator.clipboard.writeText(shortenUrl);
    setIsTextCopied(true);
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
      className={`${isTextCopied ? 'btn-dark' : 'btn-blue'}`}
      onClick={copyText}
    >{`${isTextCopied ? 'Copied' : 'Copy'}`}</div>
  );
};

export default CopyButton;
