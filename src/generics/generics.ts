export const printObjects = (argument: any) => {
    console.log(argument);

}

export function genericFuction<T>(argument: T): T {
    return argument

}

export const genericFuctionArrow = <T>(argument: T) => argument;
 