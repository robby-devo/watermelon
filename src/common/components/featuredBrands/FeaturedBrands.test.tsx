import { render,screen } from "@testing-library/react";
import FeaturedBrands from "./FeaturedBrands";
import almarai from '../../../assets/images/almarai.svg';
describe("Featured brands card component",()=>{
    it("test whether there is brand name",()=>{
        const productsList=["juicee","milk","juicee","milk"];
        render(<FeaturedBrands brandImg={almarai} brandName="Almarai" productsList={productsList} />)
        const brand=screen.getByAltText("brand")
        expect(brand).toBeInTheDocument();
    })
    it("test whether offer is displayed when there is offer",()=>{
        const productsList=["juicee","milk","juicee","milk"];
        render(<FeaturedBrands brandImg={almarai} brandName="Almarai" productsList={productsList} offer={20}/>)
        const offer=screen.getByText("20")
        expect(offer).toBeInTheDocument();
    })
})