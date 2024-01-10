import { render, screen, fireEvent } from "@testing-library/react";
import CategoryCard from "./CategoryCard";
import ArrowLeft from "../../../assets/images/Arrow-left.svg";

describe("CategoryCard", () => {
  const mockTitle = "fresh food";
  const mockImgSrc = ArrowLeft;
  const mockId = 1;

  test("renders category card correctly", () => {
    render(
      <CategoryCard
        title={mockTitle}
        imgSrc={mockImgSrc}
        id={mockId}
        handleCardClick={() => {}}
      />
    );
    expect(screen.getByTestId("category-card")).toBeInTheDocument();
  });

  test("handles card click", () => {
    const mockHandleCardClick = jest.fn();
    render(
      <CategoryCard
        title={mockTitle}
        imgSrc={mockImgSrc}
        id={mockId}
        handleCardClick={mockHandleCardClick}
      />
    );

    const cardContainer = screen.getByTestId("category-card");
    fireEvent.click(cardContainer);
    expect(mockHandleCardClick).toHaveBeenCalledWith(mockId);
  });
});
