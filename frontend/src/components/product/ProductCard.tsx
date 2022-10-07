import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React from "react";

function ProductCard() {
  return (
    <Card
      sx={{
        minWidth: 220,
        maxWidth:320,
        margin: "5px 2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="260"
        image="https://source.unsplash.com/720x600/?girl,clothes"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div" sx={{textAlign:"left"}}>
          Lizard
        </Typography>
        <Typography
          sx={{ textOverflow: "ellipsis", width: "99%", overflow: "hidden", whiteSpace: "nowrap",textAlign:"left" }}
          variant="body2"
          color="text.secondary"
        >
          Lizards are a dwfd wduc dcb sdjcwd cdjhcwd cdjhcd
        </Typography>
      </CardContent>
      <CardActions>
        <CurrencyRupeeIcon fontSize="small" /> 300
        <Typography sx={{ textDecoration: "line-through", marginX: "5px", color: "rgb(38, 165, 65)" }} variant="body2">
          400
        </Typography>
        <Typography sx={{ color: "rgb(38, 165, 65)" }} variant="body2">
          discount 25%
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
