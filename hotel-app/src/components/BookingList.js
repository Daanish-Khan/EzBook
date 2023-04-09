import * as React from 'react';
import { ListItem, ListItemButton, ListItemText, Typography, Grid } from '@mui/material';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import CustomScrollbarsVirtualList from './Scrollbar'
import { COLORS } from './consts';

function BookingList( {gutter_size, itemCount, isAdmin, data, bookingClick }) {

    function renderRow(props) {
        const { index, style } = props;
    
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
                    onClick={() => bookingClick(data[index].chainName + ", Room #" + data[index].room_num)}
                >
                    <ListItemText 
                        primary={
                            <React.Fragment>
                                <Grid container spacing={0}>
                                    <Grid item xs={12} >
                                        <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>{data[index].chainName + ": "}</Typography>
                                        <Typography sx={{ display: 'inline' }}>{"Room #" + data[index].room_num}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ display: 'inline', fontStyle: 'italic'}}>{"$" + data[index].price + "/night"}</Typography>
                                        <Typography sx={{ display: 'inline', fontStyle: 'italic'}}>{", " + data[index].capacity + " rooms"}</Typography>
                                        {data[index].view_type !== null ? 
                                            <Typography sx={{ display: 'inline', fontStyle: 'italic'}}>
                                                {", " + data[index].view_type + " View"}
                                            </Typography>
                                            : null
                                        }
                                        {data[index].amenities !== null ?               
                                            <Typography sx={{ display: 'inline', fontStyle: 'italic' }}>
                                                {", Amenities: " + data[index].amenities}
                                            </Typography>
                                            : null
                                        }
                                        {data[index].amenities !== null ?
                                            <Typography sx={{ display: 'inline', fontStyle: 'italic' }}>
                                                , Expandable
                                            </Typography>
                                            : null
                                        }
                                    </Grid>
                                </Grid>
                                 
                                
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>
                                    {data[index].hotel + ", " + data[index].city + ", " + data[index].country}
                                </Typography>
                            </React.Fragment>  
                        }
                        sx={{
                            color:'white', 
                            wordWrap: "break-word"
                        }}
                        primaryTypographyProps={{ style: {whiteSpace: "normal"}}}
                    />
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

    return (
        <AutoSizer>
            {({ height, width }) => (
                    <FixedSizeList

                    height={height + gutter_size}
                    innerElementType={innerElementType}
                    width={width - 15}
                    itemSize={105}
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