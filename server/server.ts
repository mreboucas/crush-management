import App from './app'

var porta = 5000;

App.app.listen(porta, () => console.log('Server is runnining, port ' + porta));


/**
 * Comandos que serão responsáveis por fechar nossa conexão com o banco de dados caso o processo 
 * da nossa API seja terminado inesperadamente, como por exemplo, quando executamos ctrl+C no terminal.
 */
process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));