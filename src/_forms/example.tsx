import * as React from 'react';
import { IGame } from 'src/common/models';
import { Field } from './field';
import { Form } from './form';

export class ExampleComponent extends React.Component {
    public render() {
        return <>
            <Form<IGame> values={{}}>
                <Field<IGame, 'bggLink'> value={'test'} />
                <Field<IGame, 'maxPlayers'> value={5} />
            </Form>
        </>;
    }
}