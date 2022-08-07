declare namespace kakao.maps {
  export function load(callback: () => void): void;

  export class Map {
    constructor(container: HTMLElement, options: MapOptions);

    public addControl(control: ZoomControl, position: ControlPosition);
  }

  export interface MapOptions {
    level: number;
    center: LatLng;
  }

  export class LatLng {
    constructor(lat: number, lng: number);
  }

  export class Marker {
    constructor(options: MarkerOptions);

    public setMap(map: Map | null): void;
  }

  export interface MarkerOptions {
    map?: Map;
    position: LatLng;
  }

  export enum ControlPosition {
    /**
     * 위 가운데를 의미한다. 아래로 쌓인다.
     */
    TOP = 1,
    /**
     * 왼쪽 위를 의미한다. 오른쪽으로 쌓인다.
     */
    TOPLEFT = 0,
    /**
     * 오른쪽 위를 의미한다. 왼쪽으로 쌓인다.
     */
    TOPRIGHT = 2,
    /**
     * 왼쪽 위를 의미한다. 아래로 쌓인다. (주의: 왼쪽 중앙을 의미하는 것이 아니다.)
     */
    LEFT = 6,
    /**
     * 오른쪽 위를 의미한다. 아래로 쌓인다. (주의: 오른쪽 중앙을 의미하는 것이 아니다.)
     */
    RIGHT = 7,
    /**
     * 왼쪽 아래를 의미한다. 오른쪽으로 쌓인다.
     */
    BOTTOM = 4,
    /**
     * 왼쪽 아래를 의미한다. 오른쪽으로 쌓인다.
     */
    BOTTOMLEFT = 3,
    /**
     * 오른쪽 아래를 의미한다. 왼쪽으로 쌓인다.
     */
    BOTTOMRIGHT = 5,
  }

  export class ZoomControl {
    constructor();
  }
}
