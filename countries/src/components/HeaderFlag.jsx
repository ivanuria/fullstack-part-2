const HeaderFlag = ({country}) => {
    if (!country) {
        return null;
    }
    return (<img className="content-wrapper__flag" src={country.flags.svg} alt={country.flags.alt}/>)
}

export default HeaderFlag