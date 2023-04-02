import { Scrollbar } from 'react-scrollbars-custom';
import * as React from 'react';
import './Scrollbar.css';

const CustomScrollbars = ({ onScroll, forwardedRef, style, children }) => {
    const refSetter = React.useCallback(scrollbarsRef => {
      if (scrollbarsRef) {
        forwardedRef(scrollbarsRef.view);
      } else {
        forwardedRef(null);
      }
    }, []);
  
    return (
      <Scrollbar
        ref={refSetter}
        style={{ ...style, overflow: "hidden" }}
        scrollerProps={{
            renderer: props => {
              const { elementRef, onScroll: rscOnScroll, ...restProps } = props;
    
              return (
                <span
                  {...restProps}
                  onScroll={e => {
                    onScroll(e);
                    rscOnScroll(e);
                  }}
                  ref={ref => {
                    elementRef(ref);
                  }}
                />
              );
            },
            
          }}
      >
        {children}
      </Scrollbar>
    );
  };
  
  const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
    <CustomScrollbars {...props} forwardedRef={ref} />
  ));

  export default CustomScrollbarsVirtualList;