import Video from './../../assets/Videos/spider-man.mov';
import classes from './Header.module.css';

export default function Hearder(params) {
    return (
            <>
               <header className={`${classes.header}`}>
                   <div className={`${classes.overla}`}></div>
                    {/* <iframe width="1182" height="665" src="https://www.youtube.com/embed/u34gHaRiBIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <video playsInline autoPlay  loop controls className={classes.video}>
                        <source src={Video} type="video/mp4" />
                    </video>

               </header>
            </> 

    ) 
}