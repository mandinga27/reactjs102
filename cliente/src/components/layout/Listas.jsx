import React from 'react';
import { Link } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    //makeStyles
 } from '@material-ui/core';

 //import CloudQueueIcon from '@material-ui/icons/CloudQueue';
 //import DeckIcon from '@material-ui/icons/Deck';
 import VpnKeyIcon from '@material-ui/icons/VpnKey';
 import AddIcCallIcon from '@material-ui/icons/AddIcCall';
 import AddIcon from '@material-ui/icons/Add';
 import ReceiptIcon from '@material-ui/icons/Receipt';
 import AssignmentIcon from '@material-ui/icons/Assignment';
 import ExitToAppIcon from '@material-ui/icons/ExitToApp';

 /*
 const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root: {
        fontSize: 28,
    },
    text: {
        fontSize: 28,
    },
}));
*/
const Listas = () => {
    //const classes = useStyles();
    //const preventDefault = (event) => event.preventDefault();

    return (
        <div>
            <List component='nav'>

                <ListItem button>
                    <ListItemIcon>
                        <VpnKeyIcon />
                    </ListItemIcon>
                     <Link to={'/login'} className="enlace-cuenta">
                    <ListItemText 
                        //className={classes.text}
                        primary='Login' 
                        
                    />

                </Link>
                        
                        
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <Link to={'/registro'} className="enlace-cuenta">
                    <ListItemText 
                        primary='Registro' 
                    />
                    </Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ReceiptIcon />
                    </ListItemIcon>
                    <ListItemText 
                        //className={classes.text}
                        primary='Charlas' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ReceiptIcon />
                    </ListItemIcon>
                    <ListItemText 
                        //className={classes.text}
                        primary='Documentos' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <Link to={'/proyectos'} className="enlace-cuenta">
                    <ListItemText 
                        //className={classes.text}
                        primary='Tareas Diarias' 
                    />
                    </Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText 
                        //className={classes.text}
                        primary='Salir' />
                </ListItem>

                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <AddIcCallIcon />
                    </ListItemIcon>
                    <ListItemText 
                        //className={classes.text}
                        primary='Contactos' />
                </ListItem>

                <Divider />
            </List>
        </div>
    )
}

export default Listas;
