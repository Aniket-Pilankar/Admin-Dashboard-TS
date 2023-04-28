export function generateClasses<T extends string>(componentName: string, classes: T[]) {
  return classes.reduce((acc, curr) => {
    acc[curr] = `DashBoaard${componentName}-${curr}`;
    return acc;
  }, {} as Record<T, string>);
}
