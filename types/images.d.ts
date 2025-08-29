// For Next.js projects using StaticImageData
import { StaticImageData } from 'next/image';

declare module '*.png' {
  const value: StaticImageData;
  export default value;
}

declare module '*.jpg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.gif' {
  const value: StaticImageData;
  export default value;
}

declare module '*.svg' {
  const value: StaticImageData;
  export default value;
}

declare module '*.webp' {
  const value: StaticImageData;
  export default value;
}

declare module '*.ico' {
  const value: StaticImageData;
  export default value;
}

declare module '*.bmp' {
  const value: StaticImageData;
  export default value;
}

declare module '*.tiff' {
  const value: StaticImageData;
  export default value;
}

declare module '*.avif' {
  const value: StaticImageData;
  export default value;
}
