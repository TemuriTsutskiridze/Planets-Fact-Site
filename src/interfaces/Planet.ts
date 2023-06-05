export default interface IPlanet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  "image-sizes": {
    mobile: {
      planet: {
        width: string;
        height: string;
      };
      geology: {
        width: string;
        height: string;
      };
    };
    tablet: {
      planet: {
        width: string;
        height: string;
      };
      geology: {
        width: string;
        height: string;
      };
    };
    desktop: {
      planet: {
        width: string;
        height: string;
      };
      geology: {
        width: string;
        height: string;
      };
    };
  };
  "planet-color": string;
  "burger-menu-icon-color": string;
  [key: string]: any;
}
