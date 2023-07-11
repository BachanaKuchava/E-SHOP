export enum TAuthorizationStage {
    AUTHORIZED = "authorized",
    UNAUTHORIZED = "unauthorized",
  }
  export type AuthContextValue = {
    status: TAuthorizationStage;
    setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>;
  };