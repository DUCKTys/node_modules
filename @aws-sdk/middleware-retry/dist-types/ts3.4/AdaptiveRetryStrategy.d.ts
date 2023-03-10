import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  Provider,
} from "@aws-sdk/types";
import { RateLimiter } from "@aws-sdk/util-retry";
import {
  StandardRetryStrategy,
  StandardRetryStrategyOptions,
} from "./StandardRetryStrategy";
export interface AdaptiveRetryStrategyOptions
  extends StandardRetryStrategyOptions {
  rateLimiter?: RateLimiter;
}
export declare class AdaptiveRetryStrategy extends StandardRetryStrategy {
  private rateLimiter;
  constructor(
    maxAttemptsProvider: Provider<number>,
    options?: AdaptiveRetryStrategyOptions
  );
  retry<Input extends object, Ouput extends MetadataBearer>(
    next: FinalizeHandler<Input, Ouput>,
    args: FinalizeHandlerArguments<Input>
  ): Promise<{
    response: unknown;
    output: Ouput;
  }>;
}
