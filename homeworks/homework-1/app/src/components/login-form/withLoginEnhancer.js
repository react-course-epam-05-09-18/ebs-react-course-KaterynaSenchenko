import { compose, lifecycle, withHandlers } from 'recompose';

export const withLoginEnhancer = compose(
  lifecycle({
    componentWillMount() {
      this.props.onEnterPage();
    },
  }),
  withHandlers({
    handleSubmit: props => e => {
      e.preventDefault();
      const {
        onSubmit,
        formFields: { login, password },
      } = props;
      onSubmit({ login: login.value, password: password.value });
    },
    handleChange: props => e => {
      props.updateField(e.target.name, { value: e.target.value });
    }
  })
);
