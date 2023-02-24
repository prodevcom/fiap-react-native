import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Formik} from 'formik';

// Components
import {TextButton, TextInput} from '../../components';

// Hooks
import useSignIn from './hooks/useSignIn';

export default function SignInScreen() {
  const {initialValues, SignInSchema, doLogin} = useSignIn();

  return (
    <>
      <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, {setSubmitting}) => doLogin(values, setSubmitting)}>
        {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
          <View style={styles.container}>
            <Text style={styles.title}>FIAP</Text>
            <TextInput
              onChangeText={handleChange('email')}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              value={values.email}
              error={errors.email}
            />
            <TextInput
              onChangeText={handleChange('password')}
              placeholder="Digite sua senha"
              value={values.password}
              error={errors.password}
              secureTextEntry
            />
            <TextButton
              title={isSubmitting ? 'Carregando' : 'Entrar'}
              disabled={isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#be0e49',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed145d',
  },
  title: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
