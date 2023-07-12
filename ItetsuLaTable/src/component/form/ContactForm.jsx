import {
    Alert,
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm () {

    const [name,setName] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [message,setMessage] = useState('') ;
    const [sending,setSending] = useState(false) ;

    const [open, setOpen] = useState(false) ;
    const [alert, setAlert] = useState('') ;
    const [severity, setSeverity] = useState('success') ;

    const handleClose = () => {
        setOpen(false);
    };

    const resetForm = () => {
        setEmail("") ;
        setName("") ;
        setMessage("") ;
    }

    const handleSubmit = async  (event) => {
       event.preventDefault() ;
       setSending(true) ;

       if( name !== "" && email !== "" && message !== "") {
           const formData = ({name: name, email :email, message : message});
           emailjs.send(
                   'service_nbbpojk',
                   'template_y1rpiqp',
                   formData,
                   'weQnvM3nygYEBPMvF',
           ).then((result) => {
               setAlert("Le message a été envoyé.") ;
               setSeverity('success') ;
               setOpen(true) ;
               setSending(false) ;
               resetForm() ;
           }).catch((error) => {
                 setAlert("Le message n'a pas été envoyé.") ;
                 setSeverity('error') ;
                 setOpen(true) ;
                 setSending(false) ;
           });
       }
       else {
           setAlert("Veuillez remplir tous les champs") ;
           setSeverity('info') ;
           setOpen(true) ;
           setSending(false) ;
       }
    } ;


    return (
        <form onSubmit={handleSubmit} >
            {alert && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} >
                    {alert}
                </Alert>
            </Snackbar>
            }
            <Box mb={5} sx={{ width: '100%' }}>
                <Container fixed >
                    <Typography aria-label={'Formulaire de contact'} component={'h2'} variant={'h4'} my={2} >
                        <strong>Formulaire de contact </strong>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl sx={{ width:'100%' }} >
                                <FormLabel sx={{"&.Mui-focused" : {color:'var(--color-secondary)'} }} >Nom</FormLabel>
                                <Input value={name} sx={{ "&:after" : {borderBottomColor:'var(--color-secondary) !important'} }} onChange={(evt) => {setName(evt.target.value)} } aria-describedby={"Le nom de l'utilisateur"} aria-label={'input nom'} fullWidth autoComplete={'firstname'} name={'name'} placeholder={'Votre nom'} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl sx={{ width:'100%' }}  >
                                <FormLabel sx={{"&.Mui-focused" : {color:'var(--color-secondary)'} }} >Email</FormLabel>
                                <Input value={email} sx={{"&:after" : {borderBottomColor:'var(--color-secondary) !important'} }} onChange={(evt) => {setEmail(evt.target.value)}} type={'email'} aria-describedby={"L'email de l'utilisateur"} aria-label={'input email'} fullWidth autoComplete={'email'} name={'email'} placeholder={'Email'}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl sx={{ width:'100%' }} >
                                <FormLabel sx={{"&.Mui-focused" : {color:'var(--color-secondary)'} }} >Votre texte</FormLabel>
                                <TextField value={message} onChange={(evt) => {setMessage(evt.target.value)} }  aria-describedby={"Un message envoyé par l'utilisateur "} aria-label={'input message'} fullWidth multiline sx={{ width:'100%' ,
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'var(--color-secondary)',
                                        },
                                    }
                                }} rows={4} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button disabled={sending} aria-label={'button prise de contact'}  sx={{ width: '100%' , backgroundColor : 'var(--color-secondary)' ,  '&:hover' : { backgroundColor : 'var(--backgroundColor)'} }} variant="contained" type={'submit'} >
                                Envoyer
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </form>
    )
}