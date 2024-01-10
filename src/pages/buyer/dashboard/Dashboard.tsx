import FeaturedBrands from "../../../common/components/featuredBrands/FeaturedBrands";
import { MyThemeComponent, StyledButton } from "./DashboardStyles";
import almarai from '../../../assets/images/almarai.svg';
// redux implementation
export const DashBoard = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const productsListr=["juicee","milk","juicee","milk"];
  return (
    <>
    <MyThemeComponent>
      {/* 
      Buttons to dispatch actions using useDispatch hook
      */}

      <StyledButton data-test-id='incrementButton'
        onClick={() => {
          // dispatch(increment());
        }}
      >
        Increment
      </StyledButton>
      {/* 
      Read count value from store using useSelectore hook
      */}
      {/* {count} */}
      <StyledButton
        onClick={() => {
          // dispatch(decrement());
        }}
      >
        Decrement
      </StyledButton>
      
    </MyThemeComponent>
    <FeaturedBrands brandImg={almarai} brandName="Almarai" productsList={productsListr} offer={20} />
    </>
  );
};
