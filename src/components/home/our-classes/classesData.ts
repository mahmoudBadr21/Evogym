import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/image2.png"
import image3 from "../../../assets/image3.png"
import image4 from "../../../assets/image4.png"
import image5 from "../../../assets/image5.png"
import image6 from "../../../assets/image6.png"

type Classes = {
  id: number;
  title: string;
  image: string;
  description?: string
}

export const classesData: Classes[] = [
  {
    id: 1,
    title: "Weight Training Classes",
    image: image1,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit eveniet temporibus nostrum pariatur nulla ex unde praesentium sequi laborum."
  },
  {
    id: 2,
    title: "Yogo Classes",
    image: image2,
  },
  {
    id: 3,
    title: "Ab Core Classes",
    image: image3,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit eveniet temporibus nostrum pariatur nulla ex unde praesentium sequi laborum."
  },
  {
    id: 4,
    title: "Adventure Classes",
    image: image4,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit eveniet temporibus nostrum pariatur nulla ex unde praesentium sequi laborum."
  },
  {
    id: 5,
    title: "Fitness Classes",
    image: image5,
  },
  {
    id: 6,
    title: "Training Classes",
    image: image6,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit eveniet temporibus nostrum pariatur nulla ex unde praesentium sequi laborum."
  },
]

export const sliderSettings = {
  loop: true,
  spaceBetween: 50,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
}
