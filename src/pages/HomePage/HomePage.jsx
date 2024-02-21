import css from "./HomePage.module.css"


const HomePage = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title} >Welcome to the Phonebook !</h1>
        </div>
    )
}
export default HomePage






/*
const HomePage = () => {
      const [opacity, setOpacity] = useState(0);

   useEffect(() => {
        let start;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            if (progress < 1000) {
                setOpacity(progress / 1000);
                requestAnimationFrame(animate);
            } else {
                setOpacity(1);
            }
        };
        requestAnimationFrame(animate);
    }, []);

     return (
        <div className={css.container}>
            <h1 className={css.title} style={{ opacity }}>Welcome to the Phonebook !</h1>
        </div>
    )
}

export default HomePage;
*/