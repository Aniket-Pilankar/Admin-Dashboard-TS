export function generateClasses<T extends string>(componentName: string, classes: T[]) {
  return classes.reduce((acc, curr) => {
    acc[curr] = `DashBoaard${componentName}-${curr}`;
    return acc;
  }, {} as Record<T, string>);
}

export const joinName = <T extends string>(firstName: T, lastName: T) => {
  const fullName = `${firstName} ${lastName}`;
  return fullName
    .trim()
    .split(' ')
    .filter((s) => s)
    .join(' ');
};
