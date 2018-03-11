export type BsEventCallback = (event?: any) => boolean | void;

export interface ListenOptions {
  target?: HTMLElement;
  targets?: HTMLElement[];
  triggers?: string;
  outsideClick?: boolean;
  outsideEsc?: boolean;
  tabCanClose?: string;
  show?: BsEventCallback;
  hide?: BsEventCallback;
  toggle?: BsEventCallback;
}
