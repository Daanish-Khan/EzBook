import * as React from 'react';
import { ListItem, ListItemButton, ListItemText, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@mui/material';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import CustomScrollbarsVirtualList from './Scrollbar'
import { COLORS } from './consts';

function BookingList( {gutter_size, itemCount, isAdmin} ) {
    const [open, setOpen] = React.useState({open: false, index: -1});

    const bookingClick = (index) => {
        setOpen({open: true, index: index});
    }

    function renderRow(props) {
        const { index, style } = props;

        const handleClose = () => {
            setOpen({open: false, index: -1})
        }
    
        return (
            <ListItem style={{
                ...style,
                top: style.top + gutter_size,
                height: style.height - gutter_size,
                border: "3px solid #001220",
                borderRadius: "30px",
                padding: 0,
                backgroundColor: COLORS.defaultColor,
            }} key={index} component="div" disableGutters>
                <ListItemButton 
                    sx={{
                        borderRadius: "30px",
                        height: "100%",
                    }}
                    onClick={() => bookingClick(index)}
                >
                    <ListItemText primary={`Booking ${index + 1}`}
                      sx={{
                          color:'white', 
                          wordWrap: "break-word"
                      }}
                      primaryTypographyProps={{ style: {whiteSpace: "normal"}}}
                    />
                </ListItemButton>
                <Dialog
                
                    open={open.open && open.index === index}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
            
                >
                    <DialogTitle id="alert-dialog-title" sx={{paddingRight: 0, paddingLeft: 0, backgroundColor: COLORS.defaultColor, color: "white"}}>
                        {`Booking ${index + 1}`}
                    </DialogTitle>
                    <DialogContent sx={{backgroundColor: COLORS.defaultColor}}>
                        <DialogContentText id="alert-dialog-description" sx={{color: "white"}}>
                            Would you like to {isAdmin ? "rent" : "book"} this room?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{backgroundColor: COLORS.defaultColor}}>
                        <Button onClick={handleClose} sx={{color: "white", ':hover': {backgroundColor: COLORS.focusedColor}}}>Cancel</Button>
                        
                        {isAdmin ? 
                            <Button 
                                onClick={handleClose} 
                                sx={{
                                    color: "white", 
                                    backgroundColor: COLORS.primaryColor, 
                                    ':hover': {backgroundColor: COLORS.primaryFocusedColor}
                                }} 
                                autoFocus
                            >
                                Rent Now
                            </Button> 
                            : 
                            <Button 
                                onClick={handleClose} 
                                sx={{
                                    color: "white", 
                                    backgroundColor: COLORS.primaryColor, 
                                    ':hover': {backgroundColor: COLORS.primaryFocusedColor}
                                    }} 
                                    autoFocus
                            >
                                Book Now
                            </Button>
                        }
                    </DialogActions>
                </Dialog>
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

    return (
        <AutoSizer>
            {({ height, width }) => (
                    <FixedSizeList

                    height={height + gutter_size}
                    innerElementType={innerElementType}
                    width={width - 15}
                    itemSize={90}
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