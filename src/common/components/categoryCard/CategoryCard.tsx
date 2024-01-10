import styles from "./CategoryCard.module.scss";
import ArrowLeft from "../../../assets/images/Arrow-left.svg";
import { CategoryCardProps } from "../../../models/ICategoryCard";

const CategoryCard = ({
  title,
  imgSrc,
  id,
  handleCardClick,
}: CategoryCardProps) => {
  return (
    <div
      data-testid="category-card"
      className={styles.categoryCardContainer}
      onClick={() => handleCardClick(id)}
    >
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img src={imgSrc} alt="fresh-food" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.hoverContainer}>
        <div className={styles.hoverTitle}>{title}</div>
        <div className={styles.hoverImgContainer}>
          <img src={ArrowLeft} alt="fresh-food" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
