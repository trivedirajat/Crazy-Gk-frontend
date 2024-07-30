import React, { useState, useRef, useEffect } from 'react';

const IframeLightbox = ({ href, paddingBottom }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const handleTriggerClick = () => {
      setIsOpened(true);
      setIsLoaded(true); // Simulating iframe loading for demo purpose
    };
    trigger.addEventListener('click', handleTriggerClick);

    return () => {
      trigger.removeEventListener('click', handleTriggerClick);
    };
  }, []);

  const handleClose = () => {
    setIsOpened(false);
    setIsLoaded(false);
  };

  return (
    <>
      <a
        ref={triggerRef}
        className="iframe-lightbox-link"
        href={href}
        data-padding-bottom={paddingBottom}
        aria-hidden="true"
        rel="lightbox"
      >
        Open Lightbox
      </a>
      {isOpened && (
        <div className="iframe-lightbox is-showing">
          <div className="content-holder">
            <div className="content">
              <div className="body">
                {isLoaded ? (
                  <iframe src={href} title="lightbox iframe" />
                ) : (
                  <div className="half-circle-spinner">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                  </div>
                )}
              </div>
              <button className="btn-close" onClick={handleClose}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IframeLightbox;