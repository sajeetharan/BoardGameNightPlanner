import * as React from 'react';

interface IFieldProperties<T, K extends keyof T> {
    value: T[K] extends string | number | boolean ? T[K] : never;
}

export class Field<T, K extends keyof T> extends React.Component<IFieldProperties<T, K>> {

}