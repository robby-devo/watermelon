import * as React from "react";
import { styled } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import paginationChevronRight from "../../../assets/images/right-chev.svg";
import paginationChevronLeft from "../../../assets/images/left-chev.svg";
import doubleChevronRight from "../../../assets/images/right-double-chev.svg";
import doubleChevronLeft from "../../../assets/images/left-double-chev.svg";

interface IPaginationProps {
  count: number;
  page: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  handlePagination: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const StyledPaginationContainer = styled("div")`
  .MuiPagination-root {
    .MuiPagination-ul {
      li {
        .MuiButtonBase-root {
          color: #000;
          text-align: center;
          font-family: "UrbanistRegular";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.5px;
          &:hover {
            background-color: transparent;
          }
        }
      }
      .Mui-selected {
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #ec187b;
      }
    }
  }

  button {
    background: none;
    border: none;
  }
`;

const StyledPaginationItem = styled(PaginationItem)`
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const PaginationComponent = ({
  count,
  page,
  handlePagination,
  showFirstButton,
  showLastButton,
}: IPaginationProps) => {
  return (
    <StyledPaginationContainer>
      <Pagination
        data-testid="pagination"
        count={count}
        page={page}
        showFirstButton={showFirstButton ? showFirstButton : false}
        showLastButton={showLastButton ? showLastButton : false}
        onChange={(event, value) => handlePagination(event, value)}
        defaultPage={1}
        renderItem={(item) => (
          <StyledPaginationItem
            components={{
              next: (props) => (
                <button {...props} data-testid="next-button">
                  <img
                    src={paginationChevronRight}
                    alt="paginationChevronRight"
                  />
                </button>
              ),
              previous: (props) => (
                <button {...props} data-testid="previous-button">
                  <img
                    src={paginationChevronLeft}
                    alt="paginationChevronLeft"
                  />
                </button>
              ),
              first: (props) => (
                <button {...props} data-testid="first-button">
                  <img src={doubleChevronLeft} alt="doubleChevronLeft" />
                </button>
              ),
              last: (props) => (
                <button {...props} data-testid="last-button">
                  <img src={doubleChevronRight} alt="doubleChevronRight" />
                </button>
              ),
            }}
            {...item}
          />
        )}
      />
    </StyledPaginationContainer>
  );
};

export default PaginationComponent;
