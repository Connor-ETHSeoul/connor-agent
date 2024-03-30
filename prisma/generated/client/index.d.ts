
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agent_output
 * 
 */
export type Agent_output = $Result.DefaultSelection<Prisma.$Agent_outputPayload>
/**
 * Model Smart_contract
 * 
 */
export type Smart_contract = $Result.DefaultSelection<Prisma.$Smart_contractPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agent_outputs
 * const agent_outputs = await prisma.agent_output.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agent_outputs
   * const agent_outputs = await prisma.agent_output.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.agent_output`: Exposes CRUD operations for the **Agent_output** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agent_outputs
    * const agent_outputs = await prisma.agent_output.findMany()
    * ```
    */
  get agent_output(): Prisma.Agent_outputDelegate<ExtArgs>;

  /**
   * `prisma.smart_contract`: Exposes CRUD operations for the **Smart_contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Smart_contracts
    * const smart_contracts = await prisma.smart_contract.findMany()
    * ```
    */
  get smart_contract(): Prisma.Smart_contractDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Agent_output: 'Agent_output',
    Smart_contract: 'Smart_contract'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'agent_output' | 'smart_contract'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Agent_output: {
        payload: Prisma.$Agent_outputPayload<ExtArgs>
        fields: Prisma.Agent_outputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Agent_outputFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Agent_outputFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          findFirst: {
            args: Prisma.Agent_outputFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Agent_outputFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          findMany: {
            args: Prisma.Agent_outputFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>[]
          }
          create: {
            args: Prisma.Agent_outputCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          createMany: {
            args: Prisma.Agent_outputCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Agent_outputDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          update: {
            args: Prisma.Agent_outputUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          deleteMany: {
            args: Prisma.Agent_outputDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Agent_outputUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Agent_outputUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Agent_outputPayload>
          }
          aggregate: {
            args: Prisma.Agent_outputAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAgent_output>
          }
          groupBy: {
            args: Prisma.Agent_outputGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Agent_outputGroupByOutputType>[]
          }
          count: {
            args: Prisma.Agent_outputCountArgs<ExtArgs>,
            result: $Utils.Optional<Agent_outputCountAggregateOutputType> | number
          }
        }
      }
      Smart_contract: {
        payload: Prisma.$Smart_contractPayload<ExtArgs>
        fields: Prisma.Smart_contractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Smart_contractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Smart_contractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          findFirst: {
            args: Prisma.Smart_contractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Smart_contractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          findMany: {
            args: Prisma.Smart_contractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>[]
          }
          create: {
            args: Prisma.Smart_contractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          createMany: {
            args: Prisma.Smart_contractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Smart_contractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          update: {
            args: Prisma.Smart_contractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          deleteMany: {
            args: Prisma.Smart_contractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Smart_contractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Smart_contractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Smart_contractPayload>
          }
          aggregate: {
            args: Prisma.Smart_contractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSmart_contract>
          }
          groupBy: {
            args: Prisma.Smart_contractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Smart_contractGroupByOutputType>[]
          }
          count: {
            args: Prisma.Smart_contractCountArgs<ExtArgs>,
            result: $Utils.Optional<Smart_contractCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Agent_output
   */

  export type AggregateAgent_output = {
    _count: Agent_outputCountAggregateOutputType | null
    _avg: Agent_outputAvgAggregateOutputType | null
    _sum: Agent_outputSumAggregateOutputType | null
    _min: Agent_outputMinAggregateOutputType | null
    _max: Agent_outputMaxAggregateOutputType | null
  }

  export type Agent_outputAvgAggregateOutputType = {
    id: number | null
    proposalId: number | null
  }

  export type Agent_outputSumAggregateOutputType = {
    id: number | null
    proposalId: number | null
  }

  export type Agent_outputMinAggregateOutputType = {
    id: number | null
    proposalId: number | null
    color: string | null
    text: string | null
  }

  export type Agent_outputMaxAggregateOutputType = {
    id: number | null
    proposalId: number | null
    color: string | null
    text: string | null
  }

  export type Agent_outputCountAggregateOutputType = {
    id: number
    proposalId: number
    color: number
    text: number
    _all: number
  }


  export type Agent_outputAvgAggregateInputType = {
    id?: true
    proposalId?: true
  }

  export type Agent_outputSumAggregateInputType = {
    id?: true
    proposalId?: true
  }

  export type Agent_outputMinAggregateInputType = {
    id?: true
    proposalId?: true
    color?: true
    text?: true
  }

  export type Agent_outputMaxAggregateInputType = {
    id?: true
    proposalId?: true
    color?: true
    text?: true
  }

  export type Agent_outputCountAggregateInputType = {
    id?: true
    proposalId?: true
    color?: true
    text?: true
    _all?: true
  }

  export type Agent_outputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent_output to aggregate.
     */
    where?: Agent_outputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agent_outputs to fetch.
     */
    orderBy?: Agent_outputOrderByWithRelationInput | Agent_outputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Agent_outputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agent_outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agent_outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agent_outputs
    **/
    _count?: true | Agent_outputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agent_outputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agent_outputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agent_outputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agent_outputMaxAggregateInputType
  }

  export type GetAgent_outputAggregateType<T extends Agent_outputAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent_output]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent_output[P]>
      : GetScalarType<T[P], AggregateAgent_output[P]>
  }




  export type Agent_outputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Agent_outputWhereInput
    orderBy?: Agent_outputOrderByWithAggregationInput | Agent_outputOrderByWithAggregationInput[]
    by: Agent_outputScalarFieldEnum[] | Agent_outputScalarFieldEnum
    having?: Agent_outputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agent_outputCountAggregateInputType | true
    _avg?: Agent_outputAvgAggregateInputType
    _sum?: Agent_outputSumAggregateInputType
    _min?: Agent_outputMinAggregateInputType
    _max?: Agent_outputMaxAggregateInputType
  }

  export type Agent_outputGroupByOutputType = {
    id: number
    proposalId: number
    color: string
    text: string
    _count: Agent_outputCountAggregateOutputType | null
    _avg: Agent_outputAvgAggregateOutputType | null
    _sum: Agent_outputSumAggregateOutputType | null
    _min: Agent_outputMinAggregateOutputType | null
    _max: Agent_outputMaxAggregateOutputType | null
  }

  type GetAgent_outputGroupByPayload<T extends Agent_outputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agent_outputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agent_outputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agent_outputGroupByOutputType[P]>
            : GetScalarType<T[P], Agent_outputGroupByOutputType[P]>
        }
      >
    >


  export type Agent_outputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    color?: boolean
    text?: boolean
  }, ExtArgs["result"]["agent_output"]>

  export type Agent_outputSelectScalar = {
    id?: boolean
    proposalId?: boolean
    color?: boolean
    text?: boolean
  }


  export type $Agent_outputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent_output"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      proposalId: number
      color: string
      text: string
    }, ExtArgs["result"]["agent_output"]>
    composites: {}
  }


  type Agent_outputGetPayload<S extends boolean | null | undefined | Agent_outputDefaultArgs> = $Result.GetResult<Prisma.$Agent_outputPayload, S>

  type Agent_outputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Agent_outputFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Agent_outputCountAggregateInputType | true
    }

  export interface Agent_outputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent_output'], meta: { name: 'Agent_output' } }
    /**
     * Find zero or one Agent_output that matches the filter.
     * @param {Agent_outputFindUniqueArgs} args - Arguments to find a Agent_output
     * @example
     * // Get one Agent_output
     * const agent_output = await prisma.agent_output.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Agent_outputFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputFindUniqueArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Agent_output that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Agent_outputFindUniqueOrThrowArgs} args - Arguments to find a Agent_output
     * @example
     * // Get one Agent_output
     * const agent_output = await prisma.agent_output.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Agent_outputFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Agent_output that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputFindFirstArgs} args - Arguments to find a Agent_output
     * @example
     * // Get one Agent_output
     * const agent_output = await prisma.agent_output.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Agent_outputFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputFindFirstArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Agent_output that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputFindFirstOrThrowArgs} args - Arguments to find a Agent_output
     * @example
     * // Get one Agent_output
     * const agent_output = await prisma.agent_output.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Agent_outputFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Agent_outputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agent_outputs
     * const agent_outputs = await prisma.agent_output.findMany()
     * 
     * // Get first 10 Agent_outputs
     * const agent_outputs = await prisma.agent_output.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agent_outputWithIdOnly = await prisma.agent_output.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Agent_outputFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Agent_output.
     * @param {Agent_outputCreateArgs} args - Arguments to create a Agent_output.
     * @example
     * // Create one Agent_output
     * const Agent_output = await prisma.agent_output.create({
     *   data: {
     *     // ... data to create a Agent_output
     *   }
     * })
     * 
    **/
    create<T extends Agent_outputCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputCreateArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Agent_outputs.
     *     @param {Agent_outputCreateManyArgs} args - Arguments to create many Agent_outputs.
     *     @example
     *     // Create many Agent_outputs
     *     const agent_output = await prisma.agent_output.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Agent_outputCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agent_output.
     * @param {Agent_outputDeleteArgs} args - Arguments to delete one Agent_output.
     * @example
     * // Delete one Agent_output
     * const Agent_output = await prisma.agent_output.delete({
     *   where: {
     *     // ... filter to delete one Agent_output
     *   }
     * })
     * 
    **/
    delete<T extends Agent_outputDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputDeleteArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Agent_output.
     * @param {Agent_outputUpdateArgs} args - Arguments to update one Agent_output.
     * @example
     * // Update one Agent_output
     * const agent_output = await prisma.agent_output.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Agent_outputUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputUpdateArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Agent_outputs.
     * @param {Agent_outputDeleteManyArgs} args - Arguments to filter Agent_outputs to delete.
     * @example
     * // Delete a few Agent_outputs
     * const { count } = await prisma.agent_output.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Agent_outputDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Agent_outputDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agent_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agent_outputs
     * const agent_output = await prisma.agent_output.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Agent_outputUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent_output.
     * @param {Agent_outputUpsertArgs} args - Arguments to update or create a Agent_output.
     * @example
     * // Update or create a Agent_output
     * const agent_output = await prisma.agent_output.upsert({
     *   create: {
     *     // ... data to create a Agent_output
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent_output we want to update
     *   }
     * })
    **/
    upsert<T extends Agent_outputUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Agent_outputUpsertArgs<ExtArgs>>
    ): Prisma__Agent_outputClient<$Result.GetResult<Prisma.$Agent_outputPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Agent_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputCountArgs} args - Arguments to filter Agent_outputs to count.
     * @example
     * // Count the number of Agent_outputs
     * const count = await prisma.agent_output.count({
     *   where: {
     *     // ... the filter for the Agent_outputs we want to count
     *   }
     * })
    **/
    count<T extends Agent_outputCountArgs>(
      args?: Subset<T, Agent_outputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agent_outputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent_output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agent_outputAggregateArgs>(args: Subset<T, Agent_outputAggregateArgs>): Prisma.PrismaPromise<GetAgent_outputAggregateType<T>>

    /**
     * Group by Agent_output.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_outputGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Agent_outputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Agent_outputGroupByArgs['orderBy'] }
        : { orderBy?: Agent_outputGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Agent_outputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgent_outputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent_output model
   */
  readonly fields: Agent_outputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent_output.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Agent_outputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Agent_output model
   */ 
  interface Agent_outputFieldRefs {
    readonly id: FieldRef<"Agent_output", 'Int'>
    readonly proposalId: FieldRef<"Agent_output", 'Int'>
    readonly color: FieldRef<"Agent_output", 'String'>
    readonly text: FieldRef<"Agent_output", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Agent_output findUnique
   */
  export type Agent_outputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter, which Agent_output to fetch.
     */
    where: Agent_outputWhereUniqueInput
  }


  /**
   * Agent_output findUniqueOrThrow
   */
  export type Agent_outputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter, which Agent_output to fetch.
     */
    where: Agent_outputWhereUniqueInput
  }


  /**
   * Agent_output findFirst
   */
  export type Agent_outputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter, which Agent_output to fetch.
     */
    where?: Agent_outputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agent_outputs to fetch.
     */
    orderBy?: Agent_outputOrderByWithRelationInput | Agent_outputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agent_outputs.
     */
    cursor?: Agent_outputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agent_outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agent_outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agent_outputs.
     */
    distinct?: Agent_outputScalarFieldEnum | Agent_outputScalarFieldEnum[]
  }


  /**
   * Agent_output findFirstOrThrow
   */
  export type Agent_outputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter, which Agent_output to fetch.
     */
    where?: Agent_outputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agent_outputs to fetch.
     */
    orderBy?: Agent_outputOrderByWithRelationInput | Agent_outputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agent_outputs.
     */
    cursor?: Agent_outputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agent_outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agent_outputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agent_outputs.
     */
    distinct?: Agent_outputScalarFieldEnum | Agent_outputScalarFieldEnum[]
  }


  /**
   * Agent_output findMany
   */
  export type Agent_outputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter, which Agent_outputs to fetch.
     */
    where?: Agent_outputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agent_outputs to fetch.
     */
    orderBy?: Agent_outputOrderByWithRelationInput | Agent_outputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agent_outputs.
     */
    cursor?: Agent_outputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agent_outputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agent_outputs.
     */
    skip?: number
    distinct?: Agent_outputScalarFieldEnum | Agent_outputScalarFieldEnum[]
  }


  /**
   * Agent_output create
   */
  export type Agent_outputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * The data needed to create a Agent_output.
     */
    data: XOR<Agent_outputCreateInput, Agent_outputUncheckedCreateInput>
  }


  /**
   * Agent_output createMany
   */
  export type Agent_outputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agent_outputs.
     */
    data: Agent_outputCreateManyInput | Agent_outputCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Agent_output update
   */
  export type Agent_outputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * The data needed to update a Agent_output.
     */
    data: XOR<Agent_outputUpdateInput, Agent_outputUncheckedUpdateInput>
    /**
     * Choose, which Agent_output to update.
     */
    where: Agent_outputWhereUniqueInput
  }


  /**
   * Agent_output updateMany
   */
  export type Agent_outputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agent_outputs.
     */
    data: XOR<Agent_outputUpdateManyMutationInput, Agent_outputUncheckedUpdateManyInput>
    /**
     * Filter which Agent_outputs to update
     */
    where?: Agent_outputWhereInput
  }


  /**
   * Agent_output upsert
   */
  export type Agent_outputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * The filter to search for the Agent_output to update in case it exists.
     */
    where: Agent_outputWhereUniqueInput
    /**
     * In case the Agent_output found by the `where` argument doesn't exist, create a new Agent_output with this data.
     */
    create: XOR<Agent_outputCreateInput, Agent_outputUncheckedCreateInput>
    /**
     * In case the Agent_output was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Agent_outputUpdateInput, Agent_outputUncheckedUpdateInput>
  }


  /**
   * Agent_output delete
   */
  export type Agent_outputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
    /**
     * Filter which Agent_output to delete.
     */
    where: Agent_outputWhereUniqueInput
  }


  /**
   * Agent_output deleteMany
   */
  export type Agent_outputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent_outputs to delete
     */
    where?: Agent_outputWhereInput
  }


  /**
   * Agent_output without action
   */
  export type Agent_outputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent_output
     */
    select?: Agent_outputSelect<ExtArgs> | null
  }



  /**
   * Model Smart_contract
   */

  export type AggregateSmart_contract = {
    _count: Smart_contractCountAggregateOutputType | null
    _avg: Smart_contractAvgAggregateOutputType | null
    _sum: Smart_contractSumAggregateOutputType | null
    _min: Smart_contractMinAggregateOutputType | null
    _max: Smart_contractMaxAggregateOutputType | null
  }

  export type Smart_contractAvgAggregateOutputType = {
    id: number | null
  }

  export type Smart_contractSumAggregateOutputType = {
    id: number | null
  }

  export type Smart_contractMinAggregateOutputType = {
    id: number | null
    version: string | null
    code: string | null
  }

  export type Smart_contractMaxAggregateOutputType = {
    id: number | null
    version: string | null
    code: string | null
  }

  export type Smart_contractCountAggregateOutputType = {
    id: number
    version: number
    code: number
    _all: number
  }


  export type Smart_contractAvgAggregateInputType = {
    id?: true
  }

  export type Smart_contractSumAggregateInputType = {
    id?: true
  }

  export type Smart_contractMinAggregateInputType = {
    id?: true
    version?: true
    code?: true
  }

  export type Smart_contractMaxAggregateInputType = {
    id?: true
    version?: true
    code?: true
  }

  export type Smart_contractCountAggregateInputType = {
    id?: true
    version?: true
    code?: true
    _all?: true
  }

  export type Smart_contractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Smart_contract to aggregate.
     */
    where?: Smart_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Smart_contracts to fetch.
     */
    orderBy?: Smart_contractOrderByWithRelationInput | Smart_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Smart_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Smart_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Smart_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Smart_contracts
    **/
    _count?: true | Smart_contractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Smart_contractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Smart_contractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Smart_contractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Smart_contractMaxAggregateInputType
  }

  export type GetSmart_contractAggregateType<T extends Smart_contractAggregateArgs> = {
        [P in keyof T & keyof AggregateSmart_contract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmart_contract[P]>
      : GetScalarType<T[P], AggregateSmart_contract[P]>
  }




  export type Smart_contractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Smart_contractWhereInput
    orderBy?: Smart_contractOrderByWithAggregationInput | Smart_contractOrderByWithAggregationInput[]
    by: Smart_contractScalarFieldEnum[] | Smart_contractScalarFieldEnum
    having?: Smart_contractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Smart_contractCountAggregateInputType | true
    _avg?: Smart_contractAvgAggregateInputType
    _sum?: Smart_contractSumAggregateInputType
    _min?: Smart_contractMinAggregateInputType
    _max?: Smart_contractMaxAggregateInputType
  }

  export type Smart_contractGroupByOutputType = {
    id: number
    version: string
    code: string
    _count: Smart_contractCountAggregateOutputType | null
    _avg: Smart_contractAvgAggregateOutputType | null
    _sum: Smart_contractSumAggregateOutputType | null
    _min: Smart_contractMinAggregateOutputType | null
    _max: Smart_contractMaxAggregateOutputType | null
  }

  type GetSmart_contractGroupByPayload<T extends Smart_contractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Smart_contractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Smart_contractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Smart_contractGroupByOutputType[P]>
            : GetScalarType<T[P], Smart_contractGroupByOutputType[P]>
        }
      >
    >


  export type Smart_contractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    code?: boolean
  }, ExtArgs["result"]["smart_contract"]>

  export type Smart_contractSelectScalar = {
    id?: boolean
    version?: boolean
    code?: boolean
  }


  export type $Smart_contractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Smart_contract"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: string
      code: string
    }, ExtArgs["result"]["smart_contract"]>
    composites: {}
  }


  type Smart_contractGetPayload<S extends boolean | null | undefined | Smart_contractDefaultArgs> = $Result.GetResult<Prisma.$Smart_contractPayload, S>

  type Smart_contractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Smart_contractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Smart_contractCountAggregateInputType | true
    }

  export interface Smart_contractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Smart_contract'], meta: { name: 'Smart_contract' } }
    /**
     * Find zero or one Smart_contract that matches the filter.
     * @param {Smart_contractFindUniqueArgs} args - Arguments to find a Smart_contract
     * @example
     * // Get one Smart_contract
     * const smart_contract = await prisma.smart_contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Smart_contractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractFindUniqueArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Smart_contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Smart_contractFindUniqueOrThrowArgs} args - Arguments to find a Smart_contract
     * @example
     * // Get one Smart_contract
     * const smart_contract = await prisma.smart_contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Smart_contractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Smart_contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractFindFirstArgs} args - Arguments to find a Smart_contract
     * @example
     * // Get one Smart_contract
     * const smart_contract = await prisma.smart_contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Smart_contractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractFindFirstArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Smart_contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractFindFirstOrThrowArgs} args - Arguments to find a Smart_contract
     * @example
     * // Get one Smart_contract
     * const smart_contract = await prisma.smart_contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Smart_contractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Smart_contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Smart_contracts
     * const smart_contracts = await prisma.smart_contract.findMany()
     * 
     * // Get first 10 Smart_contracts
     * const smart_contracts = await prisma.smart_contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smart_contractWithIdOnly = await prisma.smart_contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Smart_contractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Smart_contract.
     * @param {Smart_contractCreateArgs} args - Arguments to create a Smart_contract.
     * @example
     * // Create one Smart_contract
     * const Smart_contract = await prisma.smart_contract.create({
     *   data: {
     *     // ... data to create a Smart_contract
     *   }
     * })
     * 
    **/
    create<T extends Smart_contractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractCreateArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Smart_contracts.
     *     @param {Smart_contractCreateManyArgs} args - Arguments to create many Smart_contracts.
     *     @example
     *     // Create many Smart_contracts
     *     const smart_contract = await prisma.smart_contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Smart_contractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Smart_contract.
     * @param {Smart_contractDeleteArgs} args - Arguments to delete one Smart_contract.
     * @example
     * // Delete one Smart_contract
     * const Smart_contract = await prisma.smart_contract.delete({
     *   where: {
     *     // ... filter to delete one Smart_contract
     *   }
     * })
     * 
    **/
    delete<T extends Smart_contractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractDeleteArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Smart_contract.
     * @param {Smart_contractUpdateArgs} args - Arguments to update one Smart_contract.
     * @example
     * // Update one Smart_contract
     * const smart_contract = await prisma.smart_contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Smart_contractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractUpdateArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Smart_contracts.
     * @param {Smart_contractDeleteManyArgs} args - Arguments to filter Smart_contracts to delete.
     * @example
     * // Delete a few Smart_contracts
     * const { count } = await prisma.smart_contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Smart_contractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Smart_contractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smart_contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Smart_contracts
     * const smart_contract = await prisma.smart_contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Smart_contractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Smart_contract.
     * @param {Smart_contractUpsertArgs} args - Arguments to update or create a Smart_contract.
     * @example
     * // Update or create a Smart_contract
     * const smart_contract = await prisma.smart_contract.upsert({
     *   create: {
     *     // ... data to create a Smart_contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Smart_contract we want to update
     *   }
     * })
    **/
    upsert<T extends Smart_contractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Smart_contractUpsertArgs<ExtArgs>>
    ): Prisma__Smart_contractClient<$Result.GetResult<Prisma.$Smart_contractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Smart_contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractCountArgs} args - Arguments to filter Smart_contracts to count.
     * @example
     * // Count the number of Smart_contracts
     * const count = await prisma.smart_contract.count({
     *   where: {
     *     // ... the filter for the Smart_contracts we want to count
     *   }
     * })
    **/
    count<T extends Smart_contractCountArgs>(
      args?: Subset<T, Smart_contractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Smart_contractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Smart_contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Smart_contractAggregateArgs>(args: Subset<T, Smart_contractAggregateArgs>): Prisma.PrismaPromise<GetSmart_contractAggregateType<T>>

    /**
     * Group by Smart_contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smart_contractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Smart_contractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Smart_contractGroupByArgs['orderBy'] }
        : { orderBy?: Smart_contractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Smart_contractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmart_contractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Smart_contract model
   */
  readonly fields: Smart_contractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Smart_contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Smart_contractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Smart_contract model
   */ 
  interface Smart_contractFieldRefs {
    readonly id: FieldRef<"Smart_contract", 'Int'>
    readonly version: FieldRef<"Smart_contract", 'String'>
    readonly code: FieldRef<"Smart_contract", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Smart_contract findUnique
   */
  export type Smart_contractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter, which Smart_contract to fetch.
     */
    where: Smart_contractWhereUniqueInput
  }


  /**
   * Smart_contract findUniqueOrThrow
   */
  export type Smart_contractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter, which Smart_contract to fetch.
     */
    where: Smart_contractWhereUniqueInput
  }


  /**
   * Smart_contract findFirst
   */
  export type Smart_contractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter, which Smart_contract to fetch.
     */
    where?: Smart_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Smart_contracts to fetch.
     */
    orderBy?: Smart_contractOrderByWithRelationInput | Smart_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Smart_contracts.
     */
    cursor?: Smart_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Smart_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Smart_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Smart_contracts.
     */
    distinct?: Smart_contractScalarFieldEnum | Smart_contractScalarFieldEnum[]
  }


  /**
   * Smart_contract findFirstOrThrow
   */
  export type Smart_contractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter, which Smart_contract to fetch.
     */
    where?: Smart_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Smart_contracts to fetch.
     */
    orderBy?: Smart_contractOrderByWithRelationInput | Smart_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Smart_contracts.
     */
    cursor?: Smart_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Smart_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Smart_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Smart_contracts.
     */
    distinct?: Smart_contractScalarFieldEnum | Smart_contractScalarFieldEnum[]
  }


  /**
   * Smart_contract findMany
   */
  export type Smart_contractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter, which Smart_contracts to fetch.
     */
    where?: Smart_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Smart_contracts to fetch.
     */
    orderBy?: Smart_contractOrderByWithRelationInput | Smart_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Smart_contracts.
     */
    cursor?: Smart_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Smart_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Smart_contracts.
     */
    skip?: number
    distinct?: Smart_contractScalarFieldEnum | Smart_contractScalarFieldEnum[]
  }


  /**
   * Smart_contract create
   */
  export type Smart_contractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * The data needed to create a Smart_contract.
     */
    data: XOR<Smart_contractCreateInput, Smart_contractUncheckedCreateInput>
  }


  /**
   * Smart_contract createMany
   */
  export type Smart_contractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Smart_contracts.
     */
    data: Smart_contractCreateManyInput | Smart_contractCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Smart_contract update
   */
  export type Smart_contractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * The data needed to update a Smart_contract.
     */
    data: XOR<Smart_contractUpdateInput, Smart_contractUncheckedUpdateInput>
    /**
     * Choose, which Smart_contract to update.
     */
    where: Smart_contractWhereUniqueInput
  }


  /**
   * Smart_contract updateMany
   */
  export type Smart_contractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Smart_contracts.
     */
    data: XOR<Smart_contractUpdateManyMutationInput, Smart_contractUncheckedUpdateManyInput>
    /**
     * Filter which Smart_contracts to update
     */
    where?: Smart_contractWhereInput
  }


  /**
   * Smart_contract upsert
   */
  export type Smart_contractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * The filter to search for the Smart_contract to update in case it exists.
     */
    where: Smart_contractWhereUniqueInput
    /**
     * In case the Smart_contract found by the `where` argument doesn't exist, create a new Smart_contract with this data.
     */
    create: XOR<Smart_contractCreateInput, Smart_contractUncheckedCreateInput>
    /**
     * In case the Smart_contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Smart_contractUpdateInput, Smart_contractUncheckedUpdateInput>
  }


  /**
   * Smart_contract delete
   */
  export type Smart_contractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
    /**
     * Filter which Smart_contract to delete.
     */
    where: Smart_contractWhereUniqueInput
  }


  /**
   * Smart_contract deleteMany
   */
  export type Smart_contractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Smart_contracts to delete
     */
    where?: Smart_contractWhereInput
  }


  /**
   * Smart_contract without action
   */
  export type Smart_contractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Smart_contract
     */
    select?: Smart_contractSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Agent_outputScalarFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    color: 'color',
    text: 'text'
  };

  export type Agent_outputScalarFieldEnum = (typeof Agent_outputScalarFieldEnum)[keyof typeof Agent_outputScalarFieldEnum]


  export const Smart_contractScalarFieldEnum: {
    id: 'id',
    version: 'version',
    code: 'code'
  };

  export type Smart_contractScalarFieldEnum = (typeof Smart_contractScalarFieldEnum)[keyof typeof Smart_contractScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Agent_outputWhereInput = {
    AND?: Agent_outputWhereInput | Agent_outputWhereInput[]
    OR?: Agent_outputWhereInput[]
    NOT?: Agent_outputWhereInput | Agent_outputWhereInput[]
    id?: IntFilter<"Agent_output"> | number
    proposalId?: IntFilter<"Agent_output"> | number
    color?: StringFilter<"Agent_output"> | string
    text?: StringFilter<"Agent_output"> | string
  }

  export type Agent_outputOrderByWithRelationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    color?: SortOrder
    text?: SortOrder
  }

  export type Agent_outputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Agent_outputWhereInput | Agent_outputWhereInput[]
    OR?: Agent_outputWhereInput[]
    NOT?: Agent_outputWhereInput | Agent_outputWhereInput[]
    proposalId?: IntFilter<"Agent_output"> | number
    color?: StringFilter<"Agent_output"> | string
    text?: StringFilter<"Agent_output"> | string
  }, "id">

  export type Agent_outputOrderByWithAggregationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    color?: SortOrder
    text?: SortOrder
    _count?: Agent_outputCountOrderByAggregateInput
    _avg?: Agent_outputAvgOrderByAggregateInput
    _max?: Agent_outputMaxOrderByAggregateInput
    _min?: Agent_outputMinOrderByAggregateInput
    _sum?: Agent_outputSumOrderByAggregateInput
  }

  export type Agent_outputScalarWhereWithAggregatesInput = {
    AND?: Agent_outputScalarWhereWithAggregatesInput | Agent_outputScalarWhereWithAggregatesInput[]
    OR?: Agent_outputScalarWhereWithAggregatesInput[]
    NOT?: Agent_outputScalarWhereWithAggregatesInput | Agent_outputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agent_output"> | number
    proposalId?: IntWithAggregatesFilter<"Agent_output"> | number
    color?: StringWithAggregatesFilter<"Agent_output"> | string
    text?: StringWithAggregatesFilter<"Agent_output"> | string
  }

  export type Smart_contractWhereInput = {
    AND?: Smart_contractWhereInput | Smart_contractWhereInput[]
    OR?: Smart_contractWhereInput[]
    NOT?: Smart_contractWhereInput | Smart_contractWhereInput[]
    id?: IntFilter<"Smart_contract"> | number
    version?: StringFilter<"Smart_contract"> | string
    code?: StringFilter<"Smart_contract"> | string
  }

  export type Smart_contractOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    code?: SortOrder
  }

  export type Smart_contractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Smart_contractWhereInput | Smart_contractWhereInput[]
    OR?: Smart_contractWhereInput[]
    NOT?: Smart_contractWhereInput | Smart_contractWhereInput[]
    version?: StringFilter<"Smart_contract"> | string
    code?: StringFilter<"Smart_contract"> | string
  }, "id">

  export type Smart_contractOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    code?: SortOrder
    _count?: Smart_contractCountOrderByAggregateInput
    _avg?: Smart_contractAvgOrderByAggregateInput
    _max?: Smart_contractMaxOrderByAggregateInput
    _min?: Smart_contractMinOrderByAggregateInput
    _sum?: Smart_contractSumOrderByAggregateInput
  }

  export type Smart_contractScalarWhereWithAggregatesInput = {
    AND?: Smart_contractScalarWhereWithAggregatesInput | Smart_contractScalarWhereWithAggregatesInput[]
    OR?: Smart_contractScalarWhereWithAggregatesInput[]
    NOT?: Smart_contractScalarWhereWithAggregatesInput | Smart_contractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Smart_contract"> | number
    version?: StringWithAggregatesFilter<"Smart_contract"> | string
    code?: StringWithAggregatesFilter<"Smart_contract"> | string
  }

  export type Agent_outputCreateInput = {
    proposalId: number
    color: string
    text: string
  }

  export type Agent_outputUncheckedCreateInput = {
    id?: number
    proposalId: number
    color: string
    text: string
  }

  export type Agent_outputUpdateInput = {
    proposalId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Agent_outputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    proposalId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Agent_outputCreateManyInput = {
    id?: number
    proposalId: number
    color: string
    text: string
  }

  export type Agent_outputUpdateManyMutationInput = {
    proposalId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Agent_outputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    proposalId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Smart_contractCreateInput = {
    version: string
    code: string
  }

  export type Smart_contractUncheckedCreateInput = {
    id?: number
    version: string
    code: string
  }

  export type Smart_contractUpdateInput = {
    version?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type Smart_contractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type Smart_contractCreateManyInput = {
    id?: number
    version: string
    code: string
  }

  export type Smart_contractUpdateManyMutationInput = {
    version?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type Smart_contractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Agent_outputCountOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    color?: SortOrder
    text?: SortOrder
  }

  export type Agent_outputAvgOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
  }

  export type Agent_outputMaxOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    color?: SortOrder
    text?: SortOrder
  }

  export type Agent_outputMinOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    color?: SortOrder
    text?: SortOrder
  }

  export type Agent_outputSumOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Smart_contractCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    code?: SortOrder
  }

  export type Smart_contractAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Smart_contractMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    code?: SortOrder
  }

  export type Smart_contractMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    code?: SortOrder
  }

  export type Smart_contractSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Agent_outputDefaultArgs instead
     */
    export type Agent_outputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Agent_outputDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Smart_contractDefaultArgs instead
     */
    export type Smart_contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Smart_contractDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}