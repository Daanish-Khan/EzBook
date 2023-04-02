import * as React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Scrollbar } from 'react-scrollbars-custom';
import { COLORS } from './consts';

function BookingList( {gutter_size, itemCount} ) {

    function renderRow(props) {
        const { index, style } = props;
    
        return (
            <ListItem style={{
                ...style,
                top: style.top + gutter_size,
                height: style.height - gutter_size,
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

    const CustomScrollbars = ({ forwardedRef, style, children }) => {
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
          >
            {children}
          </Scrollbar>
        );
      };
      
      const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
        <CustomScrollbars {...props} forwardedRef={ref} />
      ));
      

    return (
            <AutoSizer >
            {({ height, width }) => (
                    <FixedSizeList
                    height={height + gutter_size}
                    innerElementType={innerElementType}
                    width={width}
                    itemSize={47}
                    itemCount={itemCount}
                    overscanCount={5}
                    //outerElementType={CustomScrollbarsVirtualList}
                >
                    {renderRow}
                </FixedSizeList> 


            )}
        </AutoSizer>
    );

}

export default BookingList;