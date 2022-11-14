export type MenuBoxPropsType = {
  image: string;
  navigateUrl: string;
  desc: string;
};

// MenuBox item
interface data {
  imageUrl: string;
  description: string;
  navigateUrl: string;
}

export type MenuPropsType = {
  menuTitle: string;
  data: data[];
};

// Carousel Item
export type CarouselRenderItemProps = {
  item: data;
};

// Header

export type HeaderProps = {
  backIcon?: boolean;
  title?: string;
};
