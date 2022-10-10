// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  BigDecimal,
  BigInt,
  Bytes,
  Entity,
  store,
  TypedMap,
  Value,
  ValueKind} from "@graphprotocol/graph-ts";

export class TokenHolderTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    const id = this.get("id");
    assert(
      id != null,
      "Cannot save TokenHolderTransaction entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenHolderTransaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenHolderTransaction", id.toString(), this);
    }
  }

  static load(id: string): TokenHolderTransaction | null {
    return changetype<TokenHolderTransaction | null>(
      store.get("TokenHolderTransaction", id)
    );
  }

  get id(): string {
    const value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigDecimal {
    const value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get block(): BigInt {
    const value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get date(): string {
    const value = this.get("date");
    return value!.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }

  get type(): string {
    const value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get holder(): string {
    const value = this.get("holder");
    return value!.toString();
  }

  set holder(value: string) {
    this.set("holder", Value.fromString(value));
  }

  get previousBalance(): BigDecimal {
    const value = this.get("previousBalance");
    return value!.toBigDecimal();
  }

  set previousBalance(value: BigDecimal) {
    this.set("previousBalance", Value.fromBigDecimal(value));
  }

  get timestamp(): string {
    const value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get transaction(): Bytes {
    const value = this.get("transaction");
    return value!.toBytes();
  }

  set transaction(value: Bytes) {
    this.set("transaction", Value.fromBytes(value));
  }

  get transactionLogIndex(): BigInt {
    const value = this.get("transactionLogIndex");
    return value!.toBigInt();
  }

  set transactionLogIndex(value: BigInt) {
    this.set("transactionLogIndex", Value.fromBigInt(value));
  }

  get value(): BigDecimal {
    const value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class TokenHolderBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    const id = this.get("id");
    assert(id != null, "Cannot save TokenHolderBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenHolderBalance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenHolderBalance", id.toString(), this);
    }
  }

  static load(id: string): TokenHolderBalance | null {
    return changetype<TokenHolderBalance | null>(
      store.get("TokenHolderBalance", id)
    );
  }

  get id(): string {
    const value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): string {
    const value = this.get("date");
    return value!.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }

  get holder(): string {
    const value = this.get("holder");
    return value!.toString();
  }

  set holder(value: string) {
    this.set("holder", Value.fromString(value));
  }

  get balance(): BigDecimal {
    const value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }
}

export class TokenHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    const id = this.get("id");
    assert(id != null, "Cannot save TokenHolder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenHolder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenHolder", id.toString(), this);
    }
  }

  static load(id: string): TokenHolder | null {
    return changetype<TokenHolder | null>(store.get("TokenHolder", id));
  }

  get id(): string {
    const value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigDecimal {
    const value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get holder(): Bytes {
    const value = this.get("holder");
    return value!.toBytes();
  }

  set holder(value: Bytes) {
    this.set("holder", Value.fromBytes(value));
  }

  get token(): string {
    const value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balances(): Array<string> {
    const value = this.get("balances");
    return value!.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }
}

export class TokenDailySnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    const id = this.get("id");
    assert(id != null, "Cannot save TokenDailySnapshot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenDailySnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenDailySnapshot", id.toString(), this);
    }
  }

  static load(id: string): TokenDailySnapshot | null {
    return changetype<TokenDailySnapshot | null>(
      store.get("TokenDailySnapshot", id)
    );
  }

  get id(): string {
    const value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): string {
    const value = this.get("date");
    return value!.toString();
  }

  set date(value: string) {
    this.set("date", Value.fromString(value));
  }

  get token(): string {
    const value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get balancesList(): Array<string> {
    const value = this.get("balancesList");
    return value!.toStringArray();
  }

  set balancesList(value: Array<string>) {
    this.set("balancesList", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    const id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    const value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    const value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get blockchain(): string {
    const value = this.get("blockchain");
    return value!.toString();
  }

  set blockchain(value: string) {
    this.set("blockchain", Value.fromString(value));
  }

  get name(): string {
    const value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get dailySnapshots(): Array<string> {
    const value = this.get("dailySnapshots");
    return value!.toStringArray();
  }

  set dailySnapshots(value: Array<string>) {
    this.set("dailySnapshots", Value.fromStringArray(value));
  }
}
