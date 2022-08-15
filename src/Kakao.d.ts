declare namespace Kakao {
  export function init(key: string): void;

  export function isInitialized(): boolean;

  export function cleanup(): void;

  export interface NaviOptions {
    name: string;
    // LNG
    x: number;
    // LAT
    y: number;
    coordType?: "wgs84" | "katec";
  }

  export class Navi {
    static start(options: NaviOptions): void;
  }
}
