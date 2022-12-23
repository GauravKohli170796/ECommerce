import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Divider, IconButton, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppConst } from "../../constants/AppConst";
import { IAllProduct } from "../../models/productModel";
import { fetchProducts } from "../../redux/actions/asyncActions";
import { rootState } from "../../redux/store";
import CarouselProvider from "../carousel/CarouselProvider";
import Loader from "../loader/Loader";
import ProductCard from "./ProductCard";

function AllProducts() {
  const tmpImages = [
    "https://source.unsplash.com/1620x600/?girl,bags",
    "https://source.unsplash.com/1620x600/?girl,tshirts",
    "https://source.unsplash.com/1620x600/?girl,jeans"
  ];
  const ref = useRef<HTMLDivElement>(null);
  const featureProductRef = useRef<HTMLDivElement>(null);
  const disptach = useDispatch<any>();
  const { allProducts, latestProduct, totalProducts, loading } = useSelector((state: rootState) => state.product);
  const paginationCount = Math.ceil(totalProducts && totalProducts[0]?.totalProducts / AppConst.productsPerPage) || 0;

  const callProductsPage = (page: string) => {
    disptach(fetchProducts(page));
    setTimeout(()=>{
      featureProductRef.current?.scrollIntoView({behavior: "smooth", inline: "start"});
    },1000)
  };

  const renderAllProducts = () => {
    return allProducts.map((product: IAllProduct) => {
      return <ProductCard key={product._id} product={product} />;
    });
  };

  const renderLatestProducts = () => {
    return latestProduct.map((product: IAllProduct) => {
      return <ProductCard key={product._id} product={product} />;
    });
  };

  const handleScrollForLatestProducts =()=>{
    if(ref.current){
      ref.current.scrollLeft+=320;
     }
  }

  return (
    <>
      <CarouselProvider imagesArr={tmpImages}/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 2px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <Box>
          <Typography className="section-head" variant="overline" fontSize="large">
            Latest Products
          </Typography>
        </Box>

        <Divider sx={{ marginY: "16px", width: "96vw" }} />
        <IconButton onClick={handleScrollForLatestProducts} sx={{ backgroundColor: "lightgray", alignSelf: "flex-end", marginX: "16px" }}>
          <NavigateNextIcon />
        </IconButton>
        <Box ref={ref}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "96vw",
            margin: "10px 10px",
            overflowX: "scroll"
          }}
        >
          {renderLatestProducts()}
        </Box>
        <Divider sx={{ marginY: "16px", width: "96vw" }} />
        <Typography ref={featureProductRef} className="section-head" variant="overline" fontSize="large">
          Featured Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 10px",
            flexWrap: "wrap"
          }}
        >
          {renderAllProducts()}
        </Box>

        {paginationCount > 0 && (
          <Pagination
            count={paginationCount}
            onChange={(_e: React.ChangeEvent<unknown>, page: number) => {
              callProductsPage(page.toString());
            }}
            variant="outlined"
          />
        )}
      </Box>
      <Loader isVisible={loading} />
    </>
  );
}

export default AllProducts;
