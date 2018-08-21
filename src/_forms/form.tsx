import * as React from 'react';
import { Field } from './field';

interface IFormProperties<T> {
    values: Partial<T>;
    children?: Array<React.ReactElement<Field<T, keyof T>>> | React.ReactElement<Field<T, keyof T>>;
}

export class Form<T> extends React.Component<IFormProperties<T>> {

}