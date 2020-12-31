/**
 * A class that can perform highway hashing
 */
export interface IHash {
  /**
   * @param data data to append to the ongoing hash function
   */
  append(data: Uint8Array): void;

  /**
   * Generate a 8 byte long buffer that represents the 64bit hash output
   */
  finalize64(): Uint8Array;

  /**
   * Generate a 16 byte long buffer that represents the 128bit hash output
   */
  finalize128(): Uint8Array;

  /**
   * Generate a 32 byte long buffer that represents the 256bit hash output
   */
  finalize256(): Uint8Array;
}

/**
 * Class that can create highway hashers
 */
export interface HashCreator {
  /**
   * Create a highwayhasher based on the given 32 byte long buffer
   */
  create(key: Uint8Array | null | undefined): IHash;
}
