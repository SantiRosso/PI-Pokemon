import s from "./Loader.module.css"

const Loader = () => {
    return(
        <div className={s.container}>
            <div className={s.item}>
                <div className={s.ball}></div>
                <div className={s.halfBall}></div>
                <div className={s.bigButton}></div>
                <div className={s.smallButton}></div>
                <div className={s.horizon}></div>
            </div>
        </div>
        
    )
}

export default Loader;