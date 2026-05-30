export interface Image {
  src: string;
  alt: string;
  title: string;
  aspect: number;
}

export const heroImage: Image = {
  src: "/images/thumb.jpg",
  alt: "Hero photograph",
  title: "Urban & Architecture",
  aspect: 16 / 9,
};

export const galleryImages: Image[] = [
  {
    src: "/images/urban-01.jpg",
    alt: "Gallery photo 1",
    title: "Frame 01",
    aspect: 4 / 5,
  },
  {
    src: "/images/urban-02.jpg",
    alt: "Gallery photo 2",
    title: "Frame 02",
    aspect: 4 / 5,
  },
  {
    src: "/images/urban-03.jpg",
    alt: "Gallery photo 3",
    title: "Frame 03",
    aspect: 4 / 5,
  },
];
