import React, { useState, useContext,  useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autentificacion/authContext';

import MenuItem from '@material-ui/core/MenuItem';
function Copyright() { 
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})); 

const Registro = (props) => {

    //extraer los valores del context
    //use context permite acceder a todas las funciones y al state
    const alertaContext = useContext(AlertaContext);
    const { /*alerta,*/ mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;


    //En caso de que el usuario se haya autenticado o registrado o sea
    //un registro duplicado
    useEffect(() => {
        if(autenticado) {
            //aca redijiremos al usuario autenticad a la pag de proyectos
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    //State para iniciar sesión
    //los states tiene que tener el mismo nombre que name ej name=nombre
    const [usuario, guardarUsuario] = useState({
        //rut: '',
        nombre: '',
        apellido: '',
        //ciudad: '',
        //telefono: '',
        cargo: '',
        email:'',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const { nombre, apellido,  cargo, email, password, confirmar } = usuario;

    //aqui vamos a ir guardando en el State
    const onChange = e => {
        guardarUsuario({
            //traemos la copia de usuario para lo que este en el State no se 
            //sobre escriba en otra pieza de esta
            //para reescribir la actual -> [e.target.name] : e.target.value
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if( nombre.trim() === '' || apellido.trim() === '' || cargo.trim() === '' || email.trim() === '' || password.trim() === '' || 
        confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        
        //Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }
        //Los dos passwors son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales');
            return;
        }
        
        //Pasarlo al 
        registrarUsuario({
            //rut,
            nombre,
            apellido,
            //ciudad,
           //telefono,
            cargo, 
            email,
            password
        });
    }

    const profesion = [
      {
        value: 'cargo',
        label: 'Técnico en Prevención de Riesgos'
      },
      {
        value: 'cargo',
        label: 'Prevencionista de Riesgos'
      },
      {
        value: 'cargo',
        label: 'Jefe de SSOMA'
      },
    ]; 

   const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro de Usuarios
        </Typography>
        <form className={classes.form} //noValidate
            onSubmit={onSubmit}
        >
          <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                //autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                autoFocus
                value={nombre}
                onChange={onChange}
                >
               
              </TextField>
              
            </Grid>
            
            <Grid item xs={12} sm={6}>
            
              <TextField
                htmlFor="apellido"
                type="text"
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="lname"
                value={apellido}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="cargo"
                variant="outlined"
                required
                fullWidth
                id="cargo"
                select
                label="Cargo"
                name="cargo"
                autoComplete="cargo"
                value={cargo}
                onChange={onChange}
              >
                 {profesion.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="email"
                type="text"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="password"
                type="password"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                //type="password"
                id="password"
                value={password}
                onChange={onChange}
                //autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="password"
                type="password"
                variant="outlined"
                required
                fullWidth
                id="confirmar"
                label="Confirmar Password"
                name="confirmar"
                //autoComplete="confirmar"
                value={confirmar}
                onChange={onChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            input type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="Registrarme"
          >
            Registrarme
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </div>
          

        </form>

      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>

    );
}

export default Registro;