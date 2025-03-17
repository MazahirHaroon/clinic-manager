export const omitKeyValues = <T extends object, K extends keyof T>(
  omittedProps: K[],
  completeObject: T
): Omit<T, K> => {
  return Object.fromEntries(
    Object.entries(completeObject).filter(
      ([key]) => !omittedProps.includes(key as K)
    )
  ) as Omit<T, K>;
};
