
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Complex
 * 
 */
export type Complex = $Result.DefaultSelection<Prisma.$ComplexPayload>
/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model CalenderEntity
 * 
 */
export type CalenderEntity = $Result.DefaultSelection<Prisma.$CalenderEntityPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  ADMIN: 'ADMIN',
  TECHNICIAN: 'TECHNICIAN',
  USER: 'USER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const AccessLevel: {
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE'
};

export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Criticality: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Criticality = (typeof Criticality)[keyof typeof Criticality]


export const Condition: {
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR'
};

export type Condition = (typeof Condition)[keyof typeof Condition]


export const MainUse: {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL',
  INDUSTRIAL: 'INDUSTRIAL',
  MIXED: 'MIXED',
  OTHER: 'OTHER'
};

export type MainUse = (typeof MainUse)[keyof typeof MainUse]


export const ServiceStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const Category: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  OFFICE: 'OFFICE',
  SHOP: 'SHOP',
  GARAGE: 'GARAGE',
  OTHER: 'OTHER'
};

export type Category = (typeof Category)[keyof typeof Category]


export const SiteType: {
  BUILDING: 'BUILDING',
  COMPLEX: 'COMPLEX',
  FLOOR: 'FLOOR',
  UNIT: 'UNIT',
  ROOM: 'ROOM'
};

export type SiteType = (typeof SiteType)[keyof typeof SiteType]


export const RoomUse: {
  OFFICE: 'OFFICE',
  STORAGE: 'STORAGE',
  LABORATORY: 'LABORATORY',
  OTHER: 'OTHER'
};

export type RoomUse = (typeof RoomUse)[keyof typeof RoomUse]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type AccessLevel = $Enums.AccessLevel

export const AccessLevel: typeof $Enums.AccessLevel

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Criticality = $Enums.Criticality

export const Criticality: typeof $Enums.Criticality

export type Condition = $Enums.Condition

export const Condition: typeof $Enums.Condition

export type MainUse = $Enums.MainUse

export const MainUse: typeof $Enums.MainUse

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type SiteType = $Enums.SiteType

export const SiteType: typeof $Enums.SiteType

export type RoomUse = $Enums.RoomUse

export const RoomUse: typeof $Enums.RoomUse

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complex`: Exposes CRUD operations for the **Complex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complexes
    * const complexes = await prisma.complex.findMany()
    * ```
    */
  get complex(): Prisma.ComplexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calenderEntity`: Exposes CRUD operations for the **CalenderEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalenderEntities
    * const calenderEntities = await prisma.calenderEntity.findMany()
    * ```
    */
  get calenderEntity(): Prisma.CalenderEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    Complex: 'Complex',
    Building: 'Building',
    Floor: 'Floor',
    Unit: 'Unit',
    Room: 'Room',
    File: 'File',
    CalenderEntity: 'CalenderEntity',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "permission" | "complex" | "building" | "floor" | "unit" | "room" | "file" | "calenderEntity" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Complex: {
        payload: Prisma.$ComplexPayload<ExtArgs>
        fields: Prisma.ComplexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          findFirst: {
            args: Prisma.ComplexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          findMany: {
            args: Prisma.ComplexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          create: {
            args: Prisma.ComplexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          createMany: {
            args: Prisma.ComplexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          delete: {
            args: Prisma.ComplexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          update: {
            args: Prisma.ComplexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          deleteMany: {
            args: Prisma.ComplexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>[]
          }
          upsert: {
            args: Prisma.ComplexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexPayload>
          }
          aggregate: {
            args: Prisma.ComplexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplex>
          }
          groupBy: {
            args: Prisma.ComplexGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplexGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplexCountArgs<ExtArgs>
            result: $Utils.Optional<ComplexCountAggregateOutputType> | number
          }
        }
      }
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      CalenderEntity: {
        payload: Prisma.$CalenderEntityPayload<ExtArgs>
        fields: Prisma.CalenderEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalenderEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalenderEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          findFirst: {
            args: Prisma.CalenderEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalenderEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          findMany: {
            args: Prisma.CalenderEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>[]
          }
          create: {
            args: Prisma.CalenderEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          createMany: {
            args: Prisma.CalenderEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalenderEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>[]
          }
          delete: {
            args: Prisma.CalenderEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          update: {
            args: Prisma.CalenderEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          deleteMany: {
            args: Prisma.CalenderEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalenderEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalenderEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>[]
          }
          upsert: {
            args: Prisma.CalenderEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalenderEntityPayload>
          }
          aggregate: {
            args: Prisma.CalenderEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalenderEntity>
          }
          groupBy: {
            args: Prisma.CalenderEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalenderEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalenderEntityCountArgs<ExtArgs>
            result: $Utils.Optional<CalenderEntityCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    complex?: ComplexOmit
    building?: BuildingOmit
    floor?: FloorOmit
    unit?: UnitOmit
    room?: RoomOmit
    file?: FileOmit
    calenderEntity?: CalenderEntityOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    permissions: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ComplexCountOutputType
   */

  export type ComplexCountOutputType = {
    buildings: number
    photos: number
  }

  export type ComplexCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | ComplexCountOutputTypeCountBuildingsArgs
    photos?: boolean | ComplexCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * ComplexCountOutputType without action
   */
  export type ComplexCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexCountOutputType
     */
    select?: ComplexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplexCountOutputType without action
   */
  export type ComplexCountOutputTypeCountBuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
  }

  /**
   * ComplexCountOutputType without action
   */
  export type ComplexCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type BuildingCountOutputType
   */

  export type BuildingCountOutputType = {
    photos: number
    floors: number
  }

  export type BuildingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | BuildingCountOutputTypeCountPhotosArgs
    floors?: boolean | BuildingCountOutputTypeCountFloorsArgs
  }

  // Custom InputTypes
  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountFloorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
  }


  /**
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    rooms: number
    units: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FloorCountOutputTypeCountRoomsArgs
    units?: boolean | FloorCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    rooms: number
    photos: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UnitCountOutputTypeCountRoomsArgs
    photos?: boolean | UnitCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    photos: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | RoomCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    rooms: number
    units: number
    buildings: number
    complexes: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FileCountOutputTypeCountRoomsArgs
    units?: boolean | FileCountOutputTypeCountUnitsArgs
    buildings?: boolean | FileCountOutputTypeCountBuildingsArgs
    complexes?: boolean | FileCountOutputTypeCountComplexesArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountBuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountComplexesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplexWhereInput
  }


  /**
   * Count Type CalenderEntityCountOutputType
   */

  export type CalenderEntityCountOutputType = {
    buildings: number
  }

  export type CalenderEntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | CalenderEntityCountOutputTypeCountBuildingsArgs
  }

  // Custom InputTypes
  /**
   * CalenderEntityCountOutputType without action
   */
  export type CalenderEntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntityCountOutputType
     */
    select?: CalenderEntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalenderEntityCountOutputType without action
   */
  export type CalenderEntityCountOutputTypeCountBuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    status: $Enums.UserStatus | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    passwordResetToken: string | null
    passwordExpiresAt: Date | null
    passwordResetAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    status: $Enums.UserStatus | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    passwordResetToken: string | null
    passwordExpiresAt: Date | null
    passwordResetAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    status: number
    roleId: number
    createdAt: number
    updatedAt: number
    passwordResetToken: number
    passwordExpiresAt: number
    passwordResetAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    passwordResetToken?: true
    passwordExpiresAt?: true
    passwordResetAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    passwordResetToken?: true
    passwordExpiresAt?: true
    passwordResetAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    passwordResetToken?: true
    passwordExpiresAt?: true
    passwordResetAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    status: $Enums.UserStatus
    roleId: string
    createdAt: Date
    updatedAt: Date
    passwordResetToken: string | null
    passwordExpiresAt: Date | null
    passwordResetAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passwordResetToken?: boolean
    passwordExpiresAt?: boolean
    passwordResetAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passwordResetToken?: boolean
    passwordExpiresAt?: boolean
    passwordResetAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passwordResetToken?: boolean
    passwordExpiresAt?: boolean
    passwordResetAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passwordResetToken?: boolean
    passwordExpiresAt?: boolean
    passwordResetAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "status" | "roleId" | "createdAt" | "updatedAt" | "passwordResetToken" | "passwordExpiresAt" | "passwordResetAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      status: $Enums.UserStatus
      roleId: string
      createdAt: Date
      updatedAt: Date
      passwordResetToken: string | null
      passwordExpiresAt: Date | null
      passwordResetAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordExpiresAt: FieldRef<"User", 'DateTime'>
    readonly passwordResetAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    resource: string | null
    accessLevel: $Enums.AccessLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    resource: string | null
    accessLevel: $Enums.AccessLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    roleId: number
    resource: number
    accessLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    resource?: true
    accessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    resource?: true
    accessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    resource?: true
    accessLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    roleId: string
    resource: string
    accessLevel: $Enums.AccessLevel
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resource?: boolean
    accessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resource?: boolean
    accessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resource?: boolean
    accessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    resource?: boolean
    accessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "resource" | "accessLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      resource: string
      accessLevel: $Enums.AccessLevel
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly roleId: FieldRef<"Permission", 'String'>
    readonly resource: FieldRef<"Permission", 'String'>
    readonly accessLevel: FieldRef<"Permission", 'AccessLevel'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Complex
   */

  export type AggregateComplex = {
    _count: ComplexCountAggregateOutputType | null
    _avg: ComplexAvgAggregateOutputType | null
    _sum: ComplexSumAggregateOutputType | null
    _min: ComplexMinAggregateOutputType | null
    _max: ComplexMaxAggregateOutputType | null
  }

  export type ComplexAvgAggregateOutputType = {
    totalBuildings: number | null
  }

  export type ComplexSumAggregateOutputType = {
    totalBuildings: number | null
  }

  export type ComplexMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    totalBuildings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplexMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    totalBuildings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplexCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    address: number
    city: number
    state: number
    zip: number
    status: number
    condition: number
    criticality: number
    totalBuildings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplexAvgAggregateInputType = {
    totalBuildings?: true
  }

  export type ComplexSumAggregateInputType = {
    totalBuildings?: true
  }

  export type ComplexMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    status?: true
    condition?: true
    criticality?: true
    totalBuildings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplexMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    status?: true
    condition?: true
    criticality?: true
    totalBuildings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplexCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    status?: true
    condition?: true
    criticality?: true
    totalBuildings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complex to aggregate.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complexes to fetch.
     */
    orderBy?: ComplexOrderByWithRelationInput | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complexes
    **/
    _count?: true | ComplexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplexMaxAggregateInputType
  }

  export type GetComplexAggregateType<T extends ComplexAggregateArgs> = {
        [P in keyof T & keyof AggregateComplex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplex[P]>
      : GetScalarType<T[P], AggregateComplex[P]>
  }




  export type ComplexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplexWhereInput
    orderBy?: ComplexOrderByWithAggregationInput | ComplexOrderByWithAggregationInput[]
    by: ComplexScalarFieldEnum[] | ComplexScalarFieldEnum
    having?: ComplexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplexCountAggregateInputType | true
    _avg?: ComplexAvgAggregateInputType
    _sum?: ComplexSumAggregateInputType
    _min?: ComplexMinAggregateInputType
    _max?: ComplexMaxAggregateInputType
  }

  export type ComplexGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    status: $Enums.ServiceStatus
    condition: $Enums.Condition
    criticality: $Enums.Criticality
    totalBuildings: number
    createdAt: Date
    updatedAt: Date
    _count: ComplexCountAggregateOutputType | null
    _avg: ComplexAvgAggregateOutputType | null
    _sum: ComplexSumAggregateOutputType | null
    _min: ComplexMinAggregateOutputType | null
    _max: ComplexMaxAggregateOutputType | null
  }

  type GetComplexGroupByPayload<T extends ComplexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplexGroupByOutputType[P]>
            : GetScalarType<T[P], ComplexGroupByOutputType[P]>
        }
      >
    >


  export type ComplexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    totalBuildings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buildings?: boolean | Complex$buildingsArgs<ExtArgs>
    photos?: boolean | Complex$photosArgs<ExtArgs>
    _count?: boolean | ComplexCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complex"]>

  export type ComplexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    totalBuildings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["complex"]>

  export type ComplexSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    totalBuildings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["complex"]>

  export type ComplexSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    totalBuildings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "address" | "city" | "state" | "zip" | "status" | "condition" | "criticality" | "totalBuildings" | "createdAt" | "updatedAt", ExtArgs["result"]["complex"]>
  export type ComplexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | Complex$buildingsArgs<ExtArgs>
    photos?: boolean | Complex$photosArgs<ExtArgs>
    _count?: boolean | ComplexCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComplexIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComplexIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComplexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complex"
    objects: {
      buildings: Prisma.$BuildingPayload<ExtArgs>[]
      photos: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      address: string | null
      city: string | null
      state: string | null
      zip: string | null
      status: $Enums.ServiceStatus
      condition: $Enums.Condition
      criticality: $Enums.Criticality
      totalBuildings: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["complex"]>
    composites: {}
  }

  type ComplexGetPayload<S extends boolean | null | undefined | ComplexDefaultArgs> = $Result.GetResult<Prisma.$ComplexPayload, S>

  type ComplexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplexCountAggregateInputType | true
    }

  export interface ComplexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complex'], meta: { name: 'Complex' } }
    /**
     * Find zero or one Complex that matches the filter.
     * @param {ComplexFindUniqueArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplexFindUniqueArgs>(args: SelectSubset<T, ComplexFindUniqueArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplexFindUniqueOrThrowArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplexFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindFirstArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplexFindFirstArgs>(args?: SelectSubset<T, ComplexFindFirstArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindFirstOrThrowArgs} args - Arguments to find a Complex
     * @example
     * // Get one Complex
     * const complex = await prisma.complex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplexFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplexFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complexes
     * const complexes = await prisma.complex.findMany()
     * 
     * // Get first 10 Complexes
     * const complexes = await prisma.complex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complexWithIdOnly = await prisma.complex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplexFindManyArgs>(args?: SelectSubset<T, ComplexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complex.
     * @param {ComplexCreateArgs} args - Arguments to create a Complex.
     * @example
     * // Create one Complex
     * const Complex = await prisma.complex.create({
     *   data: {
     *     // ... data to create a Complex
     *   }
     * })
     * 
     */
    create<T extends ComplexCreateArgs>(args: SelectSubset<T, ComplexCreateArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complexes.
     * @param {ComplexCreateManyArgs} args - Arguments to create many Complexes.
     * @example
     * // Create many Complexes
     * const complex = await prisma.complex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplexCreateManyArgs>(args?: SelectSubset<T, ComplexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complexes and returns the data saved in the database.
     * @param {ComplexCreateManyAndReturnArgs} args - Arguments to create many Complexes.
     * @example
     * // Create many Complexes
     * const complex = await prisma.complex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complexes and only return the `id`
     * const complexWithIdOnly = await prisma.complex.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplexCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complex.
     * @param {ComplexDeleteArgs} args - Arguments to delete one Complex.
     * @example
     * // Delete one Complex
     * const Complex = await prisma.complex.delete({
     *   where: {
     *     // ... filter to delete one Complex
     *   }
     * })
     * 
     */
    delete<T extends ComplexDeleteArgs>(args: SelectSubset<T, ComplexDeleteArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complex.
     * @param {ComplexUpdateArgs} args - Arguments to update one Complex.
     * @example
     * // Update one Complex
     * const complex = await prisma.complex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplexUpdateArgs>(args: SelectSubset<T, ComplexUpdateArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complexes.
     * @param {ComplexDeleteManyArgs} args - Arguments to filter Complexes to delete.
     * @example
     * // Delete a few Complexes
     * const { count } = await prisma.complex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplexDeleteManyArgs>(args?: SelectSubset<T, ComplexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complexes
     * const complex = await prisma.complex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplexUpdateManyArgs>(args: SelectSubset<T, ComplexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complexes and returns the data updated in the database.
     * @param {ComplexUpdateManyAndReturnArgs} args - Arguments to update many Complexes.
     * @example
     * // Update many Complexes
     * const complex = await prisma.complex.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complexes and only return the `id`
     * const complexWithIdOnly = await prisma.complex.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComplexUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplexUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complex.
     * @param {ComplexUpsertArgs} args - Arguments to update or create a Complex.
     * @example
     * // Update or create a Complex
     * const complex = await prisma.complex.upsert({
     *   create: {
     *     // ... data to create a Complex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complex we want to update
     *   }
     * })
     */
    upsert<T extends ComplexUpsertArgs>(args: SelectSubset<T, ComplexUpsertArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexCountArgs} args - Arguments to filter Complexes to count.
     * @example
     * // Count the number of Complexes
     * const count = await prisma.complex.count({
     *   where: {
     *     // ... the filter for the Complexes we want to count
     *   }
     * })
    **/
    count<T extends ComplexCountArgs>(
      args?: Subset<T, ComplexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplexAggregateArgs>(args: Subset<T, ComplexAggregateArgs>): Prisma.PrismaPromise<GetComplexAggregateType<T>>

    /**
     * Group by Complex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexGroupByArgs} args - Group by arguments.
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
      T extends ComplexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplexGroupByArgs['orderBy'] }
        : { orderBy?: ComplexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complex model
   */
  readonly fields: ComplexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buildings<T extends Complex$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, Complex$buildingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Complex$photosArgs<ExtArgs> = {}>(args?: Subset<T, Complex$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Complex model
   */
  interface ComplexFieldRefs {
    readonly id: FieldRef<"Complex", 'String'>
    readonly code: FieldRef<"Complex", 'String'>
    readonly name: FieldRef<"Complex", 'String'>
    readonly description: FieldRef<"Complex", 'String'>
    readonly address: FieldRef<"Complex", 'String'>
    readonly city: FieldRef<"Complex", 'String'>
    readonly state: FieldRef<"Complex", 'String'>
    readonly zip: FieldRef<"Complex", 'String'>
    readonly status: FieldRef<"Complex", 'ServiceStatus'>
    readonly condition: FieldRef<"Complex", 'Condition'>
    readonly criticality: FieldRef<"Complex", 'Criticality'>
    readonly totalBuildings: FieldRef<"Complex", 'Int'>
    readonly createdAt: FieldRef<"Complex", 'DateTime'>
    readonly updatedAt: FieldRef<"Complex", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Complex findUnique
   */
  export type ComplexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex findUniqueOrThrow
   */
  export type ComplexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex findFirst
   */
  export type ComplexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complexes to fetch.
     */
    orderBy?: ComplexOrderByWithRelationInput | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complexes.
     */
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex findFirstOrThrow
   */
  export type ComplexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complex to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complexes to fetch.
     */
    orderBy?: ComplexOrderByWithRelationInput | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complexes.
     */
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex findMany
   */
  export type ComplexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter, which Complexes to fetch.
     */
    where?: ComplexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complexes to fetch.
     */
    orderBy?: ComplexOrderByWithRelationInput | ComplexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complexes.
     */
    cursor?: ComplexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complexes.
     */
    skip?: number
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * Complex create
   */
  export type ComplexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The data needed to create a Complex.
     */
    data: XOR<ComplexCreateInput, ComplexUncheckedCreateInput>
  }

  /**
   * Complex createMany
   */
  export type ComplexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complexes.
     */
    data: ComplexCreateManyInput | ComplexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complex createManyAndReturn
   */
  export type ComplexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * The data used to create many Complexes.
     */
    data: ComplexCreateManyInput | ComplexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complex update
   */
  export type ComplexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The data needed to update a Complex.
     */
    data: XOR<ComplexUpdateInput, ComplexUncheckedUpdateInput>
    /**
     * Choose, which Complex to update.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex updateMany
   */
  export type ComplexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complexes.
     */
    data: XOR<ComplexUpdateManyMutationInput, ComplexUncheckedUpdateManyInput>
    /**
     * Filter which Complexes to update
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to update.
     */
    limit?: number
  }

  /**
   * Complex updateManyAndReturn
   */
  export type ComplexUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * The data used to update Complexes.
     */
    data: XOR<ComplexUpdateManyMutationInput, ComplexUncheckedUpdateManyInput>
    /**
     * Filter which Complexes to update
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to update.
     */
    limit?: number
  }

  /**
   * Complex upsert
   */
  export type ComplexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * The filter to search for the Complex to update in case it exists.
     */
    where: ComplexWhereUniqueInput
    /**
     * In case the Complex found by the `where` argument doesn't exist, create a new Complex with this data.
     */
    create: XOR<ComplexCreateInput, ComplexUncheckedCreateInput>
    /**
     * In case the Complex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplexUpdateInput, ComplexUncheckedUpdateInput>
  }

  /**
   * Complex delete
   */
  export type ComplexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    /**
     * Filter which Complex to delete.
     */
    where: ComplexWhereUniqueInput
  }

  /**
   * Complex deleteMany
   */
  export type ComplexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complexes to delete
     */
    where?: ComplexWhereInput
    /**
     * Limit how many Complexes to delete.
     */
    limit?: number
  }

  /**
   * Complex.buildings
   */
  export type Complex$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    cursor?: BuildingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Complex.photos
   */
  export type Complex$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Complex without action
   */
  export type ComplexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
  }


  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    totalFloors: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BuildingSumAggregateOutputType = {
    totalFloors: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    mainUse: $Enums.MainUse | null
    totalFloors: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    complexId: string | null
    calenderEntityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    mainUse: $Enums.MainUse | null
    totalFloors: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    complexId: string | null
    calenderEntityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    name: number
    code: number
    mainUse: number
    totalFloors: number
    address: number
    latitude: number
    longitude: number
    status: number
    condition: number
    criticality: number
    complexId: number
    calenderEntityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    totalFloors?: true
    latitude?: true
    longitude?: true
  }

  export type BuildingSumAggregateInputType = {
    totalFloors?: true
    latitude?: true
    longitude?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mainUse?: true
    totalFloors?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    condition?: true
    criticality?: true
    complexId?: true
    calenderEntityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mainUse?: true
    totalFloors?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    condition?: true
    criticality?: true
    complexId?: true
    calenderEntityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mainUse?: true
    totalFloors?: true
    address?: true
    latitude?: true
    longitude?: true
    status?: true
    condition?: true
    criticality?: true
    complexId?: true
    calenderEntityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: string
    name: string
    code: string
    mainUse: $Enums.MainUse
    totalFloors: number
    address: string | null
    latitude: number | null
    longitude: number | null
    status: $Enums.ServiceStatus
    condition: $Enums.Condition
    criticality: $Enums.Criticality
    complexId: string
    calenderEntityId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mainUse?: boolean
    totalFloors?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    complexId?: boolean
    calenderEntityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
    photos?: boolean | Building$photosArgs<ExtArgs>
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mainUse?: boolean
    totalFloors?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    complexId?: boolean
    calenderEntityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mainUse?: boolean
    totalFloors?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    complexId?: boolean
    calenderEntityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    mainUse?: boolean
    totalFloors?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    complexId?: boolean
    calenderEntityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "mainUse" | "totalFloors" | "address" | "latitude" | "longitude" | "status" | "condition" | "criticality" | "complexId" | "calenderEntityId" | "createdAt" | "updatedAt", ExtArgs["result"]["building"]>
  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
    photos?: boolean | Building$photosArgs<ExtArgs>
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
  }
  export type BuildingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complex?: boolean | ComplexDefaultArgs<ExtArgs>
    calenderEntity?: boolean | Building$calenderEntityArgs<ExtArgs>
  }

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      complex: Prisma.$ComplexPayload<ExtArgs>
      calenderEntity: Prisma.$CalenderEntityPayload<ExtArgs> | null
      photos: Prisma.$FilePayload<ExtArgs>[]
      floors: Prisma.$FloorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      mainUse: $Enums.MainUse
      totalFloors: number
      address: string | null
      latitude: number | null
      longitude: number | null
      status: $Enums.ServiceStatus
      condition: $Enums.Condition
      criticality: $Enums.Criticality
      complexId: string
      calenderEntityId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {BuildingUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildingUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
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
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complex<T extends ComplexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComplexDefaultArgs<ExtArgs>>): Prisma__ComplexClient<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    calenderEntity<T extends Building$calenderEntityArgs<ExtArgs> = {}>(args?: Subset<T, Building$calenderEntityArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photos<T extends Building$photosArgs<ExtArgs> = {}>(args?: Subset<T, Building$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    floors<T extends Building$floorsArgs<ExtArgs> = {}>(args?: Subset<T, Building$floorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Building model
   */
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'String'>
    readonly name: FieldRef<"Building", 'String'>
    readonly code: FieldRef<"Building", 'String'>
    readonly mainUse: FieldRef<"Building", 'MainUse'>
    readonly totalFloors: FieldRef<"Building", 'Int'>
    readonly address: FieldRef<"Building", 'String'>
    readonly latitude: FieldRef<"Building", 'Float'>
    readonly longitude: FieldRef<"Building", 'Float'>
    readonly status: FieldRef<"Building", 'ServiceStatus'>
    readonly condition: FieldRef<"Building", 'Condition'>
    readonly criticality: FieldRef<"Building", 'Criticality'>
    readonly complexId: FieldRef<"Building", 'String'>
    readonly calenderEntityId: FieldRef<"Building", 'String'>
    readonly createdAt: FieldRef<"Building", 'DateTime'>
    readonly updatedAt: FieldRef<"Building", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building updateManyAndReturn
   */
  export type BuildingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Building.calenderEntity
   */
  export type Building$calenderEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    where?: CalenderEntityWhereInput
  }

  /**
   * Building.photos
   */
  export type Building$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Building.floors
   */
  export type Building$floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    cursor?: FloorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
  }


  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    level: number | null
    grossArea: number | null
  }

  export type FloorSumAggregateOutputType = {
    level: number | null
    grossArea: number | null
  }

  export type FloorMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    level: number | null
    grossArea: number | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    buildingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    level: number | null
    grossArea: number | null
    status: $Enums.ServiceStatus | null
    condition: $Enums.Condition | null
    criticality: $Enums.Criticality | null
    buildingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FloorCountAggregateOutputType = {
    id: number
    code: number
    name: number
    level: number
    grossArea: number
    status: number
    condition: number
    criticality: number
    buildingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    level?: true
    grossArea?: true
  }

  export type FloorSumAggregateInputType = {
    level?: true
    grossArea?: true
  }

  export type FloorMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    grossArea?: true
    status?: true
    condition?: true
    criticality?: true
    buildingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    grossArea?: true
    status?: true
    condition?: true
    criticality?: true
    buildingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FloorCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    grossArea?: true
    status?: true
    condition?: true
    criticality?: true
    buildingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    id: string
    code: string
    name: string
    level: number
    grossArea: number
    status: $Enums.ServiceStatus
    condition: $Enums.Condition
    criticality: $Enums.Criticality
    buildingId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    grossArea?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    buildingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    building?: boolean | Floor$buildingArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    units?: boolean | Floor$unitsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    grossArea?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    buildingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    building?: boolean | Floor$buildingArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    grossArea?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    buildingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    building?: boolean | Floor$buildingArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    grossArea?: boolean
    status?: boolean
    condition?: boolean
    criticality?: boolean
    buildingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "level" | "grossArea" | "status" | "condition" | "criticality" | "buildingId" | "createdAt" | "updatedAt", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | Floor$buildingArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    units?: boolean | Floor$unitsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | Floor$buildingArgs<ExtArgs>
  }
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | Floor$buildingArgs<ExtArgs>
  }

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs> | null
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      units: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      level: number
      grossArea: number
      status: $Enums.ServiceStatus
      condition: $Enums.Condition
      criticality: $Enums.Criticality
      buildingId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floorWithIdOnly = await prisma.floor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
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
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends Floor$buildingArgs<ExtArgs> = {}>(args?: Subset<T, Floor$buildingArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Floor$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    units<T extends Floor$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly id: FieldRef<"Floor", 'String'>
    readonly code: FieldRef<"Floor", 'String'>
    readonly name: FieldRef<"Floor", 'String'>
    readonly level: FieldRef<"Floor", 'Int'>
    readonly grossArea: FieldRef<"Floor", 'Float'>
    readonly status: FieldRef<"Floor", 'ServiceStatus'>
    readonly condition: FieldRef<"Floor", 'Condition'>
    readonly criticality: FieldRef<"Floor", 'Criticality'>
    readonly buildingId: FieldRef<"Floor", 'String'>
    readonly createdAt: FieldRef<"Floor", 'DateTime'>
    readonly updatedAt: FieldRef<"Floor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.building
   */
  export type Floor$buildingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
  }

  /**
   * Floor.rooms
   */
  export type Floor$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Floor.units
   */
  export type Floor$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    floorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    floorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    code: number
    name: number
    floorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    floorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    floorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    floorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    code: string
    name: string
    floorId: string
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    floorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    rooms?: boolean | Unit$roomsArgs<ExtArgs>
    photos?: boolean | Unit$photosArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    floorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    floorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    floorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "floorId" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    rooms?: boolean | Unit$roomsArgs<ExtArgs>
    photos?: boolean | Unit$photosArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      photos: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      floorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Unit$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Unit$photosArgs<ExtArgs> = {}>(args?: Subset<T, Unit$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly code: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly floorId: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.rooms
   */
  export type Unit$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Unit.photos
   */
  export type Unit$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    use: $Enums.RoomUse | null
    floorId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    use: $Enums.RoomUse | null
    floorId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    code: number
    use: number
    floorId: number
    unitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    use?: true
    floorId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    use?: true
    floorId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    use?: true
    floorId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    code: string
    use: $Enums.RoomUse
    floorId: string
    unitId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    use?: boolean
    floorId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
    photos?: boolean | Room$photosArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    use?: boolean
    floorId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    use?: boolean
    floorId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    use?: boolean
    floorId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "use" | "floorId" | "unitId" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
    photos?: boolean | Room$photosArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    unit?: boolean | Room$unitArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      photos: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      use: $Enums.RoomUse
      floorId: string
      unitId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Room$unitArgs<ExtArgs> = {}>(args?: Subset<T, Room$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photos<T extends Room$photosArgs<ExtArgs> = {}>(args?: Subset<T, Room$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly code: FieldRef<"Room", 'String'>
    readonly use: FieldRef<"Room", 'RoomUse'>
    readonly floorId: FieldRef<"Room", 'String'>
    readonly unitId: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.unit
   */
  export type Room$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Room.photos
   */
  export type Room$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    url: string
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    rooms?: boolean | File$roomsArgs<ExtArgs>
    units?: boolean | File$unitsArgs<ExtArgs>
    buildings?: boolean | File$buildingsArgs<ExtArgs>
    complexes?: boolean | File$complexesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | File$roomsArgs<ExtArgs>
    units?: boolean | File$unitsArgs<ExtArgs>
    buildings?: boolean | File$buildingsArgs<ExtArgs>
    complexes?: boolean | File$complexesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      units: Prisma.$UnitPayload<ExtArgs>[]
      buildings: Prisma.$BuildingPayload<ExtArgs>[]
      complexes: Prisma.$ComplexPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends File$roomsArgs<ExtArgs> = {}>(args?: Subset<T, File$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    units<T extends File$unitsArgs<ExtArgs> = {}>(args?: Subset<T, File$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buildings<T extends File$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, File$buildingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    complexes<T extends File$complexesArgs<ExtArgs> = {}>(args?: Subset<T, File$complexesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly url: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.rooms
   */
  export type File$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * File.units
   */
  export type File$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * File.buildings
   */
  export type File$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    cursor?: BuildingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * File.complexes
   */
  export type File$complexesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complex
     */
    select?: ComplexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complex
     */
    omit?: ComplexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexInclude<ExtArgs> | null
    where?: ComplexWhereInput
    orderBy?: ComplexOrderByWithRelationInput | ComplexOrderByWithRelationInput[]
    cursor?: ComplexWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplexScalarFieldEnum | ComplexScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model CalenderEntity
   */

  export type AggregateCalenderEntity = {
    _count: CalenderEntityCountAggregateOutputType | null
    _min: CalenderEntityMinAggregateOutputType | null
    _max: CalenderEntityMaxAggregateOutputType | null
  }

  export type CalenderEntityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalenderEntityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalenderEntityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalenderEntityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalenderEntityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalenderEntityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalenderEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalenderEntity to aggregate.
     */
    where?: CalenderEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalenderEntities to fetch.
     */
    orderBy?: CalenderEntityOrderByWithRelationInput | CalenderEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalenderEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalenderEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalenderEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalenderEntities
    **/
    _count?: true | CalenderEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalenderEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalenderEntityMaxAggregateInputType
  }

  export type GetCalenderEntityAggregateType<T extends CalenderEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateCalenderEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalenderEntity[P]>
      : GetScalarType<T[P], AggregateCalenderEntity[P]>
  }




  export type CalenderEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalenderEntityWhereInput
    orderBy?: CalenderEntityOrderByWithAggregationInput | CalenderEntityOrderByWithAggregationInput[]
    by: CalenderEntityScalarFieldEnum[] | CalenderEntityScalarFieldEnum
    having?: CalenderEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalenderEntityCountAggregateInputType | true
    _min?: CalenderEntityMinAggregateInputType
    _max?: CalenderEntityMaxAggregateInputType
  }

  export type CalenderEntityGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CalenderEntityCountAggregateOutputType | null
    _min: CalenderEntityMinAggregateOutputType | null
    _max: CalenderEntityMaxAggregateOutputType | null
  }

  type GetCalenderEntityGroupByPayload<T extends CalenderEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalenderEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalenderEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalenderEntityGroupByOutputType[P]>
            : GetScalarType<T[P], CalenderEntityGroupByOutputType[P]>
        }
      >
    >


  export type CalenderEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buildings?: boolean | CalenderEntity$buildingsArgs<ExtArgs>
    _count?: boolean | CalenderEntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calenderEntity"]>

  export type CalenderEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calenderEntity"]>

  export type CalenderEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calenderEntity"]>

  export type CalenderEntitySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalenderEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["calenderEntity"]>
  export type CalenderEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | CalenderEntity$buildingsArgs<ExtArgs>
    _count?: boolean | CalenderEntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalenderEntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CalenderEntityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CalenderEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalenderEntity"
    objects: {
      buildings: Prisma.$BuildingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calenderEntity"]>
    composites: {}
  }

  type CalenderEntityGetPayload<S extends boolean | null | undefined | CalenderEntityDefaultArgs> = $Result.GetResult<Prisma.$CalenderEntityPayload, S>

  type CalenderEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalenderEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalenderEntityCountAggregateInputType | true
    }

  export interface CalenderEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalenderEntity'], meta: { name: 'CalenderEntity' } }
    /**
     * Find zero or one CalenderEntity that matches the filter.
     * @param {CalenderEntityFindUniqueArgs} args - Arguments to find a CalenderEntity
     * @example
     * // Get one CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalenderEntityFindUniqueArgs>(args: SelectSubset<T, CalenderEntityFindUniqueArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalenderEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalenderEntityFindUniqueOrThrowArgs} args - Arguments to find a CalenderEntity
     * @example
     * // Get one CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalenderEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, CalenderEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalenderEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityFindFirstArgs} args - Arguments to find a CalenderEntity
     * @example
     * // Get one CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalenderEntityFindFirstArgs>(args?: SelectSubset<T, CalenderEntityFindFirstArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalenderEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityFindFirstOrThrowArgs} args - Arguments to find a CalenderEntity
     * @example
     * // Get one CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalenderEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, CalenderEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalenderEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalenderEntities
     * const calenderEntities = await prisma.calenderEntity.findMany()
     * 
     * // Get first 10 CalenderEntities
     * const calenderEntities = await prisma.calenderEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calenderEntityWithIdOnly = await prisma.calenderEntity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalenderEntityFindManyArgs>(args?: SelectSubset<T, CalenderEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalenderEntity.
     * @param {CalenderEntityCreateArgs} args - Arguments to create a CalenderEntity.
     * @example
     * // Create one CalenderEntity
     * const CalenderEntity = await prisma.calenderEntity.create({
     *   data: {
     *     // ... data to create a CalenderEntity
     *   }
     * })
     * 
     */
    create<T extends CalenderEntityCreateArgs>(args: SelectSubset<T, CalenderEntityCreateArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalenderEntities.
     * @param {CalenderEntityCreateManyArgs} args - Arguments to create many CalenderEntities.
     * @example
     * // Create many CalenderEntities
     * const calenderEntity = await prisma.calenderEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalenderEntityCreateManyArgs>(args?: SelectSubset<T, CalenderEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalenderEntities and returns the data saved in the database.
     * @param {CalenderEntityCreateManyAndReturnArgs} args - Arguments to create many CalenderEntities.
     * @example
     * // Create many CalenderEntities
     * const calenderEntity = await prisma.calenderEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalenderEntities and only return the `id`
     * const calenderEntityWithIdOnly = await prisma.calenderEntity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalenderEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, CalenderEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalenderEntity.
     * @param {CalenderEntityDeleteArgs} args - Arguments to delete one CalenderEntity.
     * @example
     * // Delete one CalenderEntity
     * const CalenderEntity = await prisma.calenderEntity.delete({
     *   where: {
     *     // ... filter to delete one CalenderEntity
     *   }
     * })
     * 
     */
    delete<T extends CalenderEntityDeleteArgs>(args: SelectSubset<T, CalenderEntityDeleteArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalenderEntity.
     * @param {CalenderEntityUpdateArgs} args - Arguments to update one CalenderEntity.
     * @example
     * // Update one CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalenderEntityUpdateArgs>(args: SelectSubset<T, CalenderEntityUpdateArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalenderEntities.
     * @param {CalenderEntityDeleteManyArgs} args - Arguments to filter CalenderEntities to delete.
     * @example
     * // Delete a few CalenderEntities
     * const { count } = await prisma.calenderEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalenderEntityDeleteManyArgs>(args?: SelectSubset<T, CalenderEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalenderEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalenderEntities
     * const calenderEntity = await prisma.calenderEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalenderEntityUpdateManyArgs>(args: SelectSubset<T, CalenderEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalenderEntities and returns the data updated in the database.
     * @param {CalenderEntityUpdateManyAndReturnArgs} args - Arguments to update many CalenderEntities.
     * @example
     * // Update many CalenderEntities
     * const calenderEntity = await prisma.calenderEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalenderEntities and only return the `id`
     * const calenderEntityWithIdOnly = await prisma.calenderEntity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalenderEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, CalenderEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalenderEntity.
     * @param {CalenderEntityUpsertArgs} args - Arguments to update or create a CalenderEntity.
     * @example
     * // Update or create a CalenderEntity
     * const calenderEntity = await prisma.calenderEntity.upsert({
     *   create: {
     *     // ... data to create a CalenderEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalenderEntity we want to update
     *   }
     * })
     */
    upsert<T extends CalenderEntityUpsertArgs>(args: SelectSubset<T, CalenderEntityUpsertArgs<ExtArgs>>): Prisma__CalenderEntityClient<$Result.GetResult<Prisma.$CalenderEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalenderEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityCountArgs} args - Arguments to filter CalenderEntities to count.
     * @example
     * // Count the number of CalenderEntities
     * const count = await prisma.calenderEntity.count({
     *   where: {
     *     // ... the filter for the CalenderEntities we want to count
     *   }
     * })
    **/
    count<T extends CalenderEntityCountArgs>(
      args?: Subset<T, CalenderEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalenderEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalenderEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalenderEntityAggregateArgs>(args: Subset<T, CalenderEntityAggregateArgs>): Prisma.PrismaPromise<GetCalenderEntityAggregateType<T>>

    /**
     * Group by CalenderEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalenderEntityGroupByArgs} args - Group by arguments.
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
      T extends CalenderEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalenderEntityGroupByArgs['orderBy'] }
        : { orderBy?: CalenderEntityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalenderEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalenderEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalenderEntity model
   */
  readonly fields: CalenderEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalenderEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalenderEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buildings<T extends CalenderEntity$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, CalenderEntity$buildingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalenderEntity model
   */
  interface CalenderEntityFieldRefs {
    readonly id: FieldRef<"CalenderEntity", 'String'>
    readonly name: FieldRef<"CalenderEntity", 'String'>
    readonly createdAt: FieldRef<"CalenderEntity", 'DateTime'>
    readonly updatedAt: FieldRef<"CalenderEntity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalenderEntity findUnique
   */
  export type CalenderEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter, which CalenderEntity to fetch.
     */
    where: CalenderEntityWhereUniqueInput
  }

  /**
   * CalenderEntity findUniqueOrThrow
   */
  export type CalenderEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter, which CalenderEntity to fetch.
     */
    where: CalenderEntityWhereUniqueInput
  }

  /**
   * CalenderEntity findFirst
   */
  export type CalenderEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter, which CalenderEntity to fetch.
     */
    where?: CalenderEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalenderEntities to fetch.
     */
    orderBy?: CalenderEntityOrderByWithRelationInput | CalenderEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalenderEntities.
     */
    cursor?: CalenderEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalenderEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalenderEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalenderEntities.
     */
    distinct?: CalenderEntityScalarFieldEnum | CalenderEntityScalarFieldEnum[]
  }

  /**
   * CalenderEntity findFirstOrThrow
   */
  export type CalenderEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter, which CalenderEntity to fetch.
     */
    where?: CalenderEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalenderEntities to fetch.
     */
    orderBy?: CalenderEntityOrderByWithRelationInput | CalenderEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalenderEntities.
     */
    cursor?: CalenderEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalenderEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalenderEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalenderEntities.
     */
    distinct?: CalenderEntityScalarFieldEnum | CalenderEntityScalarFieldEnum[]
  }

  /**
   * CalenderEntity findMany
   */
  export type CalenderEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter, which CalenderEntities to fetch.
     */
    where?: CalenderEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalenderEntities to fetch.
     */
    orderBy?: CalenderEntityOrderByWithRelationInput | CalenderEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalenderEntities.
     */
    cursor?: CalenderEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalenderEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalenderEntities.
     */
    skip?: number
    distinct?: CalenderEntityScalarFieldEnum | CalenderEntityScalarFieldEnum[]
  }

  /**
   * CalenderEntity create
   */
  export type CalenderEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a CalenderEntity.
     */
    data: XOR<CalenderEntityCreateInput, CalenderEntityUncheckedCreateInput>
  }

  /**
   * CalenderEntity createMany
   */
  export type CalenderEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalenderEntities.
     */
    data: CalenderEntityCreateManyInput | CalenderEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalenderEntity createManyAndReturn
   */
  export type CalenderEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * The data used to create many CalenderEntities.
     */
    data: CalenderEntityCreateManyInput | CalenderEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalenderEntity update
   */
  export type CalenderEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a CalenderEntity.
     */
    data: XOR<CalenderEntityUpdateInput, CalenderEntityUncheckedUpdateInput>
    /**
     * Choose, which CalenderEntity to update.
     */
    where: CalenderEntityWhereUniqueInput
  }

  /**
   * CalenderEntity updateMany
   */
  export type CalenderEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalenderEntities.
     */
    data: XOR<CalenderEntityUpdateManyMutationInput, CalenderEntityUncheckedUpdateManyInput>
    /**
     * Filter which CalenderEntities to update
     */
    where?: CalenderEntityWhereInput
    /**
     * Limit how many CalenderEntities to update.
     */
    limit?: number
  }

  /**
   * CalenderEntity updateManyAndReturn
   */
  export type CalenderEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * The data used to update CalenderEntities.
     */
    data: XOR<CalenderEntityUpdateManyMutationInput, CalenderEntityUncheckedUpdateManyInput>
    /**
     * Filter which CalenderEntities to update
     */
    where?: CalenderEntityWhereInput
    /**
     * Limit how many CalenderEntities to update.
     */
    limit?: number
  }

  /**
   * CalenderEntity upsert
   */
  export type CalenderEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the CalenderEntity to update in case it exists.
     */
    where: CalenderEntityWhereUniqueInput
    /**
     * In case the CalenderEntity found by the `where` argument doesn't exist, create a new CalenderEntity with this data.
     */
    create: XOR<CalenderEntityCreateInput, CalenderEntityUncheckedCreateInput>
    /**
     * In case the CalenderEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalenderEntityUpdateInput, CalenderEntityUncheckedUpdateInput>
  }

  /**
   * CalenderEntity delete
   */
  export type CalenderEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
    /**
     * Filter which CalenderEntity to delete.
     */
    where: CalenderEntityWhereUniqueInput
  }

  /**
   * CalenderEntity deleteMany
   */
  export type CalenderEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalenderEntities to delete
     */
    where?: CalenderEntityWhereInput
    /**
     * Limit how many CalenderEntities to delete.
     */
    limit?: number
  }

  /**
   * CalenderEntity.buildings
   */
  export type CalenderEntity$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    cursor?: BuildingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * CalenderEntity without action
   */
  export type CalenderEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalenderEntity
     */
    select?: CalenderEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalenderEntity
     */
    omit?: CalenderEntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalenderEntityInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    status: 'status',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    passwordResetToken: 'passwordResetToken',
    passwordExpiresAt: 'passwordExpiresAt',
    passwordResetAt: 'passwordResetAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    resource: 'resource',
    accessLevel: 'accessLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const ComplexScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    status: 'status',
    condition: 'condition',
    criticality: 'criticality',
    totalBuildings: 'totalBuildings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplexScalarFieldEnum = (typeof ComplexScalarFieldEnum)[keyof typeof ComplexScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    mainUse: 'mainUse',
    totalFloors: 'totalFloors',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    condition: 'condition',
    criticality: 'criticality',
    complexId: 'complexId',
    calenderEntityId: 'calenderEntityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const FloorScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    level: 'level',
    grossArea: 'grossArea',
    status: 'status',
    condition: 'condition',
    criticality: 'criticality',
    buildingId: 'buildingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    floorId: 'floorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    use: 'use',
    floorId: 'floorId',
    unitId: 'unitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const CalenderEntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalenderEntityScalarFieldEnum = (typeof CalenderEntityScalarFieldEnum)[keyof typeof CalenderEntityScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'AccessLevel'
   */
  export type EnumAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessLevel'>
    


  /**
   * Reference to a field of type 'AccessLevel[]'
   */
  export type ListEnumAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessLevel[]'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'Condition'
   */
  export type EnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition'>
    


  /**
   * Reference to a field of type 'Condition[]'
   */
  export type ListEnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition[]'>
    


  /**
   * Reference to a field of type 'Criticality'
   */
  export type EnumCriticalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Criticality'>
    


  /**
   * Reference to a field of type 'Criticality[]'
   */
  export type ListEnumCriticalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Criticality[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MainUse'
   */
  export type EnumMainUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainUse'>
    


  /**
   * Reference to a field of type 'MainUse[]'
   */
  export type ListEnumMainUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainUse[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoomUse'
   */
  export type EnumRoomUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomUse'>
    


  /**
   * Reference to a field of type 'RoomUse[]'
   */
  export type ListEnumRoomUseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomUse[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetAt?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshTokens?: RefreshTokenListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordExpiresAt?: SortOrderInput | SortOrder
    passwordResetAt?: SortOrderInput | SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetAt?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshTokens?: RefreshTokenListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordExpiresAt?: SortOrderInput | SortOrder
    passwordResetAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    roleId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordResetAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    permissions?: PermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: PermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    permissions?: PermissionListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    roleId?: StringFilter<"Permission"> | string
    resource?: StringFilter<"Permission"> | string
    accessLevel?: EnumAccessLevelFilter<"Permission"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resource?: SortOrder
    accessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_resource?: PermissionRoleIdResourceCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    roleId?: StringFilter<"Permission"> | string
    resource?: StringFilter<"Permission"> | string
    accessLevel?: EnumAccessLevelFilter<"Permission"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "roleId_resource">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resource?: SortOrder
    accessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    roleId?: StringWithAggregatesFilter<"Permission"> | string
    resource?: StringWithAggregatesFilter<"Permission"> | string
    accessLevel?: EnumAccessLevelWithAggregatesFilter<"Permission"> | $Enums.AccessLevel
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type ComplexWhereInput = {
    AND?: ComplexWhereInput | ComplexWhereInput[]
    OR?: ComplexWhereInput[]
    NOT?: ComplexWhereInput | ComplexWhereInput[]
    id?: StringFilter<"Complex"> | string
    code?: StringFilter<"Complex"> | string
    name?: StringFilter<"Complex"> | string
    description?: StringNullableFilter<"Complex"> | string | null
    address?: StringNullableFilter<"Complex"> | string | null
    city?: StringNullableFilter<"Complex"> | string | null
    state?: StringNullableFilter<"Complex"> | string | null
    zip?: StringNullableFilter<"Complex"> | string | null
    status?: EnumServiceStatusFilter<"Complex"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Complex"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Complex"> | $Enums.Criticality
    totalBuildings?: IntFilter<"Complex"> | number
    createdAt?: DateTimeFilter<"Complex"> | Date | string
    updatedAt?: DateTimeFilter<"Complex"> | Date | string
    buildings?: BuildingListRelationFilter
    photos?: FileListRelationFilter
  }

  export type ComplexOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    totalBuildings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buildings?: BuildingOrderByRelationAggregateInput
    photos?: FileOrderByRelationAggregateInput
  }

  export type ComplexWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ComplexWhereInput | ComplexWhereInput[]
    OR?: ComplexWhereInput[]
    NOT?: ComplexWhereInput | ComplexWhereInput[]
    name?: StringFilter<"Complex"> | string
    description?: StringNullableFilter<"Complex"> | string | null
    address?: StringNullableFilter<"Complex"> | string | null
    city?: StringNullableFilter<"Complex"> | string | null
    state?: StringNullableFilter<"Complex"> | string | null
    zip?: StringNullableFilter<"Complex"> | string | null
    status?: EnumServiceStatusFilter<"Complex"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Complex"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Complex"> | $Enums.Criticality
    totalBuildings?: IntFilter<"Complex"> | number
    createdAt?: DateTimeFilter<"Complex"> | Date | string
    updatedAt?: DateTimeFilter<"Complex"> | Date | string
    buildings?: BuildingListRelationFilter
    photos?: FileListRelationFilter
  }, "id" | "code">

  export type ComplexOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    totalBuildings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplexCountOrderByAggregateInput
    _avg?: ComplexAvgOrderByAggregateInput
    _max?: ComplexMaxOrderByAggregateInput
    _min?: ComplexMinOrderByAggregateInput
    _sum?: ComplexSumOrderByAggregateInput
  }

  export type ComplexScalarWhereWithAggregatesInput = {
    AND?: ComplexScalarWhereWithAggregatesInput | ComplexScalarWhereWithAggregatesInput[]
    OR?: ComplexScalarWhereWithAggregatesInput[]
    NOT?: ComplexScalarWhereWithAggregatesInput | ComplexScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Complex"> | string
    code?: StringWithAggregatesFilter<"Complex"> | string
    name?: StringWithAggregatesFilter<"Complex"> | string
    description?: StringNullableWithAggregatesFilter<"Complex"> | string | null
    address?: StringNullableWithAggregatesFilter<"Complex"> | string | null
    city?: StringNullableWithAggregatesFilter<"Complex"> | string | null
    state?: StringNullableWithAggregatesFilter<"Complex"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Complex"> | string | null
    status?: EnumServiceStatusWithAggregatesFilter<"Complex"> | $Enums.ServiceStatus
    condition?: EnumConditionWithAggregatesFilter<"Complex"> | $Enums.Condition
    criticality?: EnumCriticalityWithAggregatesFilter<"Complex"> | $Enums.Criticality
    totalBuildings?: IntWithAggregatesFilter<"Complex"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Complex"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Complex"> | Date | string
  }

  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: StringFilter<"Building"> | string
    name?: StringFilter<"Building"> | string
    code?: StringFilter<"Building"> | string
    mainUse?: EnumMainUseFilter<"Building"> | $Enums.MainUse
    totalFloors?: IntFilter<"Building"> | number
    address?: StringNullableFilter<"Building"> | string | null
    latitude?: FloatNullableFilter<"Building"> | number | null
    longitude?: FloatNullableFilter<"Building"> | number | null
    status?: EnumServiceStatusFilter<"Building"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Building"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Building"> | $Enums.Criticality
    complexId?: StringFilter<"Building"> | string
    calenderEntityId?: StringNullableFilter<"Building"> | string | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
    complex?: XOR<ComplexScalarRelationFilter, ComplexWhereInput>
    calenderEntity?: XOR<CalenderEntityNullableScalarRelationFilter, CalenderEntityWhereInput> | null
    photos?: FileListRelationFilter
    floors?: FloorListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mainUse?: SortOrder
    totalFloors?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    complexId?: SortOrder
    calenderEntityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    complex?: ComplexOrderByWithRelationInput
    calenderEntity?: CalenderEntityOrderByWithRelationInput
    photos?: FileOrderByRelationAggregateInput
    floors?: FloorOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    complexId_code?: BuildingComplexIdCodeCompoundUniqueInput
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    name?: StringFilter<"Building"> | string
    mainUse?: EnumMainUseFilter<"Building"> | $Enums.MainUse
    totalFloors?: IntFilter<"Building"> | number
    address?: StringNullableFilter<"Building"> | string | null
    latitude?: FloatNullableFilter<"Building"> | number | null
    longitude?: FloatNullableFilter<"Building"> | number | null
    status?: EnumServiceStatusFilter<"Building"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Building"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Building"> | $Enums.Criticality
    complexId?: StringFilter<"Building"> | string
    calenderEntityId?: StringNullableFilter<"Building"> | string | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
    complex?: XOR<ComplexScalarRelationFilter, ComplexWhereInput>
    calenderEntity?: XOR<CalenderEntityNullableScalarRelationFilter, CalenderEntityWhereInput> | null
    photos?: FileListRelationFilter
    floors?: FloorListRelationFilter
  }, "id" | "code" | "complexId_code">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mainUse?: SortOrder
    totalFloors?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    complexId?: SortOrder
    calenderEntityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Building"> | string
    name?: StringWithAggregatesFilter<"Building"> | string
    code?: StringWithAggregatesFilter<"Building"> | string
    mainUse?: EnumMainUseWithAggregatesFilter<"Building"> | $Enums.MainUse
    totalFloors?: IntWithAggregatesFilter<"Building"> | number
    address?: StringNullableWithAggregatesFilter<"Building"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Building"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Building"> | number | null
    status?: EnumServiceStatusWithAggregatesFilter<"Building"> | $Enums.ServiceStatus
    condition?: EnumConditionWithAggregatesFilter<"Building"> | $Enums.Condition
    criticality?: EnumCriticalityWithAggregatesFilter<"Building"> | $Enums.Criticality
    complexId?: StringWithAggregatesFilter<"Building"> | string
    calenderEntityId?: StringNullableWithAggregatesFilter<"Building"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
  }

  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    id?: StringFilter<"Floor"> | string
    code?: StringFilter<"Floor"> | string
    name?: StringFilter<"Floor"> | string
    level?: IntFilter<"Floor"> | number
    grossArea?: FloatFilter<"Floor"> | number
    status?: EnumServiceStatusFilter<"Floor"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Floor"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Floor"> | $Enums.Criticality
    buildingId?: StringNullableFilter<"Floor"> | string | null
    createdAt?: DateTimeFilter<"Floor"> | Date | string
    updatedAt?: DateTimeFilter<"Floor"> | Date | string
    building?: XOR<BuildingNullableScalarRelationFilter, BuildingWhereInput> | null
    rooms?: RoomListRelationFilter
    units?: UnitListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    grossArea?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    buildingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    building?: BuildingOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    units?: UnitOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    buildingId_code?: FloorBuildingIdCodeCompoundUniqueInput
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    code?: StringFilter<"Floor"> | string
    name?: StringFilter<"Floor"> | string
    level?: IntFilter<"Floor"> | number
    grossArea?: FloatFilter<"Floor"> | number
    status?: EnumServiceStatusFilter<"Floor"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Floor"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Floor"> | $Enums.Criticality
    buildingId?: StringNullableFilter<"Floor"> | string | null
    createdAt?: DateTimeFilter<"Floor"> | Date | string
    updatedAt?: DateTimeFilter<"Floor"> | Date | string
    building?: XOR<BuildingNullableScalarRelationFilter, BuildingWhereInput> | null
    rooms?: RoomListRelationFilter
    units?: UnitListRelationFilter
  }, "id" | "buildingId_code">

  export type FloorOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    grossArea?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    buildingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Floor"> | string
    code?: StringWithAggregatesFilter<"Floor"> | string
    name?: StringWithAggregatesFilter<"Floor"> | string
    level?: IntWithAggregatesFilter<"Floor"> | number
    grossArea?: FloatWithAggregatesFilter<"Floor"> | number
    status?: EnumServiceStatusWithAggregatesFilter<"Floor"> | $Enums.ServiceStatus
    condition?: EnumConditionWithAggregatesFilter<"Floor"> | $Enums.Condition
    criticality?: EnumCriticalityWithAggregatesFilter<"Floor"> | $Enums.Criticality
    buildingId?: StringNullableWithAggregatesFilter<"Floor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Floor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Floor"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    code?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    floorId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    rooms?: RoomListRelationFilter
    photos?: FileListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    floor?: FloorOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    photos?: FileOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    floorId_code?: UnitFloorIdCodeCompoundUniqueInput
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    code?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    floorId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    rooms?: RoomListRelationFilter
    photos?: FileListRelationFilter
  }, "id" | "floorId_code">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    code?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    floorId?: StringWithAggregatesFilter<"Unit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    use?: EnumRoomUseFilter<"Room"> | $Enums.RoomUse
    floorId?: StringFilter<"Room"> | string
    unitId?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    photos?: FileListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    use?: SortOrder
    floorId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    floor?: FloorOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    photos?: FileOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    floorId_code?: RoomFloorIdCodeCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    use?: EnumRoomUseFilter<"Room"> | $Enums.RoomUse
    floorId?: StringFilter<"Room"> | string
    unitId?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    photos?: FileListRelationFilter
  }, "id" | "floorId_code">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    use?: SortOrder
    floorId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    code?: StringWithAggregatesFilter<"Room"> | string
    use?: EnumRoomUseWithAggregatesFilter<"Room"> | $Enums.RoomUse
    floorId?: StringWithAggregatesFilter<"Room"> | string
    unitId?: StringNullableWithAggregatesFilter<"Room"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
    rooms?: RoomListRelationFilter
    units?: UnitListRelationFilter
    buildings?: BuildingListRelationFilter
    complexes?: ComplexListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    units?: UnitOrderByRelationAggregateInput
    buildings?: BuildingOrderByRelationAggregateInput
    complexes?: ComplexOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    rooms?: RoomListRelationFilter
    units?: UnitListRelationFilter
    buildings?: BuildingListRelationFilter
    complexes?: ComplexListRelationFilter
  }, "id" | "url">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    url?: StringWithAggregatesFilter<"File"> | string
  }

  export type CalenderEntityWhereInput = {
    AND?: CalenderEntityWhereInput | CalenderEntityWhereInput[]
    OR?: CalenderEntityWhereInput[]
    NOT?: CalenderEntityWhereInput | CalenderEntityWhereInput[]
    id?: StringFilter<"CalenderEntity"> | string
    name?: StringFilter<"CalenderEntity"> | string
    createdAt?: DateTimeFilter<"CalenderEntity"> | Date | string
    updatedAt?: DateTimeFilter<"CalenderEntity"> | Date | string
    buildings?: BuildingListRelationFilter
  }

  export type CalenderEntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buildings?: BuildingOrderByRelationAggregateInput
  }

  export type CalenderEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalenderEntityWhereInput | CalenderEntityWhereInput[]
    OR?: CalenderEntityWhereInput[]
    NOT?: CalenderEntityWhereInput | CalenderEntityWhereInput[]
    name?: StringFilter<"CalenderEntity"> | string
    createdAt?: DateTimeFilter<"CalenderEntity"> | Date | string
    updatedAt?: DateTimeFilter<"CalenderEntity"> | Date | string
    buildings?: BuildingListRelationFilter
  }, "id">

  export type CalenderEntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalenderEntityCountOrderByAggregateInput
    _max?: CalenderEntityMaxOrderByAggregateInput
    _min?: CalenderEntityMinOrderByAggregateInput
  }

  export type CalenderEntityScalarWhereWithAggregatesInput = {
    AND?: CalenderEntityScalarWhereWithAggregatesInput | CalenderEntityScalarWhereWithAggregatesInput[]
    OR?: CalenderEntityScalarWhereWithAggregatesInput[]
    NOT?: CalenderEntityScalarWhereWithAggregatesInput | CalenderEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalenderEntity"> | string
    name?: StringWithAggregatesFilter<"CalenderEntity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CalenderEntity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalenderEntity"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionCreateNestedManyWithoutRoleInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutRoleNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    roleId: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyInput = {
    id?: string
    roleId: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingCreateNestedManyWithoutComplexInput
    photos?: FileCreateNestedManyWithoutComplexesInput
  }

  export type ComplexUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutComplexInput
    photos?: FileUncheckedCreateNestedManyWithoutComplexesInput
  }

  export type ComplexUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUpdateManyWithoutComplexNestedInput
    photos?: FileUpdateManyWithoutComplexesNestedInput
  }

  export type ComplexUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutComplexNestedInput
    photos?: FileUncheckedUpdateManyWithoutComplexesNestedInput
  }

  export type ComplexCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplexUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    complex: ComplexCreateNestedOneWithoutBuildingsInput
    calenderEntity?: CalenderEntityCreateNestedOneWithoutBuildingsInput
    photos?: FileCreateNestedManyWithoutBuildingsInput
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutBuildingsInput
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complex?: ComplexUpdateOneRequiredWithoutBuildingsNestedInput
    calenderEntity?: CalenderEntityUpdateOneWithoutBuildingsNestedInput
    photos?: FileUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorCreateInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutFloorsInput
    rooms?: RoomCreateNestedManyWithoutFloorInput
    units?: UnitCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    buildingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
    units?: UnitUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutFloorsNestedInput
    rooms?: RoomUpdateManyWithoutFloorNestedInput
    units?: UnitUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    buildingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
    units?: UnitUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    buildingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FloorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    buildingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutUnitsInput
    rooms?: RoomCreateNestedManyWithoutUnitInput
    photos?: FileCreateNestedManyWithoutUnitsInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutUnitInput
    photos?: FileUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutUnitsNestedInput
    rooms?: RoomUpdateManyWithoutUnitNestedInput
    photos?: FileUpdateManyWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutUnitNestedInput
    photos?: FileUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    code: string
    name: string
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    unit?: UnitCreateNestedOneWithoutRoomsInput
    photos?: FileCreateNestedManyWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    floorId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    unit?: UnitUpdateOneWithoutRoomsNestedInput
    photos?: FileUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    floorId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    url: string
    rooms?: RoomCreateNestedManyWithoutPhotosInput
    units?: UnitCreateNestedManyWithoutPhotosInput
    buildings?: BuildingCreateNestedManyWithoutPhotosInput
    complexes?: ComplexCreateNestedManyWithoutPhotosInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    url: string
    rooms?: RoomUncheckedCreateNestedManyWithoutPhotosInput
    units?: UnitUncheckedCreateNestedManyWithoutPhotosInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutPhotosInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutPhotosNestedInput
    units?: UnitUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutPhotosNestedInput
    units?: UnitUncheckedUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type FileCreateManyInput = {
    id?: string
    url: string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CalenderEntityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingCreateNestedManyWithoutCalenderEntityInput
  }

  export type CalenderEntityUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutCalenderEntityInput
  }

  export type CalenderEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUpdateManyWithoutCalenderEntityNestedInput
  }

  export type CalenderEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutCalenderEntityNestedInput
  }

  export type CalenderEntityCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalenderEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalenderEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordExpiresAt?: SortOrder
    passwordResetAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordExpiresAt?: SortOrder
    passwordResetAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordExpiresAt?: SortOrder
    passwordResetAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type EnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type PermissionRoleIdResourceCompoundUniqueInput = {
    roleId: string
    resource: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resource?: SortOrder
    accessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resource?: SortOrder
    accessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resource?: SortOrder
    accessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type EnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition
  }

  export type EnumCriticalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityFilter<$PrismaModel> | $Enums.Criticality
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BuildingListRelationFilter = {
    every?: BuildingWhereInput
    some?: BuildingWhereInput
    none?: BuildingWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type BuildingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplexCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    totalBuildings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexAvgOrderByAggregateInput = {
    totalBuildings?: SortOrder
  }

  export type ComplexMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    totalBuildings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    totalBuildings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexSumOrderByAggregateInput = {
    totalBuildings?: SortOrder
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type EnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConditionFilter<$PrismaModel>
    _max?: NestedEnumConditionFilter<$PrismaModel>
  }

  export type EnumCriticalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityWithAggregatesFilter<$PrismaModel> | $Enums.Criticality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticalityFilter<$PrismaModel>
    _max?: NestedEnumCriticalityFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumMainUseFilter<$PrismaModel = never> = {
    equals?: $Enums.MainUse | EnumMainUseFieldRefInput<$PrismaModel>
    in?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    not?: NestedEnumMainUseFilter<$PrismaModel> | $Enums.MainUse
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ComplexScalarRelationFilter = {
    is?: ComplexWhereInput
    isNot?: ComplexWhereInput
  }

  export type CalenderEntityNullableScalarRelationFilter = {
    is?: CalenderEntityWhereInput | null
    isNot?: CalenderEntityWhereInput | null
  }

  export type FloorListRelationFilter = {
    every?: FloorWhereInput
    some?: FloorWhereInput
    none?: FloorWhereInput
  }

  export type FloorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingComplexIdCodeCompoundUniqueInput = {
    complexId: string
    code: string
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mainUse?: SortOrder
    totalFloors?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    complexId?: SortOrder
    calenderEntityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    totalFloors?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mainUse?: SortOrder
    totalFloors?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    complexId?: SortOrder
    calenderEntityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mainUse?: SortOrder
    totalFloors?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    complexId?: SortOrder
    calenderEntityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    totalFloors?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumMainUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainUse | EnumMainUseFieldRefInput<$PrismaModel>
    in?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    not?: NestedEnumMainUseWithAggregatesFilter<$PrismaModel> | $Enums.MainUse
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMainUseFilter<$PrismaModel>
    _max?: NestedEnumMainUseFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BuildingNullableScalarRelationFilter = {
    is?: BuildingWhereInput | null
    isNot?: BuildingWhereInput | null
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorBuildingIdCodeCompoundUniqueInput = {
    buildingId: string
    code: string
  }

  export type FloorCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    grossArea?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    buildingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    level?: SortOrder
    grossArea?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    grossArea?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    buildingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    grossArea?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    criticality?: SortOrder
    buildingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    level?: SortOrder
    grossArea?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type UnitFloorIdCodeCompoundUniqueInput = {
    floorId: string
    code: string
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoomUseFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUse | EnumRoomUseFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUseFilter<$PrismaModel> | $Enums.RoomUse
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type RoomFloorIdCodeCompoundUniqueInput = {
    floorId: string
    code: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    use?: SortOrder
    floorId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    use?: SortOrder
    floorId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    use?: SortOrder
    floorId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoomUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUse | EnumRoomUseFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUseWithAggregatesFilter<$PrismaModel> | $Enums.RoomUse
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomUseFilter<$PrismaModel>
    _max?: NestedEnumRoomUseFilter<$PrismaModel>
  }

  export type ComplexListRelationFilter = {
    every?: ComplexWhereInput
    some?: ComplexWhereInput
    none?: ComplexWhereInput
  }

  export type ComplexOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type CalenderEntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalenderEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalenderEntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput> | PermissionCreateWithoutRoleInput[] | PermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput | PermissionCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionCreateManyRoleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput> | PermissionCreateWithoutRoleInput[] | PermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput | PermissionCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionCreateManyRoleInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type PermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput> | PermissionCreateWithoutRoleInput[] | PermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput | PermissionCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRoleInput | PermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionCreateManyRoleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRoleInput | PermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRoleInput | PermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput> | PermissionCreateWithoutRoleInput[] | PermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput | PermissionCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRoleInput | PermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionCreateManyRoleInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRoleInput | PermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRoleInput | PermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type EnumAccessLevelFieldUpdateOperationsInput = {
    set?: $Enums.AccessLevel
  }

  export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    upsert?: RoleUpsertWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPermissionsInput, RoleUpdateWithoutPermissionsInput>, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type BuildingCreateNestedManyWithoutComplexInput = {
    create?: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput> | BuildingCreateWithoutComplexInput[] | BuildingUncheckedCreateWithoutComplexInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutComplexInput | BuildingCreateOrConnectWithoutComplexInput[]
    createMany?: BuildingCreateManyComplexInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutComplexesInput = {
    create?: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput> | FileCreateWithoutComplexesInput[] | FileUncheckedCreateWithoutComplexesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutComplexesInput | FileCreateOrConnectWithoutComplexesInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedManyWithoutComplexInput = {
    create?: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput> | BuildingCreateWithoutComplexInput[] | BuildingUncheckedCreateWithoutComplexInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutComplexInput | BuildingCreateOrConnectWithoutComplexInput[]
    createMany?: BuildingCreateManyComplexInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutComplexesInput = {
    create?: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput> | FileCreateWithoutComplexesInput[] | FileUncheckedCreateWithoutComplexesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutComplexesInput | FileCreateOrConnectWithoutComplexesInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type EnumConditionFieldUpdateOperationsInput = {
    set?: $Enums.Condition
  }

  export type EnumCriticalityFieldUpdateOperationsInput = {
    set?: $Enums.Criticality
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildingUpdateManyWithoutComplexNestedInput = {
    create?: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput> | BuildingCreateWithoutComplexInput[] | BuildingUncheckedCreateWithoutComplexInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutComplexInput | BuildingCreateOrConnectWithoutComplexInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutComplexInput | BuildingUpsertWithWhereUniqueWithoutComplexInput[]
    createMany?: BuildingCreateManyComplexInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutComplexInput | BuildingUpdateWithWhereUniqueWithoutComplexInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutComplexInput | BuildingUpdateManyWithWhereWithoutComplexInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type FileUpdateManyWithoutComplexesNestedInput = {
    create?: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput> | FileCreateWithoutComplexesInput[] | FileUncheckedCreateWithoutComplexesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutComplexesInput | FileCreateOrConnectWithoutComplexesInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutComplexesInput | FileUpsertWithWhereUniqueWithoutComplexesInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutComplexesInput | FileUpdateWithWhereUniqueWithoutComplexesInput[]
    updateMany?: FileUpdateManyWithWhereWithoutComplexesInput | FileUpdateManyWithWhereWithoutComplexesInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateManyWithoutComplexNestedInput = {
    create?: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput> | BuildingCreateWithoutComplexInput[] | BuildingUncheckedCreateWithoutComplexInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutComplexInput | BuildingCreateOrConnectWithoutComplexInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutComplexInput | BuildingUpsertWithWhereUniqueWithoutComplexInput[]
    createMany?: BuildingCreateManyComplexInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutComplexInput | BuildingUpdateWithWhereUniqueWithoutComplexInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutComplexInput | BuildingUpdateManyWithWhereWithoutComplexInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutComplexesNestedInput = {
    create?: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput> | FileCreateWithoutComplexesInput[] | FileUncheckedCreateWithoutComplexesInput[]
    connectOrCreate?: FileCreateOrConnectWithoutComplexesInput | FileCreateOrConnectWithoutComplexesInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutComplexesInput | FileUpsertWithWhereUniqueWithoutComplexesInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutComplexesInput | FileUpdateWithWhereUniqueWithoutComplexesInput[]
    updateMany?: FileUpdateManyWithWhereWithoutComplexesInput | FileUpdateManyWithWhereWithoutComplexesInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ComplexCreateNestedOneWithoutBuildingsInput = {
    create?: XOR<ComplexCreateWithoutBuildingsInput, ComplexUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ComplexCreateOrConnectWithoutBuildingsInput
    connect?: ComplexWhereUniqueInput
  }

  export type CalenderEntityCreateNestedOneWithoutBuildingsInput = {
    create?: XOR<CalenderEntityCreateWithoutBuildingsInput, CalenderEntityUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: CalenderEntityCreateOrConnectWithoutBuildingsInput
    connect?: CalenderEntityWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput> | FileCreateWithoutBuildingsInput[] | FileUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutBuildingsInput | FileCreateOrConnectWithoutBuildingsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FloorCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput> | FileCreateWithoutBuildingsInput[] | FileUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutBuildingsInput | FileCreateOrConnectWithoutBuildingsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FloorUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type EnumMainUseFieldUpdateOperationsInput = {
    set?: $Enums.MainUse
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplexUpdateOneRequiredWithoutBuildingsNestedInput = {
    create?: XOR<ComplexCreateWithoutBuildingsInput, ComplexUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ComplexCreateOrConnectWithoutBuildingsInput
    upsert?: ComplexUpsertWithoutBuildingsInput
    connect?: ComplexWhereUniqueInput
    update?: XOR<XOR<ComplexUpdateToOneWithWhereWithoutBuildingsInput, ComplexUpdateWithoutBuildingsInput>, ComplexUncheckedUpdateWithoutBuildingsInput>
  }

  export type CalenderEntityUpdateOneWithoutBuildingsNestedInput = {
    create?: XOR<CalenderEntityCreateWithoutBuildingsInput, CalenderEntityUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: CalenderEntityCreateOrConnectWithoutBuildingsInput
    upsert?: CalenderEntityUpsertWithoutBuildingsInput
    disconnect?: CalenderEntityWhereInput | boolean
    delete?: CalenderEntityWhereInput | boolean
    connect?: CalenderEntityWhereUniqueInput
    update?: XOR<XOR<CalenderEntityUpdateToOneWithWhereWithoutBuildingsInput, CalenderEntityUpdateWithoutBuildingsInput>, CalenderEntityUncheckedUpdateWithoutBuildingsInput>
  }

  export type FileUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput> | FileCreateWithoutBuildingsInput[] | FileUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutBuildingsInput | FileCreateOrConnectWithoutBuildingsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutBuildingsInput | FileUpsertWithWhereUniqueWithoutBuildingsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutBuildingsInput | FileUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutBuildingsInput | FileUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FloorUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput> | FileCreateWithoutBuildingsInput[] | FileUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutBuildingsInput | FileCreateOrConnectWithoutBuildingsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutBuildingsInput | FileUpsertWithWhereUniqueWithoutBuildingsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutBuildingsInput | FileUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutBuildingsInput | FileUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FloorUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type BuildingCreateNestedOneWithoutFloorsInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    connect?: BuildingWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UnitCreateNestedManyWithoutFloorInput = {
    create?: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput> | UnitCreateWithoutFloorInput[] | UnitUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutFloorInput | UnitCreateOrConnectWithoutFloorInput[]
    createMany?: UnitCreateManyFloorInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput> | UnitCreateWithoutFloorInput[] | UnitUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutFloorInput | UnitCreateOrConnectWithoutFloorInput[]
    createMany?: UnitCreateManyFloorInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildingUpdateOneWithoutFloorsNestedInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    upsert?: BuildingUpsertWithoutFloorsInput
    disconnect?: BuildingWhereInput | boolean
    delete?: BuildingWhereInput | boolean
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutFloorsInput, BuildingUpdateWithoutFloorsInput>, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type RoomUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UnitUpdateManyWithoutFloorNestedInput = {
    create?: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput> | UnitCreateWithoutFloorInput[] | UnitUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutFloorInput | UnitCreateOrConnectWithoutFloorInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutFloorInput | UnitUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: UnitCreateManyFloorInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutFloorInput | UnitUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutFloorInput | UnitUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput> | UnitCreateWithoutFloorInput[] | UnitUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutFloorInput | UnitCreateOrConnectWithoutFloorInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutFloorInput | UnitUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: UnitCreateManyFloorInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutFloorInput | UnitUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutFloorInput | UnitUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type FloorCreateNestedOneWithoutUnitsInput = {
    create?: XOR<FloorCreateWithoutUnitsInput, FloorUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutUnitsInput
    connect?: FloorWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutUnitInput = {
    create?: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput> | RoomCreateWithoutUnitInput[] | RoomUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUnitInput | RoomCreateOrConnectWithoutUnitInput[]
    createMany?: RoomCreateManyUnitInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutUnitsInput = {
    create?: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput> | FileCreateWithoutUnitsInput[] | FileUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUnitsInput | FileCreateOrConnectWithoutUnitsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput> | RoomCreateWithoutUnitInput[] | RoomUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUnitInput | RoomCreateOrConnectWithoutUnitInput[]
    createMany?: RoomCreateManyUnitInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput> | FileCreateWithoutUnitsInput[] | FileUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUnitsInput | FileCreateOrConnectWithoutUnitsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FloorUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<FloorCreateWithoutUnitsInput, FloorUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutUnitsInput
    upsert?: FloorUpsertWithoutUnitsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutUnitsInput, FloorUpdateWithoutUnitsInput>, FloorUncheckedUpdateWithoutUnitsInput>
  }

  export type RoomUpdateManyWithoutUnitNestedInput = {
    create?: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput> | RoomCreateWithoutUnitInput[] | RoomUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUnitInput | RoomCreateOrConnectWithoutUnitInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutUnitInput | RoomUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: RoomCreateManyUnitInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutUnitInput | RoomUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutUnitInput | RoomUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type FileUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput> | FileCreateWithoutUnitsInput[] | FileUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUnitsInput | FileCreateOrConnectWithoutUnitsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUnitsInput | FileUpsertWithWhereUniqueWithoutUnitsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUnitsInput | FileUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUnitsInput | FileUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput> | RoomCreateWithoutUnitInput[] | RoomUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUnitInput | RoomCreateOrConnectWithoutUnitInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutUnitInput | RoomUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: RoomCreateManyUnitInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutUnitInput | RoomUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutUnitInput | RoomUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput> | FileCreateWithoutUnitsInput[] | FileUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUnitsInput | FileCreateOrConnectWithoutUnitsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUnitsInput | FileUpsertWithWhereUniqueWithoutUnitsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUnitsInput | FileUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUnitsInput | FileUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FloorCreateNestedOneWithoutRoomsInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    connect?: FloorWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UnitCreateWithoutRoomsInput, UnitUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutRoomsInput
    connect?: UnitWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutRoomsInput = {
    create?: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput> | FileCreateWithoutRoomsInput[] | FileUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutRoomsInput | FileCreateOrConnectWithoutRoomsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput> | FileCreateWithoutRoomsInput[] | FileUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutRoomsInput | FileCreateOrConnectWithoutRoomsInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type EnumRoomUseFieldUpdateOperationsInput = {
    set?: $Enums.RoomUse
  }

  export type FloorUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    upsert?: FloorUpsertWithoutRoomsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutRoomsInput, FloorUpdateWithoutRoomsInput>, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type UnitUpdateOneWithoutRoomsNestedInput = {
    create?: XOR<UnitCreateWithoutRoomsInput, UnitUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutRoomsInput
    upsert?: UnitUpsertWithoutRoomsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutRoomsInput, UnitUpdateWithoutRoomsInput>, UnitUncheckedUpdateWithoutRoomsInput>
  }

  export type FileUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput> | FileCreateWithoutRoomsInput[] | FileUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutRoomsInput | FileCreateOrConnectWithoutRoomsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutRoomsInput | FileUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutRoomsInput | FileUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutRoomsInput | FileUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput> | FileCreateWithoutRoomsInput[] | FileUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutRoomsInput | FileCreateOrConnectWithoutRoomsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutRoomsInput | FileUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutRoomsInput | FileUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutRoomsInput | FileUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutPhotosInput = {
    create?: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput> | RoomCreateWithoutPhotosInput[] | RoomUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotosInput | RoomCreateOrConnectWithoutPhotosInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UnitCreateNestedManyWithoutPhotosInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput> | UnitCreateWithoutPhotosInput[] | UnitUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput | UnitCreateOrConnectWithoutPhotosInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type BuildingCreateNestedManyWithoutPhotosInput = {
    create?: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput> | BuildingCreateWithoutPhotosInput[] | BuildingUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutPhotosInput | BuildingCreateOrConnectWithoutPhotosInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type ComplexCreateNestedManyWithoutPhotosInput = {
    create?: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput> | ComplexCreateWithoutPhotosInput[] | ComplexUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: ComplexCreateOrConnectWithoutPhotosInput | ComplexCreateOrConnectWithoutPhotosInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput> | RoomCreateWithoutPhotosInput[] | RoomUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotosInput | RoomCreateOrConnectWithoutPhotosInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput> | UnitCreateWithoutPhotosInput[] | UnitUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput | UnitCreateOrConnectWithoutPhotosInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput> | BuildingCreateWithoutPhotosInput[] | BuildingUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutPhotosInput | BuildingCreateOrConnectWithoutPhotosInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type ComplexUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput> | ComplexCreateWithoutPhotosInput[] | ComplexUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: ComplexCreateOrConnectWithoutPhotosInput | ComplexCreateOrConnectWithoutPhotosInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput> | RoomCreateWithoutPhotosInput[] | RoomUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotosInput | RoomCreateOrConnectWithoutPhotosInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPhotosInput | RoomUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPhotosInput | RoomUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPhotosInput | RoomUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UnitUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput> | UnitCreateWithoutPhotosInput[] | UnitUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput | UnitCreateOrConnectWithoutPhotosInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPhotosInput | UnitUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPhotosInput | UnitUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPhotosInput | UnitUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type BuildingUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput> | BuildingCreateWithoutPhotosInput[] | BuildingUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutPhotosInput | BuildingCreateOrConnectWithoutPhotosInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutPhotosInput | BuildingUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutPhotosInput | BuildingUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutPhotosInput | BuildingUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type ComplexUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput> | ComplexCreateWithoutPhotosInput[] | ComplexUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: ComplexCreateOrConnectWithoutPhotosInput | ComplexCreateOrConnectWithoutPhotosInput[]
    upsert?: ComplexUpsertWithWhereUniqueWithoutPhotosInput | ComplexUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    disconnect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    delete?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    update?: ComplexUpdateWithWhereUniqueWithoutPhotosInput | ComplexUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: ComplexUpdateManyWithWhereWithoutPhotosInput | ComplexUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput> | RoomCreateWithoutPhotosInput[] | RoomUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPhotosInput | RoomCreateOrConnectWithoutPhotosInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPhotosInput | RoomUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPhotosInput | RoomUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPhotosInput | RoomUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput> | UnitCreateWithoutPhotosInput[] | UnitUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput | UnitCreateOrConnectWithoutPhotosInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPhotosInput | UnitUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPhotosInput | UnitUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPhotosInput | UnitUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput> | BuildingCreateWithoutPhotosInput[] | BuildingUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutPhotosInput | BuildingCreateOrConnectWithoutPhotosInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutPhotosInput | BuildingUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutPhotosInput | BuildingUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutPhotosInput | BuildingUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type ComplexUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput> | ComplexCreateWithoutPhotosInput[] | ComplexUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: ComplexCreateOrConnectWithoutPhotosInput | ComplexCreateOrConnectWithoutPhotosInput[]
    upsert?: ComplexUpsertWithWhereUniqueWithoutPhotosInput | ComplexUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    disconnect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    delete?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    connect?: ComplexWhereUniqueInput | ComplexWhereUniqueInput[]
    update?: ComplexUpdateWithWhereUniqueWithoutPhotosInput | ComplexUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: ComplexUpdateManyWithWhereWithoutPhotosInput | ComplexUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
  }

  export type BuildingCreateNestedManyWithoutCalenderEntityInput = {
    create?: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput> | BuildingCreateWithoutCalenderEntityInput[] | BuildingUncheckedCreateWithoutCalenderEntityInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutCalenderEntityInput | BuildingCreateOrConnectWithoutCalenderEntityInput[]
    createMany?: BuildingCreateManyCalenderEntityInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedManyWithoutCalenderEntityInput = {
    create?: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput> | BuildingCreateWithoutCalenderEntityInput[] | BuildingUncheckedCreateWithoutCalenderEntityInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutCalenderEntityInput | BuildingCreateOrConnectWithoutCalenderEntityInput[]
    createMany?: BuildingCreateManyCalenderEntityInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type BuildingUpdateManyWithoutCalenderEntityNestedInput = {
    create?: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput> | BuildingCreateWithoutCalenderEntityInput[] | BuildingUncheckedCreateWithoutCalenderEntityInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutCalenderEntityInput | BuildingCreateOrConnectWithoutCalenderEntityInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutCalenderEntityInput | BuildingUpsertWithWhereUniqueWithoutCalenderEntityInput[]
    createMany?: BuildingCreateManyCalenderEntityInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutCalenderEntityInput | BuildingUpdateWithWhereUniqueWithoutCalenderEntityInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutCalenderEntityInput | BuildingUpdateManyWithWhereWithoutCalenderEntityInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateManyWithoutCalenderEntityNestedInput = {
    create?: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput> | BuildingCreateWithoutCalenderEntityInput[] | BuildingUncheckedCreateWithoutCalenderEntityInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutCalenderEntityInput | BuildingCreateOrConnectWithoutCalenderEntityInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutCalenderEntityInput | BuildingUpsertWithWhereUniqueWithoutCalenderEntityInput[]
    createMany?: BuildingCreateManyCalenderEntityInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutCalenderEntityInput | BuildingUpdateWithWhereUniqueWithoutCalenderEntityInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutCalenderEntityInput | BuildingUpdateManyWithWhereWithoutCalenderEntityInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedEnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type NestedEnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition
  }

  export type NestedEnumCriticalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityFilter<$PrismaModel> | $Enums.Criticality
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConditionFilter<$PrismaModel>
    _max?: NestedEnumConditionFilter<$PrismaModel>
  }

  export type NestedEnumCriticalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityWithAggregatesFilter<$PrismaModel> | $Enums.Criticality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticalityFilter<$PrismaModel>
    _max?: NestedEnumCriticalityFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMainUseFilter<$PrismaModel = never> = {
    equals?: $Enums.MainUse | EnumMainUseFieldRefInput<$PrismaModel>
    in?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    not?: NestedEnumMainUseFilter<$PrismaModel> | $Enums.MainUse
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMainUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainUse | EnumMainUseFieldRefInput<$PrismaModel>
    in?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.MainUse[] | ListEnumMainUseFieldRefInput<$PrismaModel>
    not?: NestedEnumMainUseWithAggregatesFilter<$PrismaModel> | $Enums.MainUse
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMainUseFilter<$PrismaModel>
    _max?: NestedEnumMainUseFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoomUseFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUse | EnumRoomUseFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUseFilter<$PrismaModel> | $Enums.RoomUse
  }

  export type NestedEnumRoomUseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomUse | EnumRoomUseFieldRefInput<$PrismaModel>
    in?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomUse[] | ListEnumRoomUseFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomUseWithAggregatesFilter<$PrismaModel> | $Enums.RoomUse
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomUseFilter<$PrismaModel>
    _max?: NestedEnumRoomUseFilter<$PrismaModel>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionCreateWithoutRoleInput = {
    id?: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRoleInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
  }

  export type PermissionCreateManyRoleInputEnvelope = {
    data: PermissionCreateManyRoleInput | PermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRoleInput, PermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<PermissionCreateWithoutRoleInput, PermissionUncheckedCreateWithoutRoleInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRoleInput, PermissionUncheckedUpdateWithoutRoleInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRoleInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    roleId?: StringFilter<"Permission"> | string
    resource?: StringFilter<"Permission"> | string
    accessLevel?: EnumAccessLevelFilter<"Permission"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type RoleCreateWithoutPermissionsInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithoutPermissionsInput = {
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type BuildingCreateWithoutComplexInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    calenderEntity?: CalenderEntityCreateNestedOneWithoutBuildingsInput
    photos?: FileCreateNestedManyWithoutBuildingsInput
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutComplexInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutBuildingsInput
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutComplexInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput>
  }

  export type BuildingCreateManyComplexInputEnvelope = {
    data: BuildingCreateManyComplexInput | BuildingCreateManyComplexInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutComplexesInput = {
    id?: string
    url: string
    rooms?: RoomCreateNestedManyWithoutPhotosInput
    units?: UnitCreateNestedManyWithoutPhotosInput
    buildings?: BuildingCreateNestedManyWithoutPhotosInput
  }

  export type FileUncheckedCreateWithoutComplexesInput = {
    id?: string
    url: string
    rooms?: RoomUncheckedCreateNestedManyWithoutPhotosInput
    units?: UnitUncheckedCreateNestedManyWithoutPhotosInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type FileCreateOrConnectWithoutComplexesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput>
  }

  export type BuildingUpsertWithWhereUniqueWithoutComplexInput = {
    where: BuildingWhereUniqueInput
    update: XOR<BuildingUpdateWithoutComplexInput, BuildingUncheckedUpdateWithoutComplexInput>
    create: XOR<BuildingCreateWithoutComplexInput, BuildingUncheckedCreateWithoutComplexInput>
  }

  export type BuildingUpdateWithWhereUniqueWithoutComplexInput = {
    where: BuildingWhereUniqueInput
    data: XOR<BuildingUpdateWithoutComplexInput, BuildingUncheckedUpdateWithoutComplexInput>
  }

  export type BuildingUpdateManyWithWhereWithoutComplexInput = {
    where: BuildingScalarWhereInput
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyWithoutComplexInput>
  }

  export type BuildingScalarWhereInput = {
    AND?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    OR?: BuildingScalarWhereInput[]
    NOT?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    id?: StringFilter<"Building"> | string
    name?: StringFilter<"Building"> | string
    code?: StringFilter<"Building"> | string
    mainUse?: EnumMainUseFilter<"Building"> | $Enums.MainUse
    totalFloors?: IntFilter<"Building"> | number
    address?: StringNullableFilter<"Building"> | string | null
    latitude?: FloatNullableFilter<"Building"> | number | null
    longitude?: FloatNullableFilter<"Building"> | number | null
    status?: EnumServiceStatusFilter<"Building"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Building"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Building"> | $Enums.Criticality
    complexId?: StringFilter<"Building"> | string
    calenderEntityId?: StringNullableFilter<"Building"> | string | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutComplexesInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutComplexesInput, FileUncheckedUpdateWithoutComplexesInput>
    create: XOR<FileCreateWithoutComplexesInput, FileUncheckedCreateWithoutComplexesInput>
  }

  export type FileUpdateWithWhereUniqueWithoutComplexesInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutComplexesInput, FileUncheckedUpdateWithoutComplexesInput>
  }

  export type FileUpdateManyWithWhereWithoutComplexesInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutComplexesInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: StringFilter<"File"> | string
    url?: StringFilter<"File"> | string
  }

  export type ComplexCreateWithoutBuildingsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileCreateNestedManyWithoutComplexesInput
  }

  export type ComplexUncheckedCreateWithoutBuildingsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutComplexesInput
  }

  export type ComplexCreateOrConnectWithoutBuildingsInput = {
    where: ComplexWhereUniqueInput
    create: XOR<ComplexCreateWithoutBuildingsInput, ComplexUncheckedCreateWithoutBuildingsInput>
  }

  export type CalenderEntityCreateWithoutBuildingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalenderEntityUncheckedCreateWithoutBuildingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalenderEntityCreateOrConnectWithoutBuildingsInput = {
    where: CalenderEntityWhereUniqueInput
    create: XOR<CalenderEntityCreateWithoutBuildingsInput, CalenderEntityUncheckedCreateWithoutBuildingsInput>
  }

  export type FileCreateWithoutBuildingsInput = {
    id?: string
    url: string
    rooms?: RoomCreateNestedManyWithoutPhotosInput
    units?: UnitCreateNestedManyWithoutPhotosInput
    complexes?: ComplexCreateNestedManyWithoutPhotosInput
  }

  export type FileUncheckedCreateWithoutBuildingsInput = {
    id?: string
    url: string
    rooms?: RoomUncheckedCreateNestedManyWithoutPhotosInput
    units?: UnitUncheckedCreateNestedManyWithoutPhotosInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type FileCreateOrConnectWithoutBuildingsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput>
  }

  export type FloorCreateWithoutBuildingInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutFloorInput
    units?: UnitCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutBuildingInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
    units?: UnitUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorCreateManyBuildingInputEnvelope = {
    data: FloorCreateManyBuildingInput | FloorCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type ComplexUpsertWithoutBuildingsInput = {
    update: XOR<ComplexUpdateWithoutBuildingsInput, ComplexUncheckedUpdateWithoutBuildingsInput>
    create: XOR<ComplexCreateWithoutBuildingsInput, ComplexUncheckedCreateWithoutBuildingsInput>
    where?: ComplexWhereInput
  }

  export type ComplexUpdateToOneWithWhereWithoutBuildingsInput = {
    where?: ComplexWhereInput
    data: XOR<ComplexUpdateWithoutBuildingsInput, ComplexUncheckedUpdateWithoutBuildingsInput>
  }

  export type ComplexUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUpdateManyWithoutComplexesNestedInput
  }

  export type ComplexUncheckedUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutComplexesNestedInput
  }

  export type CalenderEntityUpsertWithoutBuildingsInput = {
    update: XOR<CalenderEntityUpdateWithoutBuildingsInput, CalenderEntityUncheckedUpdateWithoutBuildingsInput>
    create: XOR<CalenderEntityCreateWithoutBuildingsInput, CalenderEntityUncheckedCreateWithoutBuildingsInput>
    where?: CalenderEntityWhereInput
  }

  export type CalenderEntityUpdateToOneWithWhereWithoutBuildingsInput = {
    where?: CalenderEntityWhereInput
    data: XOR<CalenderEntityUpdateWithoutBuildingsInput, CalenderEntityUncheckedUpdateWithoutBuildingsInput>
  }

  export type CalenderEntityUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalenderEntityUncheckedUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutBuildingsInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutBuildingsInput, FileUncheckedUpdateWithoutBuildingsInput>
    create: XOR<FileCreateWithoutBuildingsInput, FileUncheckedCreateWithoutBuildingsInput>
  }

  export type FileUpdateWithWhereUniqueWithoutBuildingsInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutBuildingsInput, FileUncheckedUpdateWithoutBuildingsInput>
  }

  export type FileUpdateManyWithWhereWithoutBuildingsInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutBuildingsInput>
  }

  export type FloorUpsertWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    update: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorUpdateWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    data: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
  }

  export type FloorUpdateManyWithWhereWithoutBuildingInput = {
    where: FloorScalarWhereInput
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyWithoutBuildingInput>
  }

  export type FloorScalarWhereInput = {
    AND?: FloorScalarWhereInput | FloorScalarWhereInput[]
    OR?: FloorScalarWhereInput[]
    NOT?: FloorScalarWhereInput | FloorScalarWhereInput[]
    id?: StringFilter<"Floor"> | string
    code?: StringFilter<"Floor"> | string
    name?: StringFilter<"Floor"> | string
    level?: IntFilter<"Floor"> | number
    grossArea?: FloatFilter<"Floor"> | number
    status?: EnumServiceStatusFilter<"Floor"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Floor"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Floor"> | $Enums.Criticality
    buildingId?: StringNullableFilter<"Floor"> | string | null
    createdAt?: DateTimeFilter<"Floor"> | Date | string
    updatedAt?: DateTimeFilter<"Floor"> | Date | string
  }

  export type BuildingCreateWithoutFloorsInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    complex: ComplexCreateNestedOneWithoutBuildingsInput
    calenderEntity?: CalenderEntityCreateNestedOneWithoutBuildingsInput
    photos?: FileCreateNestedManyWithoutBuildingsInput
  }

  export type BuildingUncheckedCreateWithoutFloorsInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutBuildingsInput
  }

  export type BuildingCreateOrConnectWithoutFloorsInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
  }

  export type RoomCreateWithoutFloorInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutRoomsInput
    photos?: FileCreateNestedManyWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutFloorInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomCreateOrConnectWithoutFloorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomCreateManyFloorInputEnvelope = {
    data: RoomCreateManyFloorInput | RoomCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutFloorInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutUnitInput
    photos?: FileCreateNestedManyWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutFloorInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutUnitInput
    photos?: FileUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type UnitCreateOrConnectWithoutFloorInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput>
  }

  export type UnitCreateManyFloorInputEnvelope = {
    data: UnitCreateManyFloorInput | UnitCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type BuildingUpsertWithoutFloorsInput = {
    update: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutFloorsInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type BuildingUpdateWithoutFloorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complex?: ComplexUpdateOneRequiredWithoutBuildingsNestedInput
    calenderEntity?: CalenderEntityUpdateOneWithoutBuildingsNestedInput
    photos?: FileUpdateManyWithoutBuildingsNestedInput
  }

  export type BuildingUncheckedUpdateWithoutFloorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutBuildingsNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
  }

  export type RoomUpdateManyWithWhereWithoutFloorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutFloorInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    use?: EnumRoomUseFilter<"Room"> | $Enums.RoomUse
    floorId?: StringFilter<"Room"> | string
    unitId?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type UnitUpsertWithWhereUniqueWithoutFloorInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutFloorInput, UnitUncheckedUpdateWithoutFloorInput>
    create: XOR<UnitCreateWithoutFloorInput, UnitUncheckedCreateWithoutFloorInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutFloorInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutFloorInput, UnitUncheckedUpdateWithoutFloorInput>
  }

  export type UnitUpdateManyWithWhereWithoutFloorInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutFloorInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    code?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    floorId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type FloorCreateWithoutUnitsInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutFloorsInput
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutUnitsInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    buildingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutUnitsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutUnitsInput, FloorUncheckedCreateWithoutUnitsInput>
  }

  export type RoomCreateWithoutUnitInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    photos?: FileCreateNestedManyWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutUnitInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomCreateOrConnectWithoutUnitInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput>
  }

  export type RoomCreateManyUnitInputEnvelope = {
    data: RoomCreateManyUnitInput | RoomCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUnitsInput = {
    id?: string
    url: string
    rooms?: RoomCreateNestedManyWithoutPhotosInput
    buildings?: BuildingCreateNestedManyWithoutPhotosInput
    complexes?: ComplexCreateNestedManyWithoutPhotosInput
  }

  export type FileUncheckedCreateWithoutUnitsInput = {
    id?: string
    url: string
    rooms?: RoomUncheckedCreateNestedManyWithoutPhotosInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutPhotosInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type FileCreateOrConnectWithoutUnitsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput>
  }

  export type FloorUpsertWithoutUnitsInput = {
    update: XOR<FloorUpdateWithoutUnitsInput, FloorUncheckedUpdateWithoutUnitsInput>
    create: XOR<FloorCreateWithoutUnitsInput, FloorUncheckedCreateWithoutUnitsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutUnitsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutUnitsInput, FloorUncheckedUpdateWithoutUnitsInput>
  }

  export type FloorUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutFloorsNestedInput
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    buildingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutUnitInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutUnitInput, RoomUncheckedUpdateWithoutUnitInput>
    create: XOR<RoomCreateWithoutUnitInput, RoomUncheckedCreateWithoutUnitInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutUnitInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutUnitInput, RoomUncheckedUpdateWithoutUnitInput>
  }

  export type RoomUpdateManyWithWhereWithoutUnitInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutUnitInput>
  }

  export type FileUpsertWithWhereUniqueWithoutUnitsInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUnitsInput, FileUncheckedUpdateWithoutUnitsInput>
    create: XOR<FileCreateWithoutUnitsInput, FileUncheckedCreateWithoutUnitsInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUnitsInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUnitsInput, FileUncheckedUpdateWithoutUnitsInput>
  }

  export type FileUpdateManyWithWhereWithoutUnitsInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutUnitsInput>
  }

  export type FloorCreateWithoutRoomsInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    building?: BuildingCreateNestedOneWithoutFloorsInput
    units?: UnitCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutRoomsInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    buildingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutRoomsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
  }

  export type UnitCreateWithoutRoomsInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutUnitsInput
    photos?: FileCreateNestedManyWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutRoomsInput = {
    id?: string
    code: string
    name: string
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type UnitCreateOrConnectWithoutRoomsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutRoomsInput, UnitUncheckedCreateWithoutRoomsInput>
  }

  export type FileCreateWithoutRoomsInput = {
    id?: string
    url: string
    units?: UnitCreateNestedManyWithoutPhotosInput
    buildings?: BuildingCreateNestedManyWithoutPhotosInput
    complexes?: ComplexCreateNestedManyWithoutPhotosInput
  }

  export type FileUncheckedCreateWithoutRoomsInput = {
    id?: string
    url: string
    units?: UnitUncheckedCreateNestedManyWithoutPhotosInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutPhotosInput
    complexes?: ComplexUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type FileCreateOrConnectWithoutRoomsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput>
  }

  export type FloorUpsertWithoutRoomsInput = {
    update: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutRoomsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneWithoutFloorsNestedInput
    units?: UnitUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    buildingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type UnitUpsertWithoutRoomsInput = {
    update: XOR<UnitUpdateWithoutRoomsInput, UnitUncheckedUpdateWithoutRoomsInput>
    create: XOR<UnitCreateWithoutRoomsInput, UnitUncheckedCreateWithoutRoomsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutRoomsInput, UnitUncheckedUpdateWithoutRoomsInput>
  }

  export type UnitUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutUnitsNestedInput
    photos?: FileUpdateManyWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type FileUpsertWithWhereUniqueWithoutRoomsInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutRoomsInput, FileUncheckedUpdateWithoutRoomsInput>
    create: XOR<FileCreateWithoutRoomsInput, FileUncheckedCreateWithoutRoomsInput>
  }

  export type FileUpdateWithWhereUniqueWithoutRoomsInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutRoomsInput, FileUncheckedUpdateWithoutRoomsInput>
  }

  export type FileUpdateManyWithWhereWithoutRoomsInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutRoomsInput>
  }

  export type RoomCreateWithoutPhotosInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutRoomsInput
    unit?: UnitCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    floorId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutPhotosInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput>
  }

  export type UnitCreateWithoutPhotosInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    floor: FloorCreateNestedOneWithoutUnitsInput
    rooms?: RoomCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutPhotosInput = {
    id?: string
    code: string
    name: string
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutPhotosInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
  }

  export type BuildingCreateWithoutPhotosInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    complex: ComplexCreateNestedOneWithoutBuildingsInput
    calenderEntity?: CalenderEntityCreateNestedOneWithoutBuildingsInput
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutPhotosInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput>
  }

  export type ComplexCreateWithoutPhotosInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingCreateNestedManyWithoutComplexInput
  }

  export type ComplexUncheckedCreateWithoutPhotosInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip?: string | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    totalBuildings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutComplexInput
  }

  export type ComplexCreateOrConnectWithoutPhotosInput = {
    where: ComplexWhereUniqueInput
    create: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutPhotosInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPhotosInput, RoomUncheckedUpdateWithoutPhotosInput>
    create: XOR<RoomCreateWithoutPhotosInput, RoomUncheckedCreateWithoutPhotosInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPhotosInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPhotosInput, RoomUncheckedUpdateWithoutPhotosInput>
  }

  export type RoomUpdateManyWithWhereWithoutPhotosInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPhotosInput>
  }

  export type UnitUpsertWithWhereUniqueWithoutPhotosInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutPhotosInput, UnitUncheckedUpdateWithoutPhotosInput>
    create: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutPhotosInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutPhotosInput, UnitUncheckedUpdateWithoutPhotosInput>
  }

  export type UnitUpdateManyWithWhereWithoutPhotosInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutPhotosInput>
  }

  export type BuildingUpsertWithWhereUniqueWithoutPhotosInput = {
    where: BuildingWhereUniqueInput
    update: XOR<BuildingUpdateWithoutPhotosInput, BuildingUncheckedUpdateWithoutPhotosInput>
    create: XOR<BuildingCreateWithoutPhotosInput, BuildingUncheckedCreateWithoutPhotosInput>
  }

  export type BuildingUpdateWithWhereUniqueWithoutPhotosInput = {
    where: BuildingWhereUniqueInput
    data: XOR<BuildingUpdateWithoutPhotosInput, BuildingUncheckedUpdateWithoutPhotosInput>
  }

  export type BuildingUpdateManyWithWhereWithoutPhotosInput = {
    where: BuildingScalarWhereInput
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyWithoutPhotosInput>
  }

  export type ComplexUpsertWithWhereUniqueWithoutPhotosInput = {
    where: ComplexWhereUniqueInput
    update: XOR<ComplexUpdateWithoutPhotosInput, ComplexUncheckedUpdateWithoutPhotosInput>
    create: XOR<ComplexCreateWithoutPhotosInput, ComplexUncheckedCreateWithoutPhotosInput>
  }

  export type ComplexUpdateWithWhereUniqueWithoutPhotosInput = {
    where: ComplexWhereUniqueInput
    data: XOR<ComplexUpdateWithoutPhotosInput, ComplexUncheckedUpdateWithoutPhotosInput>
  }

  export type ComplexUpdateManyWithWhereWithoutPhotosInput = {
    where: ComplexScalarWhereInput
    data: XOR<ComplexUpdateManyMutationInput, ComplexUncheckedUpdateManyWithoutPhotosInput>
  }

  export type ComplexScalarWhereInput = {
    AND?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
    OR?: ComplexScalarWhereInput[]
    NOT?: ComplexScalarWhereInput | ComplexScalarWhereInput[]
    id?: StringFilter<"Complex"> | string
    code?: StringFilter<"Complex"> | string
    name?: StringFilter<"Complex"> | string
    description?: StringNullableFilter<"Complex"> | string | null
    address?: StringNullableFilter<"Complex"> | string | null
    city?: StringNullableFilter<"Complex"> | string | null
    state?: StringNullableFilter<"Complex"> | string | null
    zip?: StringNullableFilter<"Complex"> | string | null
    status?: EnumServiceStatusFilter<"Complex"> | $Enums.ServiceStatus
    condition?: EnumConditionFilter<"Complex"> | $Enums.Condition
    criticality?: EnumCriticalityFilter<"Complex"> | $Enums.Criticality
    totalBuildings?: IntFilter<"Complex"> | number
    createdAt?: DateTimeFilter<"Complex"> | Date | string
    updatedAt?: DateTimeFilter<"Complex"> | Date | string
  }

  export type BuildingCreateWithoutCalenderEntityInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
    complex: ComplexCreateNestedOneWithoutBuildingsInput
    photos?: FileCreateNestedManyWithoutBuildingsInput
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutCalenderEntityInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FileUncheckedCreateNestedManyWithoutBuildingsInput
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutCalenderEntityInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput>
  }

  export type BuildingCreateManyCalenderEntityInputEnvelope = {
    data: BuildingCreateManyCalenderEntityInput | BuildingCreateManyCalenderEntityInput[]
    skipDuplicates?: boolean
  }

  export type BuildingUpsertWithWhereUniqueWithoutCalenderEntityInput = {
    where: BuildingWhereUniqueInput
    update: XOR<BuildingUpdateWithoutCalenderEntityInput, BuildingUncheckedUpdateWithoutCalenderEntityInput>
    create: XOR<BuildingCreateWithoutCalenderEntityInput, BuildingUncheckedCreateWithoutCalenderEntityInput>
  }

  export type BuildingUpdateWithWhereUniqueWithoutCalenderEntityInput = {
    where: BuildingWhereUniqueInput
    data: XOR<BuildingUpdateWithoutCalenderEntityInput, BuildingUncheckedUpdateWithoutCalenderEntityInput>
  }

  export type BuildingUpdateManyWithWhereWithoutCalenderEntityInput = {
    where: BuildingScalarWhereInput
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyWithoutCalenderEntityInput>
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateManyRoleInput = {
    id?: string
    resource: string
    accessLevel?: $Enums.AccessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordResetToken?: string | null
    passwordExpiresAt?: Date | string | null
    passwordResetAt?: Date | string | null
  }

  export type PermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BuildingCreateManyComplexInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    calenderEntityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calenderEntity?: CalenderEntityUpdateOneWithoutBuildingsNestedInput
    photos?: FileUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateManyWithoutComplexInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutComplexesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutPhotosNestedInput
    units?: UnitUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateWithoutComplexesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutPhotosNestedInput
    units?: UnitUncheckedUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateManyWithoutComplexesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FloorCreateManyBuildingInput = {
    id?: string
    code: string
    name: string
    level: number
    grossArea?: number
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutPhotosNestedInput
    units?: UnitUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutPhotosNestedInput
    units?: UnitUncheckedUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateManyWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutFloorNestedInput
    units?: UnitUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
    units?: UnitUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateManyWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    grossArea?: FloatFieldUpdateOperationsInput | number
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyFloorInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitCreateManyFloorInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutRoomsNestedInput
    photos?: FileUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutUnitNestedInput
    photos?: FileUpdateManyWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutUnitNestedInput
    photos?: FileUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyUnitInput = {
    id?: string
    name: string
    code: string
    use?: $Enums.RoomUse
    floorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    photos?: FileUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateManyWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FileUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    units?: UnitUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    units?: UnitUncheckedUpdateManyWithoutPhotosNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutPhotosNestedInput
    complexes?: ComplexUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type FileUncheckedUpdateManyWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    unit?: UnitUpdateOneWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    use?: EnumRoomUseFieldUpdateOperationsInput | $Enums.RoomUse
    floorId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floor?: FloorUpdateOneRequiredWithoutUnitsNestedInput
    rooms?: RoomUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complex?: ComplexUpdateOneRequiredWithoutBuildingsNestedInput
    calenderEntity?: CalenderEntityUpdateOneWithoutBuildingsNestedInput
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    calenderEntityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUpdateManyWithoutComplexNestedInput
  }

  export type ComplexUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutComplexNestedInput
  }

  export type ComplexUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    totalBuildings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateManyCalenderEntityInput = {
    id?: string
    name: string
    code: string
    mainUse?: $Enums.MainUse
    totalFloors?: number
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.ServiceStatus
    condition?: $Enums.Condition
    criticality?: $Enums.Criticality
    complexId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateWithoutCalenderEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complex?: ComplexUpdateOneRequiredWithoutBuildingsNestedInput
    photos?: FileUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutCalenderEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FileUncheckedUpdateManyWithoutBuildingsNestedInput
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateManyWithoutCalenderEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mainUse?: EnumMainUseFieldUpdateOperationsInput | $Enums.MainUse
    totalFloors?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    complexId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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