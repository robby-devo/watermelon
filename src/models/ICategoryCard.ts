export interface CategoryCardProps {
  title: string;
  imgSrc: string;
  id: number | string;
  handleCardClick: (id: number | string) => void;
}
