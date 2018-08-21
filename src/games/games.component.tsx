import { Field, Form, Formik, FormikProps } from 'formik';
import * as React from 'react';
import { IGame } from 'src/common/models';

export class GamesComponent extends React.Component<{}> {

    public render() {
        return <>
            <Formik initialValues={{}}
                onSubmit={this.handleSubmit}
                render={this.renderForm}
            />
        </>;
    }

    private handleSubmit(values: IGame) {
        alert(JSON.stringify(values));
    }

    private renderForm(formikProps: FormikProps<IGame>) {
        return <Form>
            <Field type="text" name="name" />
            <button type="submit">Submit</button>
        </Form>;
    }
}