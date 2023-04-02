import * as React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Scrollbar } from 'react-scrollbars-custom';
import { COLORS } from './consts';
import './BookingList.css';

function BookingList( {gutter_size, itemCount} ) {

    function renderRow(props) {
        const { index, style } = props;
    
        return (
            <ListItem style={{
                ...style,
                top: style.top + gutter_size,
                height: style.height - gutter_size,
                border: "2px solid #001220",
                borderRadius: "30px",
                backgroundColor: COLORS.defaultColor,
            }} key={index} component="div" disableGutters>
                <ListItemButton sx={{
                     borderRadius: "30px",
                }}>
                    <ListItemText primary={`Booking ${index + 1}`}
                    sx={{
                        color:'white', 
                    }}>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        );
    }

    const innerElementType = React.forwardRef(({ style, ...rest }, ref) => (
        <div
          ref={ref}
          style={{
            ...style,
            paddingTop: gutter_size,
          }}
          {...rest}
        />
    ));

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

    return (
        <AutoSizer>
            {({ height, width }) => (
                    <FixedSizeList

                    height={height + gutter_size}
                    innerElementType={innerElementType}
                    width={width - 15}
                    itemSize={46}
                    itemCount={itemCount}
                    overscanCount={5}
                    outerElementType={CustomScrollbarsVirtualList}
                >
                    {renderRow}
                </FixedSizeList> 
            )}
        </AutoSizer>
    );

}

export default BookingList;