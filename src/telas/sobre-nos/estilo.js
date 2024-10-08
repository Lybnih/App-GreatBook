import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#286D50',
  },
  titulo: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    color: 'white',
    padding: 16,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  texto: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  imagem: {
    width: 290,
    height: 290,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 50,
  },
  videoContainer: {
    width: '85%',
    height: 200,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
  botaoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  botao: {
    alignItems: 'center',
    width: '50%',
    marginTop: 15,
    backgroundColor: '#286D50',
    borderRadius: 10,
    padding: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});