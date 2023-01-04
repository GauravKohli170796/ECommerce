import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Divider, IconButton, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { AppConst } from "../../constants/AppConst";
import { IAllProductApiResponse, IProduct } from "../../models/productModel";
import { getAllProducts } from "../../services/productServices";
import CarouselProvider from "../carousel/CarouselProvider";
import ProductCard from "./ProductCard";

function AllProducts() {
  const [products, setProducts] = useState<IAllProductApiResponse | null>(null);

  const tmpImages = [
    "https://source.unsplash.com/1620x600/?girl,bags",
    "https://source.unsplash.com/1620x600/?girl,tshirts",
    "https://source.unsplash.com/1620x600/?girl,jeans"
  ];
  const ref = useRef<HTMLDivElement>(null);
  const featureProductRef = useRef<HTMLDivElement>(null);
  const paginationCount = Math.ceil((products?.totalProducts[0]?.totalProducts || 0) / AppConst.productsPerPage);


  useEffect(() => {
    async function fetchAllProducts() {
      const { data } = await getAllProducts("0");
      setProducts(data);
    }
    fetchAllProducts();
  }, []);




  const callProductsPage = async(page: string) => {
    const { data } = await getAllProducts(page);
    const tmpProducts =  Object.assign({},products);
    tmpProducts.allProducts = data.allProducts;
    tmpProducts.totalProducts = data.totalProducts;
    setProducts(tmpProducts);
     
    setTimeout(() => {
      featureProductRef.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
    }, 1000)
  };

  const renderAllProducts = () => {
    return products?.allProducts.map((product: IProduct) => {
      console.log(product);
      return <ProductCard key={product._id} product={product} />;
    });
  };

  const renderLatestProducts = () => {
    return products?.latestProduct.map((product: IProduct) => {
      return <ProductCard key={product._id} product={product} />;
    });
  };

  const handleScrollForLatestProducts = () => {
    if (ref.current) {
      ref.current.scrollLeft += 320;
    }
  }

  return (
    <>
      <CarouselProvider imagesArr={tmpImages} />
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
    </>
  );
}

export default AllProducts;
